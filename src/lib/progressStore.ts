import { derived, get, writable } from 'svelte/store';
import { challenges } from './challenges';

// Define a key for localStorage
const PROGRESS_KEY = 'challengeProgress';

function getInitialProgress(): string[] {
	if (typeof window !== 'undefined') {
		const storedProgress = window.localStorage.getItem(PROGRESS_KEY);
		return storedProgress ? JSON.parse(storedProgress) : [];
	}

	return [];
}
const store = writable(getInitialProgress());

function createProgressStore() {
	return {
		subscribe: store.subscribe,
		completeChallenge: (challenge: string) => {
			store.update((current) => {
				if (!current.includes(challenge)) {
					const newProgress = [...current, challenge];
					window.localStorage.setItem(PROGRESS_KEY, JSON.stringify(newProgress));
					return newProgress;
				}
				return current;
			});
		},
		resetChallenge: (challenge: string) => {
			store.update((current) => {
				const i = current.indexOf(challenge);
				if (i != -1) {
					const newProgress = [...current];
					newProgress.splice(i, 1);
					window.localStorage.setItem(PROGRESS_KEY, JSON.stringify(current));
					return newProgress;
				}
				return current;
			});
		},
		reset: () => {
			window.localStorage.removeItem(PROGRESS_KEY);
			store.set([]);
		},
		setProgress: (progress: string[]) => {
			// Useful for debugging or progress set manually
			window.localStorage.setItem(PROGRESS_KEY, JSON.stringify(progress));
			store.set(progress);
		}
	};
}

export const firstChallengeNotCompleted = derived(store, ($store) => {
	for (const challenge of challenges) {
		if (!$store.includes(challenge)) {
			return challenge;
		}
	}
	return 'sandbox';
});

export const hasChallengesProgress = derived(store, ($store) => {
	return $store.length != 0;
});

export const progressStore = createProgressStore();
