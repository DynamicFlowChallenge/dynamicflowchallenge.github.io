<script lang="ts">
	import Worker from '$lib/four/worker?worker';
	import Challenge from '$lib/components/Challenge.svelte';
	import * as Accordion from '$lib/components/ui/accordion/index.js';
	import BinOp from '$lib/components/rules/BinOp.svelte';
	import Ident from '$lib/components/rules/Ident.svelte';
	import IfFalse from '$lib/components/rules/IfFalse.svelte';
	import IfTrue from '$lib/components/rules/IfTrue.svelte';
	import Literal from '$lib/components/rules/Literal.svelte';
	import UnaryOp from '$lib/components/rules/UnaryOp.svelte';
	import WhileFalse from '$lib/components/rules/WhileFalse.svelte';
	import WhileTrue from '$lib/components/rules/WhileTrue.svelte';
	import Assign from '$lib/components/rules/Assign.svelte';
	import FunctionCallAltered from '$lib/components/rules/FunctionCallAltered.svelte';
	import Raise from '$lib/components/rules/Raise.svelte';
</script>

<svelte:head>
	<title>DFC Challenge 4</title>
</svelte:head>

<Challenge currentChallenge="four" nextChallenge="five" WorkerClass={Worker}>
	<h1 class="py-3 text-xl font-bold">Challenge 4</h1>

	<h3 class="py-5 font-bold">Goal</h3>

	<p>
		For this challenge, the goal is still to copy the value of
		<code class="bg-secondary rounded-sm px-2">h</code> into
		<code class="bg-secondary rounded-sm px-2">l</code>.
	</p>
	<p>In this challenge, the monitor is stronger, but you are now allowed to create functions.</p>

	<h3 class="py-5 font-bold">Monitor rules</h3>

	<p>
		The monitor now enforces the <span class="font-bold">No sensitive upgrade</span> policy, meaning
		that a variable cannot be assigned to if its label is lower than the top of the Program Context stack.
	</p>

	<p>
		<code class="bg-secondary rounded-sm px-2">raise</code> takes a value end returns the same value
		with lable high.
	</p>

	<div class="mx-5">
		<Accordion.Root>
			<Accordion.Item value="item-1">
				<Accordion.Trigger>See all rules</Accordion.Trigger>
				<Accordion.Content>
					<div class="flex flex-col gap-5 overflow-x-auto overflow-y-hidden py-5">
						<span class="text-alert">
							<FunctionCallAltered />
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
						<span class="text-altered">
							<Raise />
						</span>
					</div>
				</Accordion.Content>
			</Accordion.Item>
		</Accordion.Root>
	</div>

	<h3 class="py-5 font-bold">Language grammar</h3>

	<p>
		We add <span class="font-bold">arrow functions</span> to the language. They work wimilarly to JS,
		but you are restricted to the body being a single expression.
	</p>
	<p>
		We add the <code class="bg-secondary rounded-sm px-2">raise</code> function that return the value
		passed as parameter with label high.
	</p>

	<pre class="bg-secondary my-5 overflow-x-auto rounded-sm p-3 text-sm">{`<prog> ::= <stmts>
<stmts> ::= <stmt> <stmts> | {empty}
<stmt> ::= <ident> = <expr> ;               (assignment)
		| <expr> ;                          (evaluate expression)
		| { <stmts> }                       (scope)
		| if ( <expr> ) <stmt>              (if statement)
		| if ( <expr> ) <stmt> else <stmt>  (if / else if / else)
		| while ( <expr> ) stmt             (while loop)

<expr> ::= <num> | <boolean>      (literals)
		| <ident>                 (variable)
		| ( <expr> )              (parentheses)
		
		| ( <ident>* ) => <expr>  (arrow function)
		| raise (<expr>)          (raise <expr> lo label high)
		| <expr>(<expr>*)         (function call)

		| <expr> <binop> <expr>   (binary operation)
		| <unop> <expr>           (unary operation)

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
