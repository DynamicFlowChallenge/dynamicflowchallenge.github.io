<script lang="ts">
	import Worker from '$lib/one/worker?worker';
	import Challenge from '$lib/components/Challenge.svelte';
</script>

<svelte:head>
	<title>DFC Challenge 1</title>
</svelte:head>

<Challenge currentChallenge="one" nextChallenge="two" WorkerClass={Worker}>
	<h1 class="py-3 text-xl font-bold">Challenge 1</h1>

	<h3 class="py-5 font-bold">Goal</h3>

	<p>
		Through all the following challenges, the goal will always be the same : copy the value of the
		boolean variable <code class="bg-secondary rounded-sm px-2">h</code> into the boolean variable
		<code class="bg-secondary rounded-sm px-2">l</code>.
	</p>
	<p>
		You'll be using different variations of the Courant programming language, this is is dynamically
		typed programming language with a syntax close to JavaScript
	</p>

	<p>
		In the version for this first challenge, you can assign variables to one an other, and use basic
		constructs like conditionals and while loops
	</p>

	<h3 class="py-5 font-bold">Monitor rules</h3>

	<p>No monitor rules</p>

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
