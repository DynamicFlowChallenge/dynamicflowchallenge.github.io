<script lang="ts">
	import Worker from '$lib/three/worker?worker';
	import Challenge from '$lib/components/Challenge.svelte';
	import BinOp from '$lib/components/rules/BinOp.svelte';
	import Ident from '$lib/components/rules/Ident.svelte';
	import Literal from '$lib/components/rules/Literal.svelte';
	import UnaryOp from '$lib/components/rules/UnaryOp.svelte';
	import AssignAltered from '$lib/components/rules/AssignAltered.svelte';
	import * as Accordion from '$lib/components/ui/accordion/index.js';
	import IfFalse from '$lib/components/rules/IfFalse.svelte';
	import IfTrue from '$lib/components/rules/IfTrue.svelte';
	import WhileFalse from '$lib/components/rules/WhileFalse.svelte';
	import WhileTrue from '$lib/components/rules/WhileTrue.svelte';
</script>

<svelte:head>
	<title>DFC Challenge 3</title>
</svelte:head>

<Challenge currentChallenge="three" nextChallenge="four" WorkerClass={Worker}>
	<h1 class="py-3 text-xl font-bold">Challenge 3</h1>

	<h3 class="py-5 font-bold">Goal</h3>

	<p>
		As you have seen, branching on high values can leak information into low values if you are not
		careful.
	</p>
	<p>
		With the updated monitor, your goal is still to leak information of <code
			class="bg-secondary rounded-sm px-2">h</code
		>
		into <code class="bg-secondary rounded-sm px-2">l</code>.
	</p>
	<h3 class="py-5 font-bold">Monitor rules</h3>

	<p>
		We introduce the <span class="font-bold">Program Context</span>, each time we enter a
		conditional block (from a if/else or a while) we push the label of the value we're branching on
		to the Program Context stack. All assignments will now result in the variable having the union
		of the top of the program context with the value we're assigning.
	</p>
	<p>
		This means that an assignment in an if block whose condition is high now results in the label of
		the variable being assigned to being high.
	</p>

	<div class="mx-5">
		<Accordion.Root>
			<Accordion.Item value="item-1">
				<Accordion.Trigger>See all rules</Accordion.Trigger>
				<Accordion.Content>
					<div class="flex flex-col gap-5 overflow-x-auto overflow-y-hidden py-5">
						<AssignAltered />
						<span class="text-alert">
							<IfTrue />
							<IfFalse />
							<WhileTrue />
							<WhileFalse />
						</span>
						<BinOp />
						<UnaryOp />
						<Literal />
						<Ident />
					</div>
				</Accordion.Content>
			</Accordion.Item>
		</Accordion.Root>
	</div>

	<h3 class="py-5 font-bold">Language grammar</h3>

	<pre class="bg-secondary mb-5 overflow-x-auto rounded-sm p-3 text-sm">{`<prog> ::= <stmts>
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
		| <expr> <binop> <expr>   (binary operation)
		| <unop> <expr>           (unary operation)

<binop> ::= + | - | * | / | and | or
<unop> ::= not | - | +`}</pre>
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
