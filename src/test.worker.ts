import { run } from '$lib/one/eval';

self.onmessage = (event: MessageEvent<string>) => {
	const code = event.data;
	console.log('yoo from worker');
	try {
		const mem = run(code);
		const a = mem.getValue('a')?.value;
		self.postMessage(a && a.type != 'undefined' ? a.value : 'undefined');
	} catch (e) {}
	// self.postMessage(mem.getValue("a")!.toString());
};
