import { LRLanguage, LanguageSupport, indentNodeProp, foldNodeProp, foldInside, continuedIndent, delimitedIndent } from '@codemirror/language';
import { parser } from './parser';
import { courantCompletion } from './index';

export const courantLanguage = LRLanguage.define({
	parser: parser.configure({
		props: [
			indentNodeProp.add({
				IfStmt: continuedIndent({ except: /^\s*else\b/ }),
				WhileStmt: continuedIndent(),
				BlockStmt: delimitedIndent({ closing: '}' }),
				TryCatchStmt: continuedIndent()
			}),
			foldNodeProp.add({
				BlockStmt: foldInside
			})
		]
	}),
	languageData: {
		commentTokens: { line: '#' },
		indentOnInput: /^\s*\}$/
	}
});

export const courant = () =>
	new LanguageSupport(courantLanguage, [
		courantLanguage.data.of({
			autocomplete: courantCompletion
		})
	]);
