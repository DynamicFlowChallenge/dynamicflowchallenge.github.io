import { writable } from 'svelte/store';

// Define a key for localStorage
const PROGRESS_KEY = 'challengeProgress';

function getInitialProgress() {
	if (typeof window !== 'undefined') {
		const storedProgress = window.localStorage.getItem(PROGRESS_KEY);
		return storedProgress ? JSON.parse(storedProgress) : [];
	}

	return [];
}

function createProgressStore() {
	const { subscribe, set, update } = writable(getInitialProgress());
	return {
		subscribe,
		completeChallenge: (challenge: string) => {
			update((current) => {
				const newProgress = [...current, challenge];
				window.localStorage.setItem(PROGRESS_KEY, JSON.stringify(newProgress));
				set(newProgress);
				return newProgress;
			});
		},
		reset: () => {
			window.localStorage.removeItem(PROGRESS_KEY);
			set([]);
		},
		setProgress: (progress: string[]) => {
			// Useful for debugging or progress set manually
			window.localStorage.setItem(PROGRESS_KEY, JSON.stringify(progress));
			set(progress);
		}
	};
}

export const progressStore = createProgressStore();
