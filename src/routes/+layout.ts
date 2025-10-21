export const prerender = true;
export const trailingSlash = 'always';
export function load({ url, data }) {
  
	return { url: url.pathname, color: data.color };
}
