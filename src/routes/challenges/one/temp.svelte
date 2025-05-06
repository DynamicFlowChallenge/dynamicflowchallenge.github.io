<script lang="ts">
	import CodeMirror from 'svelte-codemirror-editor';
	import { dracula } from 'thememirror';
	import { EditorView, keymap } from '@codemirror/view';
	import { Prec } from '@codemirror/state';
	import { javascript } from '@codemirror/lang-javascript';
	import MyWorker from '../../test.worker?worker';

	let value = $state('');
	let processing = $state(false);

	const onSubmit = (): Promise<string> => {
		processing = true;
		const myWorker = new MyWorker();
		myWorker.postMessage(value);
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				myWorker.terminate();
				processing = false;
				reject();
			}, 10000);
			myWorker.onmessage = (msg: MessageEvent<string>) => {
				console.log('Message : ' + msg.data);
				resolve(msg.data);
				processing = false;
				myWorker.terminate();
				return;
			};
		});
	};

	const onShiftEnter = (e: EditorView): boolean => {
		onSubmit();
		return true;
	};

	const myKeyMap = Prec.highest(
		keymap.of([
			{
				key: 'Shift-Enter',
				run: onShiftEnter
			}
		])
	);
</script>

<div class="flex h-full">
	<div class="border-primary/4 h-full w-2xl border-r"></div>
	<div class="h-full w-1/2 flex-none">
		<div class="h-1/2 overflow-y-auto">
			<CodeMirror
				bind:value
				theme={dracula}
				lang={javascript()}
				extensions={[myKeyMap]}
				styles={{
					'&': {
						width: '100%',
						height: '100%'
					}
				}}
			/>
		</div>
		<div class="border-primary/4 flex h-12 border-t px-5 py-2">
			{#if processing}
				<span class="text-primary">
					<svg
						width="24"
						height="24"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
						fill="currentColor"
					>
						<style>
							.spinner_5nOS {
								transform-origin: center;
								animation: spinner_sEAn 0.75s infinite linear;
							}
							@keyframes spinner_sEAn {
								100% {
									transform: rotate(360deg);
								}
							}
						</style>
						<path
							d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z"
							opacity=".25"
						/>
						<path
							d="M10.72,19.9a8,8,0,0,1-6.5-9.79A7.77,7.77,0,0,1,10.4,4.16a8,8,0,0,1,9.49,6.52A1.54,1.54,0,0,0,21.38,12h.13a1.37,1.37,0,0,0,1.38-1.54,11,11,0,1,0-12.7,12.39A1.54,1.54,0,0,0,12,21.34h0A1.47,1.47,0,0,0,10.72,19.9Z"
							class="spinner_5nOS"
						/>
					</svg>
				</span>
			{:else}
				<button
					onclick={onSubmit}
					class="hover:bg-secondary-hover flex aspect-square cursor-pointer items-center justify-center rounded-md text-green-400"
					aria-label="run"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						class="size-6"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z"
						/>
					</svg>
				</button>
			{/if}
		</div>
		<div class="border-primary/4 text-primary border-t p-5">Results</div>
	</div>
	<div class="border-primary/4 text-primary w-full border-l p-10">
		<h1 class="text-xl font-bold">Hello, World!</h1>
	</div>
</div>
