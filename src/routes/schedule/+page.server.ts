import toml from 'toml';
import fs from 'node:fs';
import path from 'node:path';
import type { PageServerLoad } from './$types';
import { getLocale, baseLocale } from '$lib/paraglide/runtime.js';
import type { Event } from '$lib/event';

export const load: PageServerLoad = async () => {
	const filePath = path.resolve('src/lib/data/schedule.toml');
	const tomlContent = fs.readFileSync(filePath, 'utf-8');
	const data = toml.parse(tomlContent) as { events?: Array<Record<string, unknown>> };
	const locale = getLocale();

	const resolveLocalized = (value: unknown) => {
		if (typeof value === 'string') return value;
		if (!value || typeof value !== 'object') return '';
		const localized = value as Record<string, string>;
		return localized[locale] ?? localized[baseLocale] ?? Object.values(localized)[0] ?? '';
	};

	const localizedEvents: Event[] = (data.events ?? []).map((event) => {
		const raw = event as Record<string, unknown>;
		return {
			date: String(raw.date ?? ''),
			time: String(raw.time ?? ''),
			end: String(raw.end ?? ''),
			color: String(raw.color ?? ''),
			day: resolveLocalized(raw.day),
			title: resolveLocalized(raw.title),
			short_title: resolveLocalized(raw.short_title),
			person: resolveLocalized(raw.person),
			description: resolveLocalized(raw.description),
			location: resolveLocalized(raw.location)
		};
	});

	return {
		schedule: {
			...data,
			events: localizedEvents
		}
	};
};
