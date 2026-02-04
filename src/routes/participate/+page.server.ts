import type { ServerLoad } from '@sveltejs/kit';
import { IBAN } from '$env/static/private';

export const load: ServerLoad = async () => {
  const iban = IBAN;
  return { iban };
};