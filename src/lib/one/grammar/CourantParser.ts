// Generated from src/lib/one/Courant.g4 by ANTLR 4.9.0-SNAPSHOT

import { ATN } from 'antlr4ts/atn/ATN';
import { ATNDeserializer } from 'antlr4ts/atn/ATNDeserializer';
import { FailedPredicateException } from 'antlr4ts/FailedPredicateException';
import { NotNull } from 'antlr4ts/Decorators';
import { NoViableAltException } from 'antlr4ts/NoViableAltException';
import { Override } from 'antlr4ts/Decorators';
import { Parser } from 'antlr4ts/Parser';
import { ParserRuleContext } from 'antlr4ts/ParserRuleContext';
import { ParserATNSimulator } from 'antlr4ts/atn/ParserATNSimulator';
import { RecognitionException } from 'antlr4ts/RecognitionException';
import { RuleContext } from 'antlr4ts/RuleContext';
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from 'antlr4ts/tree/TerminalNode';
import { Token } from 'antlr4ts/Token';
import type { TokenStream } from 'antlr4ts/TokenStream';
import type { Vocabulary } from 'antlr4ts/Vocabulary';
import { VocabularyImpl } from 'antlr4ts/VocabularyImpl';

import * as Utils from 'antlr4ts/misc/Utils';

import type { CourantVisitor } from './CourantVisitor';

export class CourantParser extends Parser {
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly T__2 = 3;
	public static readonly T__3 = 4;
	public static readonly BOOLEAN = 5;
	public static readonly SKIPP = 6;
	public static readonly IF = 7;
	public static readonly THEN = 8;
	public static readonly ELSE = 9;
	public static readonly WHILE = 10;
	public static readonly DO = 11;
	public static readonly TRUE = 12;
	public static readonly FALSE = 13;
	public static readonly NOT = 14;
	public static readonly AND = 15;
	public static readonly OR = 16;
	public static readonly RETURN = 17;
	public static readonly THROW = 18;
	public static readonly TRY = 19;
	public static readonly CATCH = 20;
	public static readonly RAISE = 21;
	public static readonly ASSIGN = 22;
	public static readonly SEMI = 23;
	public static readonly PLUS = 24;
	public static readonly MINUS = 25;
	public static readonly MUL = 26;
	public static readonly DIV = 27;
	public static readonly LT = 28;
	public static readonly LEQ = 29;
	public static readonly EQ = 30;
	public static readonly NEQ = 31;
	public static readonly GT = 32;
	public static readonly GEQ = 33;
	public static readonly COMMA = 34;
	public static readonly ARROW = 35;
	public static readonly IDENT = 36;
	public static readonly NUM = 37;
	public static readonly LINE_COMMENT = 38;
	public static readonly WS = 39;
	public static readonly RULE_prog = 0;
	public static readonly RULE_stmt = 1;
	public static readonly RULE_expr = 2;
	public static readonly RULE_functionDeclExpr = 3;
	public static readonly RULE_functionBody = 4;
	public static readonly RULE_paramList = 5;
	public static readonly RULE_opm = 6;
	public static readonly RULE_opa = 7;
	public static readonly RULE_opb = 8;
	public static readonly RULE_opc = 9;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		'prog',
		'stmt',
		'expr',
		'functionDeclExpr',
		'functionBody',
		'paramList',
		'opm',
		'opa',
		'opb',
		'opc'
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined,
		"'{'",
		"'}'",
		"'('",
		"')'",
		undefined,
		"'skip'",
		"'if'",
		"'then'",
		"'else'",
		"'while'",
		"'do'",
		"'true'",
		"'false'",
		"'not'",
		"'and'",
		"'or'",
		"'return'",
		"'throw'",
		"'try'",
		"'catch'",
		"'raise'",
		"'='",
		"';'",
		"'+'",
		"'-'",
		"'*'",
		"'/'",
		"'<'",
		"'<='",
		"'=='",
		"'!='",
		"'>'",
		"'>='",
		"','",
		"'=>'"
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined,
		undefined,
		undefined,
		undefined,
		undefined,
		'BOOLEAN',
		'SKIPP',
		'IF',
		'THEN',
		'ELSE',
		'WHILE',
		'DO',
		'TRUE',
		'FALSE',
		'NOT',
		'AND',
		'OR',
		'RETURN',
		'THROW',
		'TRY',
		'CATCH',
		'RAISE',
		'ASSIGN',
		'SEMI',
		'PLUS',
		'MINUS',
		'MUL',
		'DIV',
		'LT',
		'LEQ',
		'EQ',
		'NEQ',
		'GT',
		'GEQ',
		'COMMA',
		'ARROW',
		'IDENT',
		'NUM',
		'LINE_COMMENT',
		'WS'
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(
		CourantParser._LITERAL_NAMES,
		CourantParser._SYMBOLIC_NAMES,
		[]
	);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return CourantParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string {
		return 'Courant.g4';
	}

	// @Override
	public get ruleNames(): string[] {
		return CourantParser.ruleNames;
	}

	// @Override
	public get serializedATN(): string {
		return CourantParser._serializedATN;
	}

	protected createFailedPredicateException(
		predicate?: string,
		message?: string
	): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(CourantParser._ATN, this);
	}
	// @RuleVersion(0)
	public prog(): ProgContext {
		let _localctx: ProgContext = new ProgContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, CourantParser.RULE_prog);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 23;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (
					((_la & ~0x1f) === 0 &&
						((1 << _la) &
							((1 << CourantParser.T__0) |
								(1 << CourantParser.T__2) |
								(1 << CourantParser.BOOLEAN) |
								(1 << CourantParser.IF) |
								(1 << CourantParser.WHILE) |
								(1 << CourantParser.NOT) |
								(1 << CourantParser.RETURN) |
								(1 << CourantParser.THROW) |
								(1 << CourantParser.TRY) |
								(1 << CourantParser.RAISE) |
								(1 << CourantParser.PLUS) |
								(1 << CourantParser.MINUS))) !==
							0) ||
					_la === CourantParser.IDENT ||
					_la === CourantParser.NUM
				) {
					{
						{
							this.state = 20;
							this.stmt();
						}
					}
					this.state = 25;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 26;
				this.match(CourantParser.EOF);
			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public stmt(): StmtContext {
		let _localctx: StmtContext = new StmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, CourantParser.RULE_stmt);
		let _la: number;
		try {
			this.state = 75;
			this._errHandler.sync(this);
			switch (this.interpreter.adaptivePredict(this._input, 3, this._ctx)) {
				case 1:
					_localctx = new AssignmentContext(_localctx);
					this.enterOuterAlt(_localctx, 1);
					{
						this.state = 28;
						this.match(CourantParser.IDENT);
						this.state = 29;
						this.match(CourantParser.ASSIGN);
						this.state = 30;
						this.expr(0);
						this.state = 31;
						this.match(CourantParser.SEMI);
					}
					break;

				case 2:
					_localctx = new ExprStmtContext(_localctx);
					this.enterOuterAlt(_localctx, 2);
					{
						this.state = 33;
						this.expr(0);
						this.state = 34;
						this.match(CourantParser.SEMI);
					}
					break;

				case 3:
					_localctx = new ReturnStmtContext(_localctx);
					this.enterOuterAlt(_localctx, 3);
					{
						this.state = 36;
						this.match(CourantParser.RETURN);
						this.state = 37;
						this.expr(0);
						this.state = 38;
						this.match(CourantParser.SEMI);
					}
					break;

				case 4:
					_localctx = new BlockStmtContext(_localctx);
					this.enterOuterAlt(_localctx, 4);
					{
						this.state = 40;
						this.match(CourantParser.T__0);
						this.state = 44;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						while (
							((_la & ~0x1f) === 0 &&
								((1 << _la) &
									((1 << CourantParser.T__0) |
										(1 << CourantParser.T__2) |
										(1 << CourantParser.BOOLEAN) |
										(1 << CourantParser.IF) |
										(1 << CourantParser.WHILE) |
										(1 << CourantParser.NOT) |
										(1 << CourantParser.RETURN) |
										(1 << CourantParser.THROW) |
										(1 << CourantParser.TRY) |
										(1 << CourantParser.RAISE) |
										(1 << CourantParser.PLUS) |
										(1 << CourantParser.MINUS))) !==
									0) ||
							_la === CourantParser.IDENT ||
							_la === CourantParser.NUM
						) {
							{
								{
									this.state = 41;
									this.stmt();
								}
							}
							this.state = 46;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
						}
						this.state = 47;
						this.match(CourantParser.T__1);
					}
					break;

				case 5:
					_localctx = new IfStmtContext(_localctx);
					this.enterOuterAlt(_localctx, 5);
					{
						this.state = 48;
						this.match(CourantParser.IF);
						this.state = 49;
						this.match(CourantParser.T__2);
						this.state = 50;
						this.expr(0);
						this.state = 51;
						this.match(CourantParser.T__3);
						this.state = 52;
						this.stmt();
						this.state = 55;
						this._errHandler.sync(this);
						switch (this.interpreter.adaptivePredict(this._input, 2, this._ctx)) {
							case 1:
								{
									this.state = 53;
									this.match(CourantParser.ELSE);
									this.state = 54;
									this.stmt();
								}
								break;
						}
					}
					break;

				case 6:
					_localctx = new WhileStmtContext(_localctx);
					this.enterOuterAlt(_localctx, 6);
					{
						this.state = 57;
						this.match(CourantParser.WHILE);
						this.state = 58;
						this.match(CourantParser.T__2);
						this.state = 59;
						this.expr(0);
						this.state = 60;
						this.match(CourantParser.T__3);
						this.state = 61;
						this.stmt();
					}
					break;

				case 7:
					_localctx = new ThrowStmtContext(_localctx);
					this.enterOuterAlt(_localctx, 7);
					{
						this.state = 63;
						this.match(CourantParser.THROW);
						this.state = 64;
						this.expr(0);
						this.state = 65;
						this.match(CourantParser.SEMI);
					}
					break;

				case 8:
					_localctx = new TryCatchStmtContext(_localctx);
					this.enterOuterAlt(_localctx, 8);
					{
						this.state = 67;
						this.match(CourantParser.TRY);
						this.state = 68;
						this.stmt();
						this.state = 69;
						this.match(CourantParser.CATCH);
						this.state = 70;
						this.match(CourantParser.T__2);
						this.state = 71;
						this.match(CourantParser.IDENT);
						this.state = 72;
						this.match(CourantParser.T__3);
						this.state = 73;
						this.stmt();
					}
					break;
			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return _localctx;
	}

	public expr(): ExprContext;
	public expr(_p: number): ExprContext;
	// @RuleVersion(0)
	public expr(_p?: number): ExprContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: ExprContext = new ExprContext(this._ctx, _parentState);
		let _prevctx: ExprContext = _localctx;
		let _startState: number = 4;
		this.enterRecursionRule(_localctx, 4, CourantParser.RULE_expr, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 93;
				this._errHandler.sync(this);
				switch (this.interpreter.adaptivePredict(this._input, 4, this._ctx)) {
					case 1:
						{
							_localctx = new VarExprContext(_localctx);
							this._ctx = _localctx;
							_prevctx = _localctx;

							this.state = 78;
							this.match(CourantParser.IDENT);
						}
						break;

					case 2:
						{
							_localctx = new NumLitExprContext(_localctx);
							this._ctx = _localctx;
							_prevctx = _localctx;
							this.state = 79;
							this.match(CourantParser.NUM);
						}
						break;

					case 3:
						{
							_localctx = new BooleanLitExprContext(_localctx);
							this._ctx = _localctx;
							_prevctx = _localctx;
							this.state = 80;
							this.match(CourantParser.BOOLEAN);
						}
						break;

					case 4:
						{
							_localctx = new ParensExprContext(_localctx);
							this._ctx = _localctx;
							_prevctx = _localctx;
							this.state = 81;
							this.match(CourantParser.T__2);
							this.state = 82;
							this.expr(0);
							this.state = 83;
							this.match(CourantParser.T__3);
						}
						break;

					case 5:
						{
							_localctx = new FunctionDeclExprRuleContext(_localctx);
							this._ctx = _localctx;
							_prevctx = _localctx;
							this.state = 85;
							this.functionDeclExpr();
						}
						break;

					case 6:
						{
							_localctx = new RaiseExprContext(_localctx);
							this._ctx = _localctx;
							_prevctx = _localctx;
							this.state = 86;
							this.match(CourantParser.RAISE);
							this.state = 87;
							this.match(CourantParser.T__2);
							this.state = 88;
							this.expr(0);
							this.state = 89;
							this.match(CourantParser.T__3);
						}
						break;

					case 7:
						{
							_localctx = new UnaryExprContext(_localctx);
							this._ctx = _localctx;
							_prevctx = _localctx;
							this.state = 91;
							(_localctx as UnaryExprContext)._op = this._input.LT(1);
							_la = this._input.LA(1);
							if (
								!(
									(_la & ~0x1f) === 0 &&
									((1 << _la) &
										((1 << CourantParser.NOT) |
											(1 << CourantParser.PLUS) |
											(1 << CourantParser.MINUS))) !==
										0
								)
							) {
								(_localctx as UnaryExprContext)._op = this._errHandler.recoverInline(this);
							} else {
								if (this._input.LA(1) === Token.EOF) {
									this.matchedEOF = true;
								}

								this._errHandler.reportMatch(this);
								this.consume();
							}
							this.state = 92;
							this.expr(5);
						}
						break;
				}
				this._ctx._stop = this._input.tryLT(-1);
				this.state = 126;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 8, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						if (this._parseListeners != null) {
							this.triggerExitRuleEvent();
						}
						_prevctx = _localctx;
						{
							this.state = 124;
							this._errHandler.sync(this);
							switch (this.interpreter.adaptivePredict(this._input, 7, this._ctx)) {
								case 1:
									{
										_localctx = new BinExprContext(new ExprContext(_parentctx, _parentState));
										this.pushNewRecursionContext(_localctx, _startState, CourantParser.RULE_expr);
										this.state = 95;
										if (!this.precpred(this._ctx, 4)) {
											throw this.createFailedPredicateException('this.precpred(this._ctx, 4)');
										}
										this.state = 96;
										this.opm();
										this.state = 97;
										this.expr(5);
									}
									break;

								case 2:
									{
										_localctx = new BinExprContext(new ExprContext(_parentctx, _parentState));
										this.pushNewRecursionContext(_localctx, _startState, CourantParser.RULE_expr);
										this.state = 99;
										if (!this.precpred(this._ctx, 3)) {
											throw this.createFailedPredicateException('this.precpred(this._ctx, 3)');
										}
										this.state = 100;
										this.opa();
										this.state = 101;
										this.expr(4);
									}
									break;

								case 3:
									{
										_localctx = new BinExprContext(new ExprContext(_parentctx, _parentState));
										this.pushNewRecursionContext(_localctx, _startState, CourantParser.RULE_expr);
										this.state = 103;
										if (!this.precpred(this._ctx, 2)) {
											throw this.createFailedPredicateException('this.precpred(this._ctx, 2)');
										}
										this.state = 104;
										this.opc();
										this.state = 105;
										this.expr(3);
									}
									break;

								case 4:
									{
										_localctx = new BinExprContext(new ExprContext(_parentctx, _parentState));
										this.pushNewRecursionContext(_localctx, _startState, CourantParser.RULE_expr);
										this.state = 107;
										if (!this.precpred(this._ctx, 1)) {
											throw this.createFailedPredicateException('this.precpred(this._ctx, 1)');
										}
										this.state = 108;
										this.opb();
										this.state = 109;
										this.expr(2);
									}
									break;

								case 5:
									{
										_localctx = new FunctionCallExprContext(
											new ExprContext(_parentctx, _parentState)
										);
										this.pushNewRecursionContext(_localctx, _startState, CourantParser.RULE_expr);
										this.state = 111;
										if (!this.precpred(this._ctx, 6)) {
											throw this.createFailedPredicateException('this.precpred(this._ctx, 6)');
										}
										this.state = 112;
										this.match(CourantParser.T__2);
										this.state = 121;
										this._errHandler.sync(this);
										_la = this._input.LA(1);
										if (
											((_la & ~0x1f) === 0 &&
												((1 << _la) &
													((1 << CourantParser.T__2) |
														(1 << CourantParser.BOOLEAN) |
														(1 << CourantParser.NOT) |
														(1 << CourantParser.RAISE) |
														(1 << CourantParser.PLUS) |
														(1 << CourantParser.MINUS))) !==
													0) ||
											_la === CourantParser.IDENT ||
											_la === CourantParser.NUM
										) {
											{
												this.state = 113;
												this.expr(0);
												this.state = 118;
												this._errHandler.sync(this);
												_la = this._input.LA(1);
												while (_la === CourantParser.COMMA) {
													{
														{
															this.state = 114;
															this.match(CourantParser.COMMA);
															this.state = 115;
															this.expr(0);
														}
													}
													this.state = 120;
													this._errHandler.sync(this);
													_la = this._input.LA(1);
												}
											}
										}

										this.state = 123;
										this.match(CourantParser.T__3);
									}
									break;
							}
						}
					}
					this.state = 128;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 8, this._ctx);
				}
			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public functionDeclExpr(): FunctionDeclExprContext {
		let _localctx: FunctionDeclExprContext = new FunctionDeclExprContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, CourantParser.RULE_functionDeclExpr);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 129;
				this.match(CourantParser.T__2);
				this.state = 131;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CourantParser.IDENT) {
					{
						this.state = 130;
						this.paramList();
					}
				}

				this.state = 133;
				this.match(CourantParser.T__3);
				this.state = 134;
				this.match(CourantParser.ARROW);
				this.state = 135;
				this.functionBody();
			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public functionBody(): FunctionBodyContext {
		let _localctx: FunctionBodyContext = new FunctionBodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, CourantParser.RULE_functionBody);
		let _la: number;
		try {
			this.state = 146;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
				case CourantParser.T__0:
					this.enterOuterAlt(_localctx, 1);
					{
						this.state = 137;
						this.match(CourantParser.T__0);
						this.state = 141;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						while (
							((_la & ~0x1f) === 0 &&
								((1 << _la) &
									((1 << CourantParser.T__0) |
										(1 << CourantParser.T__2) |
										(1 << CourantParser.BOOLEAN) |
										(1 << CourantParser.IF) |
										(1 << CourantParser.WHILE) |
										(1 << CourantParser.NOT) |
										(1 << CourantParser.RETURN) |
										(1 << CourantParser.THROW) |
										(1 << CourantParser.TRY) |
										(1 << CourantParser.RAISE) |
										(1 << CourantParser.PLUS) |
										(1 << CourantParser.MINUS))) !==
									0) ||
							_la === CourantParser.IDENT ||
							_la === CourantParser.NUM
						) {
							{
								{
									this.state = 138;
									this.stmt();
								}
							}
							this.state = 143;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
						}
						this.state = 144;
						this.match(CourantParser.T__1);
					}
					break;
				case CourantParser.T__2:
				case CourantParser.BOOLEAN:
				case CourantParser.NOT:
				case CourantParser.RAISE:
				case CourantParser.PLUS:
				case CourantParser.MINUS:
				case CourantParser.IDENT:
				case CourantParser.NUM:
					this.enterOuterAlt(_localctx, 2);
					{
						this.state = 145;
						this.expr(0);
					}
					break;
				default:
					throw new NoViableAltException(this);
			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public paramList(): ParamListContext {
		let _localctx: ParamListContext = new ParamListContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, CourantParser.RULE_paramList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 148;
				this.match(CourantParser.IDENT);
				this.state = 153;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === CourantParser.COMMA) {
					{
						{
							this.state = 149;
							this.match(CourantParser.COMMA);
							this.state = 150;
							this.match(CourantParser.IDENT);
						}
					}
					this.state = 155;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public opm(): OpmContext {
		let _localctx: OpmContext = new OpmContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, CourantParser.RULE_opm);
		try {
			this.state = 158;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
				case CourantParser.MUL:
					_localctx = new MulContext(_localctx);
					this.enterOuterAlt(_localctx, 1);
					{
						this.state = 156;
						this.match(CourantParser.MUL);
					}
					break;
				case CourantParser.DIV:
					_localctx = new DivContext(_localctx);
					this.enterOuterAlt(_localctx, 2);
					{
						this.state = 157;
						this.match(CourantParser.DIV);
					}
					break;
				default:
					throw new NoViableAltException(this);
			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public opa(): OpaContext {
		let _localctx: OpaContext = new OpaContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, CourantParser.RULE_opa);
		try {
			this.state = 162;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
				case CourantParser.PLUS:
					_localctx = new PlusContext(_localctx);
					this.enterOuterAlt(_localctx, 1);
					{
						this.state = 160;
						this.match(CourantParser.PLUS);
					}
					break;
				case CourantParser.MINUS:
					_localctx = new MinusContext(_localctx);
					this.enterOuterAlt(_localctx, 2);
					{
						this.state = 161;
						this.match(CourantParser.MINUS);
					}
					break;
				default:
					throw new NoViableAltException(this);
			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public opb(): OpbContext {
		let _localctx: OpbContext = new OpbContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, CourantParser.RULE_opb);
		try {
			this.state = 166;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
				case CourantParser.AND:
					_localctx = new AndContext(_localctx);
					this.enterOuterAlt(_localctx, 1);
					{
						this.state = 164;
						this.match(CourantParser.AND);
					}
					break;
				case CourantParser.OR:
					_localctx = new OrContext(_localctx);
					this.enterOuterAlt(_localctx, 2);
					{
						this.state = 165;
						this.match(CourantParser.OR);
					}
					break;
				default:
					throw new NoViableAltException(this);
			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public opc(): OpcContext {
		let _localctx: OpcContext = new OpcContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, CourantParser.RULE_opc);
		try {
			this.state = 174;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
				case CourantParser.LT:
					_localctx = new LtContext(_localctx);
					this.enterOuterAlt(_localctx, 1);
					{
						this.state = 168;
						this.match(CourantParser.LT);
					}
					break;
				case CourantParser.LEQ:
					_localctx = new LeqContext(_localctx);
					this.enterOuterAlt(_localctx, 2);
					{
						this.state = 169;
						this.match(CourantParser.LEQ);
					}
					break;
				case CourantParser.EQ:
					_localctx = new EqContext(_localctx);
					this.enterOuterAlt(_localctx, 3);
					{
						this.state = 170;
						this.match(CourantParser.EQ);
					}
					break;
				case CourantParser.NEQ:
					_localctx = new NeqContext(_localctx);
					this.enterOuterAlt(_localctx, 4);
					{
						this.state = 171;
						this.match(CourantParser.NEQ);
					}
					break;
				case CourantParser.GT:
					_localctx = new GtContext(_localctx);
					this.enterOuterAlt(_localctx, 5);
					{
						this.state = 172;
						this.match(CourantParser.GT);
					}
					break;
				case CourantParser.GEQ:
					_localctx = new GeqContext(_localctx);
					this.enterOuterAlt(_localctx, 6);
					{
						this.state = 173;
						this.match(CourantParser.GEQ);
					}
					break;
				default:
					throw new NoViableAltException(this);
			}
		} catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		} finally {
			this.exitRule();
		}
		return _localctx;
	}

	public sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
			case 2:
				return this.expr_sempred(_localctx as ExprContext, predIndex);
		}
		return true;
	}
	private expr_sempred(_localctx: ExprContext, predIndex: number): boolean {
		switch (predIndex) {
			case 0:
				return this.precpred(this._ctx, 4);

			case 1:
				return this.precpred(this._ctx, 3);

			case 2:
				return this.precpred(this._ctx, 2);

			case 3:
				return this.precpred(this._ctx, 1);

			case 4:
				return this.precpred(this._ctx, 6);
		}
		return true;
	}

	public static readonly _serializedATN: string =
		'\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03)\xB3\x04\x02' +
		'\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07' +
		'\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x03\x02\x07\x02\x18\n\x02' +
		'\f\x02\x0E\x02\x1B\v\x02\x03\x02\x03\x02\x03\x03\x03\x03\x03\x03\x03\x03' +
		'\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03' +
		'\x03\x03\x07\x03-\n\x03\f\x03\x0E\x030\v\x03\x03\x03\x03\x03\x03\x03\x03' +
		'\x03\x03\x03\x03\x03\x03\x03\x03\x03\x05\x03:\n\x03\x03\x03\x03\x03\x03' +
		'\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03' +
		'\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x05\x03N\n\x03\x03' +
		'\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03' +
		'\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x05\x04`\n\x04\x03' +
		'\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03' +
		'\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03' +
		'\x04\x03\x04\x03\x04\x07\x04w\n\x04\f\x04\x0E\x04z\v\x04\x05\x04|\n\x04' +
		'\x03\x04\x07\x04\x7F\n\x04\f\x04\x0E\x04\x82\v\x04\x03\x05\x03\x05\x05' +
		'\x05\x86\n\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x06\x03\x06\x07\x06' +
		'\x8E\n\x06\f\x06\x0E\x06\x91\v\x06\x03\x06\x03\x06\x05\x06\x95\n\x06\x03' +
		'\x07\x03\x07\x03\x07\x07\x07\x9A\n\x07\f\x07\x0E\x07\x9D\v\x07\x03\b\x03' +
		'\b\x05\b\xA1\n\b\x03\t\x03\t\x05\t\xA5\n\t\x03\n\x03\n\x05\n\xA9\n\n\x03' +
		'\v\x03\v\x03\v\x03\v\x03\v\x03\v\x05\v\xB1\n\v\x03\v\x02\x02\x03\x06\f' +
		'\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14' +
		'\x02\x02\x03\x04\x02\x10\x10\x1A\x1B\x02\xCB\x02\x19\x03\x02\x02\x02\x04' +
		'M\x03\x02\x02\x02\x06_\x03\x02\x02\x02\b\x83\x03\x02\x02\x02\n\x94\x03' +
		'\x02\x02\x02\f\x96\x03\x02\x02\x02\x0E\xA0\x03\x02\x02\x02\x10\xA4\x03' +
		'\x02\x02\x02\x12\xA8\x03\x02\x02\x02\x14\xB0\x03\x02\x02\x02\x16\x18\x05' +
		'\x04\x03\x02\x17\x16\x03\x02\x02\x02\x18\x1B\x03\x02\x02\x02\x19\x17\x03' +
		'\x02\x02\x02\x19\x1A\x03\x02\x02\x02\x1A\x1C\x03\x02\x02\x02\x1B\x19\x03' +
		'\x02\x02\x02\x1C\x1D\x07\x02\x02\x03\x1D\x03\x03\x02\x02\x02\x1E\x1F\x07' +
		'&\x02\x02\x1F \x07\x18\x02\x02 !\x05\x06\x04\x02!"\x07\x19\x02\x02"' +
		'N\x03\x02\x02\x02#$\x05\x06\x04\x02$%\x07\x19\x02\x02%N\x03\x02\x02\x02' +
		"&\'\x07\x13\x02\x02\'(\x05\x06\x04\x02()\x07\x19\x02\x02)N\x03\x02\x02" +
		'\x02*.\x07\x03\x02\x02+-\x05\x04\x03\x02,+\x03\x02\x02\x02-0\x03\x02\x02' +
		'\x02.,\x03\x02\x02\x02./\x03\x02\x02\x02/1\x03\x02\x02\x020.\x03\x02\x02' +
		'\x021N\x07\x04\x02\x0223\x07\t\x02\x0234\x07\x05\x02\x0245\x05\x06\x04' +
		'\x0256\x07\x06\x02\x0269\x05\x04\x03\x0278\x07\v\x02\x028:\x05\x04\x03' +
		'\x0297\x03\x02\x02\x029:\x03\x02\x02\x02:N\x03\x02\x02\x02;<\x07\f\x02' +
		'\x02<=\x07\x05\x02\x02=>\x05\x06\x04\x02>?\x07\x06\x02\x02?@\x05\x04\x03' +
		'\x02@N\x03\x02\x02\x02AB\x07\x14\x02\x02BC\x05\x06\x04\x02CD\x07\x19\x02' +
		'\x02DN\x03\x02\x02\x02EF\x07\x15\x02\x02FG\x05\x04\x03\x02GH\x07\x16\x02' +
		'\x02HI\x07\x05\x02\x02IJ\x07&\x02\x02JK\x07\x06\x02\x02KL\x05\x04\x03' +
		'\x02LN\x03\x02\x02\x02M\x1E\x03\x02\x02\x02M#\x03\x02\x02\x02M&\x03\x02' +
		'\x02\x02M*\x03\x02\x02\x02M2\x03\x02\x02\x02M;\x03\x02\x02\x02MA\x03\x02' +
		'\x02\x02ME\x03\x02\x02\x02N\x05\x03\x02\x02\x02OP\b\x04\x01\x02P`\x07' +
		"&\x02\x02Q`\x07\'\x02\x02R`\x07\x07\x02\x02ST\x07\x05\x02\x02TU\x05\x06" +
		'\x04\x02UV\x07\x06\x02\x02V`\x03\x02\x02\x02W`\x05\b\x05\x02XY\x07\x17' +
		'\x02\x02YZ\x07\x05\x02\x02Z[\x05\x06\x04\x02[\\\x07\x06\x02\x02\\`\x03' +
		'\x02\x02\x02]^\t\x02\x02\x02^`\x05\x06\x04\x07_O\x03\x02\x02\x02_Q\x03' +
		'\x02\x02\x02_R\x03\x02\x02\x02_S\x03\x02\x02\x02_W\x03\x02\x02\x02_X\x03' +
		'\x02\x02\x02_]\x03\x02\x02\x02`\x80\x03\x02\x02\x02ab\f\x06\x02\x02bc' +
		'\x05\x0E\b\x02cd\x05\x06\x04\x07d\x7F\x03\x02\x02\x02ef\f\x05\x02\x02' +
		'fg\x05\x10\t\x02gh\x05\x06\x04\x06h\x7F\x03\x02\x02\x02ij\f\x04\x02\x02' +
		'jk\x05\x14\v\x02kl\x05\x06\x04\x05l\x7F\x03\x02\x02\x02mn\f\x03\x02\x02' +
		'no\x05\x12\n\x02op\x05\x06\x04\x04p\x7F\x03\x02\x02\x02qr\f\b\x02\x02' +
		'r{\x07\x05\x02\x02sx\x05\x06\x04\x02tu\x07$\x02\x02uw\x05\x06\x04\x02' +
		'vt\x03\x02\x02\x02wz\x03\x02\x02\x02xv\x03\x02\x02\x02xy\x03\x02\x02\x02' +
		'y|\x03\x02\x02\x02zx\x03\x02\x02\x02{s\x03\x02\x02\x02{|\x03\x02\x02\x02' +
		'|}\x03\x02\x02\x02}\x7F\x07\x06\x02\x02~a\x03\x02\x02\x02~e\x03\x02\x02' +
		'\x02~i\x03\x02\x02\x02~m\x03\x02\x02\x02~q\x03\x02\x02\x02\x7F\x82\x03' +
		'\x02\x02\x02\x80~\x03\x02\x02\x02\x80\x81\x03\x02\x02\x02\x81\x07\x03' +
		'\x02\x02\x02\x82\x80\x03\x02\x02\x02\x83\x85\x07\x05\x02\x02\x84\x86\x05' +
		'\f\x07\x02\x85\x84\x03\x02\x02\x02\x85\x86\x03\x02\x02\x02\x86\x87\x03' +
		'\x02\x02\x02\x87\x88\x07\x06\x02\x02\x88\x89\x07%\x02\x02\x89\x8A\x05' +
		'\n\x06\x02\x8A\t\x03\x02\x02\x02\x8B\x8F\x07\x03\x02\x02\x8C\x8E\x05\x04' +
		'\x03\x02\x8D\x8C\x03\x02\x02\x02\x8E\x91\x03\x02\x02\x02\x8F\x8D\x03\x02' +
		'\x02\x02\x8F\x90\x03\x02\x02\x02\x90\x92\x03\x02\x02\x02\x91\x8F\x03\x02' +
		'\x02\x02\x92\x95\x07\x04\x02\x02\x93\x95\x05\x06\x04\x02\x94\x8B\x03\x02' +
		'\x02\x02\x94\x93\x03\x02\x02\x02\x95\v\x03\x02\x02\x02\x96\x9B\x07&\x02' +
		'\x02\x97\x98\x07$\x02\x02\x98\x9A\x07&\x02\x02\x99\x97\x03\x02\x02\x02' +
		'\x9A\x9D\x03\x02\x02\x02\x9B\x99\x03\x02\x02\x02\x9B\x9C\x03\x02\x02\x02' +
		'\x9C\r\x03\x02\x02\x02\x9D\x9B\x03\x02\x02\x02\x9E\xA1\x07\x1C\x02\x02' +
		'\x9F\xA1\x07\x1D\x02\x02\xA0\x9E\x03\x02\x02\x02\xA0\x9F\x03\x02\x02\x02' +
		'\xA1\x0F\x03\x02\x02\x02\xA2\xA5\x07\x1A\x02\x02\xA3\xA5\x07\x1B\x02\x02' +
		'\xA4\xA2\x03\x02\x02\x02\xA4\xA3\x03\x02\x02\x02\xA5\x11\x03\x02\x02\x02' +
		'\xA6\xA9\x07\x11\x02\x02\xA7\xA9\x07\x12\x02\x02\xA8\xA6\x03\x02\x02\x02' +
		'\xA8\xA7\x03\x02\x02\x02\xA9\x13\x03\x02\x02\x02\xAA\xB1\x07\x1E\x02\x02' +
		'\xAB\xB1\x07\x1F\x02\x02\xAC\xB1\x07 \x02\x02\xAD\xB1\x07!\x02\x02\xAE' +
		'\xB1\x07"\x02\x02\xAF\xB1\x07#\x02\x02\xB0\xAA\x03\x02\x02\x02\xB0\xAB' +
		'\x03\x02\x02\x02\xB0\xAC\x03\x02\x02\x02\xB0\xAD\x03\x02\x02\x02\xB0\xAE' +
		'\x03\x02\x02\x02\xB0\xAF\x03\x02\x02\x02\xB1\x15\x03\x02\x02\x02\x13\x19' +
		'.9M_x{~\x80\x85\x8F\x94\x9B\xA0\xA4\xA8\xB0';
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!CourantParser.__ATN) {
			CourantParser.__ATN = new ATNDeserializer().deserialize(
				Utils.toCharArray(CourantParser._serializedATN)
			);
		}

		return CourantParser.__ATN;
	}
}

export class ProgContext extends ParserRuleContext {
	public EOF(): TerminalNode {
		return this.getToken(CourantParser.EOF, 0);
	}
	public stmt(): StmtContext[];
	public stmt(i: number): StmtContext;
	public stmt(i?: number): StmtContext | StmtContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StmtContext);
		} else {
			return this.getRuleContext(i, StmtContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number {
		return CourantParser.RULE_prog;
	}
	// @Override
	public accept<Result>(visitor: CourantVisitor<Result>): Result {
		if (visitor.visitProg) {
			return visitor.visitProg(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class StmtContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number {
		return CourantParser.RULE_stmt;
	}
	public copyFrom(ctx: StmtContext): void {
		super.copyFrom(ctx);
	}
}
export class AssignmentContext extends StmtContext {
	public IDENT(): TerminalNode {
		return this.getToken(CourantParser.IDENT, 0);
	}
	public ASSIGN(): TerminalNode {
		return this.getToken(CourantParser.ASSIGN, 0);
	}
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	public SEMI(): TerminalNode {
		return this.getToken(CourantParser.SEMI, 0);
	}
	constructor(ctx: StmtContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public accept<Result>(visitor: CourantVisitor<Result>): Result {
		if (visitor.visitAssignment) {
			return visitor.visitAssignment(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ExprStmtContext extends StmtContext {
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	public SEMI(): TerminalNode {
		return this.getToken(CourantParser.SEMI, 0);
	}
	constructor(ctx: StmtContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public accept<Result>(visitor: CourantVisitor<Result>): Result {
		if (visitor.visitExprStmt) {
			return visitor.visitExprStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ReturnStmtContext extends StmtContext {
	public RETURN(): TerminalNode {
		return this.getToken(CourantParser.RETURN, 0);
	}
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	public SEMI(): TerminalNode {
		return this.getToken(CourantParser.SEMI, 0);
	}
	constructor(ctx: StmtContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public accept<Result>(visitor: CourantVisitor<Result>): Result {
		if (visitor.visitReturnStmt) {
			return visitor.visitReturnStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class BlockStmtContext extends StmtContext {
	public stmt(): StmtContext[];
	public stmt(i: number): StmtContext;
	public stmt(i?: number): StmtContext | StmtContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StmtContext);
		} else {
			return this.getRuleContext(i, StmtContext);
		}
	}
	constructor(ctx: StmtContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public accept<Result>(visitor: CourantVisitor<Result>): Result {
		if (visitor.visitBlockStmt) {
			return visitor.visitBlockStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class IfStmtContext extends StmtContext {
	public IF(): TerminalNode {
		return this.getToken(CourantParser.IF, 0);
	}
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	public stmt(): StmtContext[];
	public stmt(i: number): StmtContext;
	public stmt(i?: number): StmtContext | StmtContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StmtContext);
		} else {
			return this.getRuleContext(i, StmtContext);
		}
	}
	public ELSE(): TerminalNode | undefined {
		return this.tryGetToken(CourantParser.ELSE, 0);
	}
	constructor(ctx: StmtContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public accept<Result>(visitor: CourantVisitor<Result>): Result {
		if (visitor.visitIfStmt) {
			return visitor.visitIfStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class WhileStmtContext extends StmtContext {
	public WHILE(): TerminalNode {
		return this.getToken(CourantParser.WHILE, 0);
	}
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	public stmt(): StmtContext {
		return this.getRuleContext(0, StmtContext);
	}
	constructor(ctx: StmtContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public accept<Result>(visitor: CourantVisitor<Result>): Result {
		if (visitor.visitWhileStmt) {
			return visitor.visitWhileStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ThrowStmtContext extends StmtContext {
	public THROW(): TerminalNode {
		return this.getToken(CourantParser.THROW, 0);
	}
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	public SEMI(): TerminalNode {
		return this.getToken(CourantParser.SEMI, 0);
	}
	constructor(ctx: StmtContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public accept<Result>(visitor: CourantVisitor<Result>): Result {
		if (visitor.visitThrowStmt) {
			return visitor.visitThrowStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class TryCatchStmtContext extends StmtContext {
	public TRY(): TerminalNode {
		return this.getToken(CourantParser.TRY, 0);
	}
	public stmt(): StmtContext[];
	public stmt(i: number): StmtContext;
	public stmt(i?: number): StmtContext | StmtContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StmtContext);
		} else {
			return this.getRuleContext(i, StmtContext);
		}
	}
	public CATCH(): TerminalNode {
		return this.getToken(CourantParser.CATCH, 0);
	}
	public IDENT(): TerminalNode {
		return this.getToken(CourantParser.IDENT, 0);
	}
	constructor(ctx: StmtContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public accept<Result>(visitor: CourantVisitor<Result>): Result {
		if (visitor.visitTryCatchStmt) {
			return visitor.visitTryCatchStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class ExprContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number {
		return CourantParser.RULE_expr;
	}
	public copyFrom(ctx: ExprContext): void {
		super.copyFrom(ctx);
	}
}
export class VarExprContext extends ExprContext {
	public IDENT(): TerminalNode {
		return this.getToken(CourantParser.IDENT, 0);
	}
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public accept<Result>(visitor: CourantVisitor<Result>): Result {
		if (visitor.visitVarExpr) {
			return visitor.visitVarExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class NumLitExprContext extends ExprContext {
	public NUM(): TerminalNode {
		return this.getToken(CourantParser.NUM, 0);
	}
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public accept<Result>(visitor: CourantVisitor<Result>): Result {
		if (visitor.visitNumLitExpr) {
			return visitor.visitNumLitExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class BooleanLitExprContext extends ExprContext {
	public BOOLEAN(): TerminalNode {
		return this.getToken(CourantParser.BOOLEAN, 0);
	}
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public accept<Result>(visitor: CourantVisitor<Result>): Result {
		if (visitor.visitBooleanLitExpr) {
			return visitor.visitBooleanLitExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ParensExprContext extends ExprContext {
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public accept<Result>(visitor: CourantVisitor<Result>): Result {
		if (visitor.visitParensExpr) {
			return visitor.visitParensExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class FunctionDeclExprRuleContext extends ExprContext {
	public functionDeclExpr(): FunctionDeclExprContext {
		return this.getRuleContext(0, FunctionDeclExprContext);
	}
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public accept<Result>(visitor: CourantVisitor<Result>): Result {
		if (visitor.visitFunctionDeclExprRule) {
			return visitor.visitFunctionDeclExprRule(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class RaiseExprContext extends ExprContext {
	public RAISE(): TerminalNode {
		return this.getToken(CourantParser.RAISE, 0);
	}
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public accept<Result>(visitor: CourantVisitor<Result>): Result {
		if (visitor.visitRaiseExpr) {
			return visitor.visitRaiseExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class FunctionCallExprContext extends ExprContext {
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CourantParser.COMMA);
		} else {
			return this.getToken(CourantParser.COMMA, i);
		}
	}
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public accept<Result>(visitor: CourantVisitor<Result>): Result {
		if (visitor.visitFunctionCallExpr) {
			return visitor.visitFunctionCallExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class UnaryExprContext extends ExprContext {
	public _op!: Token;
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	public PLUS(): TerminalNode | undefined {
		return this.tryGetToken(CourantParser.PLUS, 0);
	}
	public MINUS(): TerminalNode | undefined {
		return this.tryGetToken(CourantParser.MINUS, 0);
	}
	public NOT(): TerminalNode | undefined {
		return this.tryGetToken(CourantParser.NOT, 0);
	}
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public accept<Result>(visitor: CourantVisitor<Result>): Result {
		if (visitor.visitUnaryExpr) {
			return visitor.visitUnaryExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class BinExprContext extends ExprContext {
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	public opm(): OpmContext | undefined {
		return this.tryGetRuleContext(0, OpmContext);
	}
	public opa(): OpaContext | undefined {
		return this.tryGetRuleContext(0, OpaContext);
	}
	public opc(): OpcContext | undefined {
		return this.tryGetRuleContext(0, OpcContext);
	}
	public opb(): OpbContext | undefined {
		return this.tryGetRuleContext(0, OpbContext);
	}
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public accept<Result>(visitor: CourantVisitor<Result>): Result {
		if (visitor.visitBinExpr) {
			return visitor.visitBinExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class FunctionDeclExprContext extends ParserRuleContext {
	public ARROW(): TerminalNode {
		return this.getToken(CourantParser.ARROW, 0);
	}
	public functionBody(): FunctionBodyContext {
		return this.getRuleContext(0, FunctionBodyContext);
	}
	public paramList(): ParamListContext | undefined {
		return this.tryGetRuleContext(0, ParamListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number {
		return CourantParser.RULE_functionDeclExpr;
	}
	// @Override
	public accept<Result>(visitor: CourantVisitor<Result>): Result {
		if (visitor.visitFunctionDeclExpr) {
			return visitor.visitFunctionDeclExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class FunctionBodyContext extends ParserRuleContext {
	public stmt(): StmtContext[];
	public stmt(i: number): StmtContext;
	public stmt(i?: number): StmtContext | StmtContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StmtContext);
		} else {
			return this.getRuleContext(i, StmtContext);
		}
	}
	public expr(): ExprContext | undefined {
		return this.tryGetRuleContext(0, ExprContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number {
		return CourantParser.RULE_functionBody;
	}
	// @Override
	public accept<Result>(visitor: CourantVisitor<Result>): Result {
		if (visitor.visitFunctionBody) {
			return visitor.visitFunctionBody(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class ParamListContext extends ParserRuleContext {
	public IDENT(): TerminalNode[];
	public IDENT(i: number): TerminalNode;
	public IDENT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CourantParser.IDENT);
		} else {
			return this.getToken(CourantParser.IDENT, i);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CourantParser.COMMA);
		} else {
			return this.getToken(CourantParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number {
		return CourantParser.RULE_paramList;
	}
	// @Override
	public accept<Result>(visitor: CourantVisitor<Result>): Result {
		if (visitor.visitParamList) {
			return visitor.visitParamList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class OpmContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number {
		return CourantParser.RULE_opm;
	}
	public copyFrom(ctx: OpmContext): void {
		super.copyFrom(ctx);
	}
}
export class MulContext extends OpmContext {
	public MUL(): TerminalNode {
		return this.getToken(CourantParser.MUL, 0);
	}
	constructor(ctx: OpmContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public accept<Result>(visitor: CourantVisitor<Result>): Result {
		if (visitor.visitMul) {
			return visitor.visitMul(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class DivContext extends OpmContext {
	public DIV(): TerminalNode {
		return this.getToken(CourantParser.DIV, 0);
	}
	constructor(ctx: OpmContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public accept<Result>(visitor: CourantVisitor<Result>): Result {
		if (visitor.visitDiv) {
			return visitor.visitDiv(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class OpaContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number {
		return CourantParser.RULE_opa;
	}
	public copyFrom(ctx: OpaContext): void {
		super.copyFrom(ctx);
	}
}
export class PlusContext extends OpaContext {
	public PLUS(): TerminalNode {
		return this.getToken(CourantParser.PLUS, 0);
	}
	constructor(ctx: OpaContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public accept<Result>(visitor: CourantVisitor<Result>): Result {
		if (visitor.visitPlus) {
			return visitor.visitPlus(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class MinusContext extends OpaContext {
	public MINUS(): TerminalNode {
		return this.getToken(CourantParser.MINUS, 0);
	}
	constructor(ctx: OpaContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public accept<Result>(visitor: CourantVisitor<Result>): Result {
		if (visitor.visitMinus) {
			return visitor.visitMinus(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class OpbContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number {
		return CourantParser.RULE_opb;
	}
	public copyFrom(ctx: OpbContext): void {
		super.copyFrom(ctx);
	}
}
export class AndContext extends OpbContext {
	public AND(): TerminalNode {
		return this.getToken(CourantParser.AND, 0);
	}
	constructor(ctx: OpbContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public accept<Result>(visitor: CourantVisitor<Result>): Result {
		if (visitor.visitAnd) {
			return visitor.visitAnd(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class OrContext extends OpbContext {
	public OR(): TerminalNode {
		return this.getToken(CourantParser.OR, 0);
	}
	constructor(ctx: OpbContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public accept<Result>(visitor: CourantVisitor<Result>): Result {
		if (visitor.visitOr) {
			return visitor.visitOr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}

export class OpcContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number {
		return CourantParser.RULE_opc;
	}
	public copyFrom(ctx: OpcContext): void {
		super.copyFrom(ctx);
	}
}
export class LtContext extends OpcContext {
	public LT(): TerminalNode {
		return this.getToken(CourantParser.LT, 0);
	}
	constructor(ctx: OpcContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public accept<Result>(visitor: CourantVisitor<Result>): Result {
		if (visitor.visitLt) {
			return visitor.visitLt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class LeqContext extends OpcContext {
	public LEQ(): TerminalNode {
		return this.getToken(CourantParser.LEQ, 0);
	}
	constructor(ctx: OpcContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public accept<Result>(visitor: CourantVisitor<Result>): Result {
		if (visitor.visitLeq) {
			return visitor.visitLeq(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class EqContext extends OpcContext {
	public EQ(): TerminalNode {
		return this.getToken(CourantParser.EQ, 0);
	}
	constructor(ctx: OpcContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public accept<Result>(visitor: CourantVisitor<Result>): Result {
		if (visitor.visitEq) {
			return visitor.visitEq(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class NeqContext extends OpcContext {
	public NEQ(): TerminalNode {
		return this.getToken(CourantParser.NEQ, 0);
	}
	constructor(ctx: OpcContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public accept<Result>(visitor: CourantVisitor<Result>): Result {
		if (visitor.visitNeq) {
			return visitor.visitNeq(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class GtContext extends OpcContext {
	public GT(): TerminalNode {
		return this.getToken(CourantParser.GT, 0);
	}
	constructor(ctx: OpcContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public accept<Result>(visitor: CourantVisitor<Result>): Result {
		if (visitor.visitGt) {
			return visitor.visitGt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class GeqContext extends OpcContext {
	public GEQ(): TerminalNode {
		return this.getToken(CourantParser.GEQ, 0);
	}
	constructor(ctx: OpcContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public accept<Result>(visitor: CourantVisitor<Result>): Result {
		if (visitor.visitGeq) {
			return visitor.visitGeq(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
