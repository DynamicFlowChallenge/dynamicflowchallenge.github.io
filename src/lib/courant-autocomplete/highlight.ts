import { styleTags, tags as t } from '@lezer/highlight';

export const courantHighlighting = styleTags({
	Identifier: t.variableName,
	Number: t.number,
	Boolean: t.atom,
	LineComment: t.lineComment,
	'( )': t.paren,
	'{ }': t.brace,
	'[ ]': t.squareBracket,
	', ;': t.separator,
	'Plus Minus Mul Div CompareOp': t.operator,
	'=': t.definitionOperator,
	'=>': t.punctuation,
	'_return _throw _try _catch _if _else _while raise': t.keyword,
	'and or not': t.operatorKeyword
});
