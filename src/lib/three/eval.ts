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
import { type CourantLabeledValue } from '$lib/courant/types';
import * as defaultEval from '$lib/courant/eval';
import type { Memory } from '$lib/courant/state';
import { CharStreams, CommonTokenStream } from 'antlr4ts';
import { CourantLexer } from '$lib/courant/grammar/CourantLexer';
import { CourantErrorListener } from '$lib/courant/errorlistener';
import { Label } from '$lib/courant/label';
import { ProgramContext } from '$lib/courant/programcontext';

// Custom visitor to evaluate program
export class EvalVisitor extends defaultEval.EvalVisitor {
	visitAssignment(ctx: AssignmentContext) {
		let varName = ctx.IDENT().text;
		let labeledRes: CourantLabeledValue = this.visit(ctx.expr());
		let newLabel = this.pc.currentContext.union(labeledRes.label);
		let newValue = {
			label: newLabel,
			value: labeledRes.value
		};
		this.memory.setValue(varName, newValue);
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

	visitRaiseExpr(ctx: RaiseExprContext): CourantLabeledValue {
		throw new Error('raise not authroized yet');
	}

	visitFunctionDeclExpr(ctx: FunctionDeclExprContext): CourantLabeledValue {
		throw new Error('functions not authorized yet');
	}

	visitParensExpr(ctx: ParensExprContext): CourantLabeledValue {
		return this.visit(ctx.expr());
	}

	visitFunctionCallExpr(ctx: FunctionCallExprContext): CourantLabeledValue {
		throw new Error('functions not authorized yet');
	}

	visitFunctionBody(ctx: FunctionBodyContext): CourantLabeledValue {
		throw new Error('functions not authorized yet');
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
