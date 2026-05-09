import { syntaxTree } from '@codemirror/language';
import { type SyntaxNode } from '@lezer/common';
import { type CompletionContext, type CompletionResult, type Completion } from '@codemirror/autocomplete';

export const stmtKeywords = 'if while return throw try else catch'.split(' ');
export const exprKeywords = 'true false raise not and or'.split(' ');
export const allKeywords = [...stmtKeywords, ...exprKeywords];

export function courantCompletion(context: CompletionContext): CompletionResult | null {
	const word = context.matchBefore(/[a-zA-Z_][a-zA-Z0-9_]*/);
	if (!word || (word.from === word.to && !context.explicit)) return null;

	const tree = syntaxTree(context.state);
	const node = tree.resolveInner(context.pos, -1);

	let isStmt = false, isAfterIf = false, isAfterTry = false;
	for (let temp: SyntaxNode | null = node; temp; temp = temp.parent) {
		if (temp.name === 'Program' || temp.name === 'BlockStmt' || temp.name === 'ExprStmt') {
			isStmt = true;
			const prev = temp.name === 'ExprStmt' ? temp.prevSibling : temp.childBefore(word.from);
			if (prev) {
				isAfterIf = prev.name === 'IfStmt';
				isAfterTry = prev.name === 'TryCatchStmt';
			}
			break;
		}
	}

	const options: Completion[] = [];

	if (isStmt) {
		for (const kw of stmtKeywords) {
			if (kw === 'else' && !isAfterIf) continue;
			if (kw === 'catch' && !isAfterTry) continue;
			options.push({ label: kw, type: 'keyword', boost: 100 });
		}
	}
	for (const kw of exprKeywords) {
		options.push({ label: kw, type: 'keyword', boost: 100 });
	}

	const seen = new Set<string>();
	tree.iterate({
		enter: (n) => {
			if (n.name === 'Identifier' && n.from !== word.from) {
				const name = context.state.sliceDoc(n.from, n.to);
				if (!allKeywords.includes(name)) seen.add(name);
			}
		}
	});

	for (const name of seen) {
		options.push({ label: name, type: 'variable', boost: 50 });
	}

	return {
		from: word.from,
		options: options,
		validFor: /^[a-zA-Z_][a-zA-Z0-9_]*$/
	};
}
