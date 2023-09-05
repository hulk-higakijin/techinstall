import type { PageServerLoad } from '../$types';
import { Tmdb } from '../../lib/server/tmdb';

export const load: PageServerLoad = async ({ locals }) => {
	const tmdb = new Tmdb(2);
	const { movies } = await tmdb.nowPlaying();

  return {
    movies
  }
};
