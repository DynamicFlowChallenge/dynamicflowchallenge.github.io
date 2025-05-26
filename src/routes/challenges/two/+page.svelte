<script lang="ts">
	import Worker from '$lib/two/worker?worker';
	import Challenge from '$lib/components/Challenge.svelte';
</script>

<Challenge currentChallenge="two" nextChallenge="three" WorkerClass={Worker}>
	<h1 class="py-3 text-xl font-bold">Challenge 2</h1>

	<h3 class="py-5 font-bold">Goal</h3>

	<p>
		For this challenge, the goal is still to copy the value of
		<code class="bg-secondary rounded-sm px-2">h</code> into
		<code class="bg-secondary rounded-sm px-2">l</code>.
	</p>
	<p>
		This time, each variable in the program holds not only a value, but also a security label <code
			class="bg-secondary rounded-sm px-2">high</code
		>
		or <code class="bg-secondary rounded-sm px-2">low</code> .
		<code class="bg-secondary rounded-sm px-2">h</code>
		has label <code class="bg-secondary rounded-sm px-2">high</code>, the goal is to have
		<code class="bg-secondary rounded-sm px-2">l</code>
		contain the same value as <code class="bg-secondary rounded-sm px-2">h</code>, but its label
		should be <code class="bg-secondary rounded-sm px-2">low</code>, effectively performing an
		information leak from a high security context into a low security context.
	</p>

	<h3 class="py-5 font-bold">Monitor rules</h3>

	<p>When assigning a value to a variable, the security label of the variable becomes the same as the security label of the value.</p>
	<p>
		Literal values like <code class="bg-secondary rounded-sm px-2">true</code> always have label
		<code class="bg-secondary rounded-sm px-2">low</code>.
	</p>
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
