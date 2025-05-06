// Generated from src/lib/one/Courant.g4 by ANTLR 4.9.0-SNAPSHOT

import type { ParseTreeVisitor } from 'antlr4ts/tree/ParseTreeVisitor';

import { AndContext } from './CourantParser';
import { OrContext } from './CourantParser';
import { PlusContext } from './CourantParser';
import { MinusContext } from './CourantParser';
import { LtContext } from './CourantParser';
import { LeqContext } from './CourantParser';
import { EqContext } from './CourantParser';
import { NeqContext } from './CourantParser';
import { GtContext } from './CourantParser';
import { GeqContext } from './CourantParser';
import { VarExprContext } from './CourantParser';
import { NumLitExprContext } from './CourantParser';
import { BooleanLitExprContext } from './CourantParser';
import { ParensExprContext } from './CourantParser';
import { FunctionDeclExprRuleContext } from './CourantParser';
import { RaiseExprContext } from './CourantParser';
import { FunctionCallExprContext } from './CourantParser';
import { UnaryExprContext } from './CourantParser';
import { BinExprContext } from './CourantParser';
import { MulContext } from './CourantParser';
import { DivContext } from './CourantParser';
import { AssignmentContext } from './CourantParser';
import { ExprStmtContext } from './CourantParser';
import { ReturnStmtContext } from './CourantParser';
import { BlockStmtContext } from './CourantParser';
import { IfStmtContext } from './CourantParser';
import { WhileStmtContext } from './CourantParser';
import { ThrowStmtContext } from './CourantParser';
import { TryCatchStmtContext } from './CourantParser';
import { ProgContext } from './CourantParser';
import { StmtContext } from './CourantParser';
import { ExprContext } from './CourantParser';
import { FunctionDeclExprContext } from './CourantParser';
import { FunctionBodyContext } from './CourantParser';
import { ParamListContext } from './CourantParser';
import { OpmContext } from './CourantParser';
import { OpaContext } from './CourantParser';
import { OpbContext } from './CourantParser';
import { OpcContext } from './CourantParser';

/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `CourantParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface CourantVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by the `and`
	 * labeled alternative in `CourantParser.opb`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAnd?: (ctx: AndContext) => Result;

	/**
	 * Visit a parse tree produced by the `or`
	 * labeled alternative in `CourantParser.opb`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOr?: (ctx: OrContext) => Result;

	/**
	 * Visit a parse tree produced by the `plus`
	 * labeled alternative in `CourantParser.opa`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPlus?: (ctx: PlusContext) => Result;

	/**
	 * Visit a parse tree produced by the `minus`
	 * labeled alternative in `CourantParser.opa`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMinus?: (ctx: MinusContext) => Result;

	/**
	 * Visit a parse tree produced by the `lt`
	 * labeled alternative in `CourantParser.opc`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLt?: (ctx: LtContext) => Result;

	/**
	 * Visit a parse tree produced by the `leq`
	 * labeled alternative in `CourantParser.opc`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLeq?: (ctx: LeqContext) => Result;

	/**
	 * Visit a parse tree produced by the `eq`
	 * labeled alternative in `CourantParser.opc`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEq?: (ctx: EqContext) => Result;

	/**
	 * Visit a parse tree produced by the `neq`
	 * labeled alternative in `CourantParser.opc`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNeq?: (ctx: NeqContext) => Result;

	/**
	 * Visit a parse tree produced by the `gt`
	 * labeled alternative in `CourantParser.opc`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGt?: (ctx: GtContext) => Result;

	/**
	 * Visit a parse tree produced by the `geq`
	 * labeled alternative in `CourantParser.opc`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGeq?: (ctx: GeqContext) => Result;

	/**
	 * Visit a parse tree produced by the `varExpr`
	 * labeled alternative in `CourantParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVarExpr?: (ctx: VarExprContext) => Result;

	/**
	 * Visit a parse tree produced by the `numLitExpr`
	 * labeled alternative in `CourantParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNumLitExpr?: (ctx: NumLitExprContext) => Result;

	/**
	 * Visit a parse tree produced by the `booleanLitExpr`
	 * labeled alternative in `CourantParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBooleanLitExpr?: (ctx: BooleanLitExprContext) => Result;

	/**
	 * Visit a parse tree produced by the `parensExpr`
	 * labeled alternative in `CourantParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParensExpr?: (ctx: ParensExprContext) => Result;

	/**
	 * Visit a parse tree produced by the `functionDeclExprRule`
	 * labeled alternative in `CourantParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionDeclExprRule?: (ctx: FunctionDeclExprRuleContext) => Result;

	/**
	 * Visit a parse tree produced by the `raiseExpr`
	 * labeled alternative in `CourantParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRaiseExpr?: (ctx: RaiseExprContext) => Result;

	/**
	 * Visit a parse tree produced by the `functionCallExpr`
	 * labeled alternative in `CourantParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionCallExpr?: (ctx: FunctionCallExprContext) => Result;

	/**
	 * Visit a parse tree produced by the `unaryExpr`
	 * labeled alternative in `CourantParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnaryExpr?: (ctx: UnaryExprContext) => Result;

	/**
	 * Visit a parse tree produced by the `binExpr`
	 * labeled alternative in `CourantParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBinExpr?: (ctx: BinExprContext) => Result;

	/**
	 * Visit a parse tree produced by the `mul`
	 * labeled alternative in `CourantParser.opm`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMul?: (ctx: MulContext) => Result;

	/**
	 * Visit a parse tree produced by the `div`
	 * labeled alternative in `CourantParser.opm`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDiv?: (ctx: DivContext) => Result;

	/**
	 * Visit a parse tree produced by the `assignment`
	 * labeled alternative in `CourantParser.stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAssignment?: (ctx: AssignmentContext) => Result;

	/**
	 * Visit a parse tree produced by the `exprStmt`
	 * labeled alternative in `CourantParser.stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExprStmt?: (ctx: ExprStmtContext) => Result;

	/**
	 * Visit a parse tree produced by the `returnStmt`
	 * labeled alternative in `CourantParser.stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitReturnStmt?: (ctx: ReturnStmtContext) => Result;

	/**
	 * Visit a parse tree produced by the `blockStmt`
	 * labeled alternative in `CourantParser.stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBlockStmt?: (ctx: BlockStmtContext) => Result;

	/**
	 * Visit a parse tree produced by the `ifStmt`
	 * labeled alternative in `CourantParser.stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIfStmt?: (ctx: IfStmtContext) => Result;

	/**
	 * Visit a parse tree produced by the `whileStmt`
	 * labeled alternative in `CourantParser.stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWhileStmt?: (ctx: WhileStmtContext) => Result;

	/**
	 * Visit a parse tree produced by the `throwStmt`
	 * labeled alternative in `CourantParser.stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitThrowStmt?: (ctx: ThrowStmtContext) => Result;

	/**
	 * Visit a parse tree produced by the `tryCatchStmt`
	 * labeled alternative in `CourantParser.stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTryCatchStmt?: (ctx: TryCatchStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `CourantParser.prog`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProg?: (ctx: ProgContext) => Result;

	/**
	 * Visit a parse tree produced by `CourantParser.stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStmt?: (ctx: StmtContext) => Result;

	/**
	 * Visit a parse tree produced by `CourantParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpr?: (ctx: ExprContext) => Result;

	/**
	 * Visit a parse tree produced by `CourantParser.functionDeclExpr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionDeclExpr?: (ctx: FunctionDeclExprContext) => Result;

	/**
	 * Visit a parse tree produced by `CourantParser.functionBody`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionBody?: (ctx: FunctionBodyContext) => Result;

	/**
	 * Visit a parse tree produced by `CourantParser.paramList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParamList?: (ctx: ParamListContext) => Result;

	/**
	 * Visit a parse tree produced by `CourantParser.opm`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOpm?: (ctx: OpmContext) => Result;

	/**
	 * Visit a parse tree produced by `CourantParser.opa`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOpa?: (ctx: OpaContext) => Result;

	/**
	 * Visit a parse tree produced by `CourantParser.opb`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOpb?: (ctx: OpbContext) => Result;

	/**
	 * Visit a parse tree produced by `CourantParser.opc`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOpc?: (ctx: OpcContext) => Result;
}
