import { browser } from '$app/environment';
import { getRandomColor } from '$lib/utils/theme.js';

export const prerender = true;
export const trailingSlash = 'always';

export function load({ url }) {
  let color = getRandomColor();
  if (!browser) {
    color = "transparent"
  }
	return { url: url.pathname, color };
}
