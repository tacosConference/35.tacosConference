import toml from 'toml';
import fs from 'node:fs';
import path from 'node:path';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	const filePath = path.resolve('src/lib/data/schedule.toml');
	const tomlContent = fs.readFileSync(filePath, 'utf-8');
	const data = toml.parse(tomlContent);

	return {
		schedule: data
	};
};

