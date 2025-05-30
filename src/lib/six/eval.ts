import {
	CourantParser,
	ReturnStmtContext,
	type ThrowStmtContext,
	type TryCatchStmtContext
} from '$lib/courant/grammar/CourantParser';
import * as defaultEval from '$lib/courant/eval';
import type { Memory } from '$lib/courant/state';
import { CharStreams, CommonTokenStream } from 'antlr4ts';
import { CourantLexer } from '$lib/courant/grammar/CourantLexer';
import { CourantErrorListener } from '$lib/courant/errorlistener';
import { Label } from '$lib/courant/label';
import { ProgramContext } from '$lib/courant/programcontext';
import type { CourantLabeledValue } from '$lib/courant/types';

// Custom visitor to evaluate program
export class EvalVisitor extends defaultEval.EvalVisitor {
	visitThrowStmt(ctx: ThrowStmtContext) {
		let val: CourantLabeledValue = this.visit(ctx.expr());
		// Throwing inside a pc should throw a value of label > pc
		let newLabel = this.pc.currentContext.union(val.label);
		let newValue = {
			label: newLabel,
			value: val.value
		};
		// Throw used for control flow... not good but easy
		throw new defaultEval.InternalThrow(newValue, this.pc.currentContext);
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
