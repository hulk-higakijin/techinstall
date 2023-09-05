import { Tmdb } from '$lib/server/tmdb';

export const load = async ({ params }) => {
	const tmdb = new Tmdb();
	const { movie } = await tmdb.find(params.slug);

	return { movie };
};
