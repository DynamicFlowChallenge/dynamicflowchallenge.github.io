<script lang="ts">
	import Worker from '$lib/sandbox/worker?worker';
	import Challenge from '$lib/components/Challenge.svelte';
</script>

<Challenge currentChallenge="sandbox" nextChallenge="sandbox" WorkerClass={Worker}>
	<h1 class="py-3 text-xl font-bold">Sandbox</h1>

	Well done ! You have completed all the challenges ! We hope you better understand how dynamic
	information flow control works and its challenges. But there still is one final challenge : find a
	bug in our code !

	<h3 class="py-5 font-bold">Goal</h3>
	<p>
		Like for the other challenges, <code class="bg-secondary rounded-sm px-2">h</code> contains a
		boolean value of label high, the goal is to leak this value in
		<code class="bg-secondary rounded-sm px-2">l</code>.
	</p>

	<p>
		In this sandbox, you have all the language features at your disposal and all the monitor rules
		are active. There is theoretically no way to leak data, but a bug or logic error that leads to
		leaking data could still be present in Courant.
	</p>

	<h3 class="py-5 font-bold">Monitor rules</h3>

	<p>
		There is now an exception label. Similar to the return label, throwing in a context higher that
		the current exception label is forbidden. The exception label is set to the current program
		context when you enter a try/catch block.
	</p>

	<h3 class="py-5 font-bold">Language grammar</h3>

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
