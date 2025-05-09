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
	import type { WorkerMessage } from '$lib/workermessage';
	import { progressStore } from '$lib/progressStore';
	import * as Dialog from '$lib/components/ui/dialog';
	import { challenges } from '$lib/challenges';

	let { currentChallenge, WorkerClass, children, nextChallenge } = $props();

	let dialogOpen = $state(false);

	let theme = $state(dracula);
	mode.subscribe((mode) => {
		if (mode === 'dark') {
			theme = dracula;
		} else if (mode === 'light') {
			theme = ayuLight;
		}
	});

	let errorMessage = $state('');

	let value = $state('');
	let processing = $state(false);

	const onSubmit = (): Promise<WorkerMessage> => {
		processing = true;
		errorMessage = '';
		const myWorker = new WorkerClass();
		myWorker.postMessage(value);
		return new Promise((resolve, reject) => {
			const timeout = setTimeout(() => {
				myWorker.terminate();
				processing = false;
				errorMessage = 'Execution took too long: program killed after 10 seconds';
				reject();
			}, 10000);
			myWorker.onmessage = (msg: MessageEvent<WorkerMessage>) => {
				if (msg.data.type === 'error') {
					errorMessage = msg.data.message;
				} else {
					progressStore.completeChallenge(currentChallenge);
					dialogOpen = true;
				}
				resolve(msg.data);
				clearTimeout(timeout);
				processing = false;
				myWorker.terminate();
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

<Dialog.Root bind:open={dialogOpen}>
	<Dialog.Content>
		<Dialog.Title>Challenge completed !</Dialog.Title>
		<Dialog.Description>Well done, you completed this challenge</Dialog.Description>
		<div class="flex justify-end gap-10">
			<Dialog.Close class="cursor-pointer">Stay</Dialog.Close>
			<Button href={`/challenges/${nextChallenge}`}>Next challenge</Button>
		</div>
	</Dialog.Content>
</Dialog.Root>
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
						on:ready={(e) => {
							e.detail.focus();
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
				<div class="border-border text-primary border-t p-5">
					<h1 class="mb-5 text-xl font-bold">Results</h1>
					<p>
						{errorMessage}
					</p>
				</div>
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
