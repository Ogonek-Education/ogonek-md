export function debounce<T extends unknown[], K>(cb: (...args: T) => K, wait = 1000) {
	let timeout: NodeJS.Timeout;
	return (...args: T) =>
		new Promise<K>((resolve) => {
			clearTimeout(timeout);
			timeout = setTimeout(() => resolve(cb(...args)), wait);
		});
}
