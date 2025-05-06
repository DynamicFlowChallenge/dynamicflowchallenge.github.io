<script lang="ts">
	import CodeMirror from 'svelte-codemirror-editor';
	import { ayuLight } from 'thememirror';
	import { EditorView, keymap } from '@codemirror/view';
	import { Prec } from '@codemirror/state';
	import { javascript } from '@codemirror/lang-javascript';
	import * as Resizable from '$lib/components/ui/resizable';
	import { Button } from '$lib/components/ui/button';
	import { mode } from 'mode-watcher';
	import ChallengeList from '$lib/components/ChallengeList.svelte';
	import dracula from '$lib/dracula';
	import Spinner from './icons/Spinner.svelte';
	import Play from './icons/Play.svelte';

	let { currentChallenge, challenges, WorkerClass, children } = $props();

	let theme = $state(dracula);
	mode.subscribe((mode) => {
		if (mode === 'dark') {
			theme = dracula;
		} else if (mode === 'light') {
			theme = ayuLight;
		}
	});
	// = derived(mode, (mode) => { mode === 'dark' ? dracula : ayuLight})

	let value = $state('');
	let processing = $state(false);

	const onSubmit = (): Promise<string> => {
		processing = true;
		const myWorker = new WorkerClass();
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

<Resizable.PaneGroup class="h-full" direction="horizontal">
	<Resizable.Pane defaultSize={12}>
		<ChallengeList {challenges} {currentChallenge} />
	</Resizable.Pane>
	<Resizable.Handle />
	<Resizable.Pane>
		<Resizable.PaneGroup direction="vertical">
			<Resizable.Pane>
				<div class="h-full overflow-y-auto">
					<CodeMirror
						bind:value
						{theme}
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
			</Resizable.Pane>
			<Resizable.Handle />
			<Resizable.Pane>
				<div class="border-border flex h-12 items-center border-t px-5">
					{#if processing}
						<span class="text-primary">
							<Spinner />
						</span>
					{:else}
						<Button
							variant="ghost"
							onclick={onSubmit}
							size="icon"
							class="text-green-400 hover:cursor-pointer"
						>
							<Play />
						</Button>
					{/if}
				</div>
				<div class="border-border text-primary border-t p-5">Results</div>
			</Resizable.Pane>
		</Resizable.PaneGroup>
	</Resizable.Pane>
	<Resizable.Handle />
	<Resizable.Pane>
		<div class="border-border text-primary w-full border-l p-10">
			{@render children()}
		</div>
	</Resizable.Pane>
</Resizable.PaneGroup>
