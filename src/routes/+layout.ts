export const prerender = true;
export function load({ url, data }) {
  
	return { url: url.pathname, color: data.color };
}
