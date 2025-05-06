export function sleep(t: number) {
	const start = Date.now();
	while (Date.now() - start < t);
}
