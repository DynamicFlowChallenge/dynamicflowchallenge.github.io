import { CourantError } from '$lib/courant/error';
import { Label } from '$lib/courant/label';
import { Memory } from '$lib/courant/state';
import type { WorkerMessage } from '$lib/workermessage';
import { run } from './eval';

export function evaluate(code: string): WorkerMessage {
	for (let i = 0; i < 20; i++) {
		const mem = new Memory();
		const expectedValue = i % 2 ? true : false;
		mem.setValue('h', {
			label: Label.bottom(),
			value: { type: 'boolean', value: expectedValue }
		});
		try {
			run(code, mem);
			const l = mem.getValue('l');
			if (l === undefined) {
				return { type: 'error', message: `No value for 'l' at run ${i + 1}/20` };
			}
			if (l.value.type != 'boolean') {
				return {
					type: 'error',
					message: `l is of type ${l.value.type} instead of boolean ar run ${i + 1}/20`
				};
			}
			if (l.value.value != expectedValue) {
				return {
					type: 'error',
					message: `Expected l to be equal to ${expectedValue} but found ${l.value.value} at run ${i+1}/20`
				};
			}
		} catch (e) {
			if (e instanceof CourantError) {
				return { type: 'error', message: e.message };
			} else {
				return { type: 'error', message: `Unknown error: ${e}` };
			}
		}
	}
	return { type: 'success' };
}

self.onmessage = (event: MessageEvent<string>) => {
	debugger;
	console.log("oui");
	self.postMessage(evaluate(event.data));
};
