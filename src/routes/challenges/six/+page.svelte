<script lang="ts">
	import Worker from '$lib/six/worker?worker';
	import Challenge from '$lib/components/Challenge.svelte';
</script>

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
		The value thrown keeps its label in the catch block.
	</p>

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
