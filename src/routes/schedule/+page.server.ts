import toml from 'toml';
import type { PageServerLoad } from './$types';
import scheduleToml from '$lib/data/schedule.toml?raw';

export const load: PageServerLoad = async () => {
	const data = toml.parse(scheduleToml) as { events?: Array<Record<string, unknown>> };

	return {
		schedule: {
			...data
		}
	};
};
