<script lang="ts">
	import Worker from '$lib/six/worker?worker';
	import Challenge from '$lib/components/Challenge.svelte';
	import * as Accordion from '$lib/components/ui/accordion/index.js';
	import TryCatchExceptionAltered from '$lib/components/rules/TryCatchExceptionAltered.svelte';
	import TryCatchNoException from '$lib/components/rules/TryCatchNoException.svelte';
	import ThrowAltered from '$lib/components/rules/ThrowAltered.svelte';
	import FunctionCall from '$lib/components/rules/FunctionCall.svelte';
	import Assign from '$lib/components/rules/Assign.svelte';
	import BinOp from '$lib/components/rules/BinOp.svelte';
	import Ident from '$lib/components/rules/Ident.svelte';
	import IfFalse from '$lib/components/rules/IfFalse.svelte';
	import IfTrue from '$lib/components/rules/IfTrue.svelte';
	import Literal from '$lib/components/rules/Literal.svelte';
	import Return from '$lib/components/rules/Return.svelte';
	import UnaryOp from '$lib/components/rules/UnaryOp.svelte';
	import WhileFalse from '$lib/components/rules/WhileFalse.svelte';
	import WhileTrue from '$lib/components/rules/WhileTrue.svelte';
	import Raise from '$lib/components/rules/Raise.svelte';
</script>

<svelte:head>
	<title>DFC Challenge 6</title>
</svelte:head>

<Challenge currentChallenge="six" nextChallenge="sandbox" WorkerClass={Worker}>
	<h1 class="py-3 text-xl font-bold">Challenge 6</h1>

	<h3 class="py-5 font-bold">Goal</h3>

	<p>
		For this challenge, the goal is still to copy the value of
		<code class="bg-secondary rounded-sm px-2">h</code> into
		<code class="bg-secondary rounded-sm px-2">l</code>.
	</p>
	<p>
		The now handles functions properly. We introduce a new constructs : exceptions and try/catch
		blocks.
	</p>

	<h3 class="py-5 font-bold">Monitor rules</h3>

	<p>
		We introduce the return label, when you call a funciton, the return label in initialized to the
		pc. When you return, you must be in a context that is lower or equal that the return context.
	</p>
	<p>
		When you use the <code class="bg-secondary rounded-sm px-2">throw</code> keyword in a
		<code class="bg-secondary rounded-sm px-2">try/catch</code> block, the value thrown keeps its label
		in the catch block.
	</p>

	<div class="mx-5">
		<Accordion.Root>
			<Accordion.Item value="item-1">
				<Accordion.Trigger>See all rules</Accordion.Trigger>
				<Accordion.Content>
					<div class="flex flex-col gap-5 overflow-x-auto overflow-y-hidden py-5">
						<span class="text-alert">
							<TryCatchExceptionAltered />
							<TryCatchNoException />
							<ThrowAltered />
						</span>
						<FunctionCall />
						<span class="text-alert">
							<Return />
						</span>
						<Assign />
						<IfTrue />
						<IfFalse />
						<WhileTrue />
						<WhileFalse />
						<BinOp />
						<UnaryOp />
						<Literal />
						<Ident />
						<Raise />
					</div>
				</Accordion.Content>
			</Accordion.Item>
		</Accordion.Root>
	</div>

	<h3 class="py-5 font-bold">Language grammar</h3>

	<p>
		We add the <code class="bg-secondary rounded-sm px-2">throw</code> keyword to throw a value,
		this value can be caught with a <code class="bg-secondary rounded-sm px-2">try</code>/<code
			class="bg-secondary rounded-sm px-2">catch</code
		> block.
	</p>

	<pre class="bg-secondary my-5 overflow-x-auto rounded-sm p-3 text-sm">{`<prog> ::= <stmts>
<stmts> ::= <stmt> <stmts> | {empty}
<stmt> ::= <ident> = <expr> ;               (assignment)
		| <expr> ;                          (evaluate expression)
		| { <stmts> }                       (scope)
		| if ( <expr> ) <stmt>              (if statement)
		| if ( <expr> ) <stmt> else <stmt>  (if / else if / else)
		| while ( <expr> ) stmt             (while loop)
		| return <expr>;                    (return value)
		
		| throw <expr>;                     (throw exception)
		| try <stmt> catch (<ident>) <stmt> (try/catch block)

<expr> ::= <num> | <boolean>               (literals)
		| <ident>                          (variable)
		| ( <expr> )                       (parentheses)
		| ( <ident>* ) => <function_body>  (arrow function)
		| raise (<expr>)                   (raise <expr> lo label high)
		| <expr>(<expr>*)                  (function call)
		| <expr> <binop> <expr>            (binary operation)
		| <unop> <expr>                    (unary operation)

<function_body> ::= <expr> | { <stmts> }

<binop> ::= + | - | * | / | and | or
<unop> ::= not | - | +`}</pre>
	<p>
		<code class="bg-secondary rounded-sm px-2">{'<params>'}</code> is a list of comma separated variable
		names.
	</p>
	<p>Identifiers (variables names) are composed of uppercase and lowercase letters.</p>
	<p>Numbers are integers or floating point numbers.</p>
	<p>
		Booleans are <code class="bg-secondary rounded-sm px-2">true</code> or
		<code class="bg-secondary rounded-sm px-2">false</code>.
	</p>
	<p>Operator priority is the same as C.</p>
	<p>Note and 'and' and 'or' operators are not lazy, they will always evaluate both operands.</p>
	<p>Variables are tied to the scope they are first defined in.</p>
</Challenge>
