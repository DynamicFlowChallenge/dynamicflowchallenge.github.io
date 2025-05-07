import { CourantError } from '$lib/one/error';
import { run } from '$lib/one/eval';

self.onmessage = (event: MessageEvent<string>) => {
	// Capture error messages from lexing / parsing
	const errorMessages: any[][] = [];
	console.error = (...data: any[]) => {
		errorMessages.push(data);
	};

	const code = event.data;
	try {
		const mem = run(code);
		// const a = mem.getValue('a')?.value;
		// self.postMessage(a && a.type != 'undefined' ? a.value : 'undefined');
		self.postMessage({ type: 'success' });
	} catch (e) {
		if (e instanceof CourantError) {
			self.postMessage({ type: 'error', message: e.message });
		} else {
			self.postMessage({ type: 'error', message: `Unknown error: ${e}` });
		}
	} finally {
		self.postMessage({ type: 'error', message: 'Unexpected error' });
	}
	// self.postMessage(mem.getValue("a")!.toString());
};
