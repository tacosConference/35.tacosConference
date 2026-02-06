import { redirect } from '@sveltejs/kit';
import { resolve } from "$app/paths";

export function load(): null {
	redirect(308, resolve("/attend/"));
}