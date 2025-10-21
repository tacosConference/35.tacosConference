import { getRandomColor } from '$lib/utils/theme';

export const prerender = true;
export function load({ url }) {
	return { url: url.pathname, color: getRandomColor() };
}