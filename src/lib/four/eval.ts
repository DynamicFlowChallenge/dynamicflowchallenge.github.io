import {
	AssignmentContext,
	CourantParser,
	type FunctionBodyContext,
	type FunctionCallExprContext,
	type FunctionDeclExprContext,
	type ParensExprContext,
	type RaiseExprContext,
	type ReturnStmtContext,
	type ThrowStmtContext,
	type TryCatchStmtContext
} from '$lib/courant/grammar/CourantParser';
import { checkType, type CourantLabeledValue } from '$lib/courant/types';
import * as defaultEval from '$lib/courant/eval';
import type { Memory } from '$lib/courant/state';
import { CharStreams, CommonTokenStream } from 'antlr4ts';
import { CourantLexer } from '$lib/courant/grammar/CourantLexer';
import { CourantErrorListener } from '$lib/courant/errorlistener';
import { Label } from '$lib/courant/label';
import { ProgramContext } from '$lib/courant/programcontext';

// Custom visitor to evaluate program
export class EvalVisitor extends defaultEval.EvalVisitor {
	visitFunctionBody(ctx: FunctionBodyContext): CourantLabeledValue {
		let val: CourantLabeledValue;
		let expr = ctx.expr();
		if (expr != undefined) {
			val = this.visit(expr);
		} else {
			throw new Error('functions body cannot be a block');
		}
		val = val!; // Force because we know that val will always have a value
		// Returning inside a pc should return a value of label > pc
		let newLabel = this.pc.currentContext.union(val.label);
		let newValue = {
			label: newLabel,
			value: val.value
		};
		return newValue!;
	}

	visitFunctionCallExpr(ctx: FunctionCallExprContext): CourantLabeledValue {
		let fn: CourantLabeledValue = this.visit(ctx.expr(0));
		checkType(fn.value, 'function');
		let params: CourantLabeledValue[] = [];
		for (let i = 1; i < ctx.expr().length; i++) {
			params.push(this.visit(ctx.expr(i)));
		}

		const res = fn.value.value.evaluate(this, params);
		return res;
	}

	visitReturnStmt(ctx: ReturnStmtContext) {
		throw new Error('return not authorized yet');
	}

	visitThrowStmt(ctx: ThrowStmtContext) {
		throw new Error('throw not authorized yet');
	}

	visitTryCatchStmt(ctx: TryCatchStmtContext) {
		throw new Error('try/catch not authorized yet');
	}
}

export function run(code: string, memory: Memory) {
	const chars = CharStreams.fromString(code);

	const lexer = new CourantLexer(chars);
	// Change error lisneter to custom error listener
	lexer.removeErrorListeners();
	lexer.addErrorListener(new CourantErrorListener());

	const tokens = new CommonTokenStream(lexer);

	const parser = new CourantParser(tokens);
	// Change error lisneter to custom error listener
	parser.removeErrorListeners();
	parser.addErrorListener(new CourantErrorListener());

	const tree = parser.prog();
	// We knwo that that parsinc succeeded as an error would have thrown out of the funciton
	// due to the custom listener
	const visitor = new EvalVisitor(
		memory,
		new ProgramContext([Label.bottom()]),
		new ProgramContext([Label.bottom()]),
		new ProgramContext([Label.bottom()])
	);
	visitor.visit(tree);
}
