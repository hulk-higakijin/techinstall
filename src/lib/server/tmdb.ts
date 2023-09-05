import axios from 'axios';

export class Tmdb {
	constructor(
		public readonly page: number = 1,
		public readonly language: string = 'ja',
		public readonly region: string = 'JP'
	) {}

	async find(id: string) {
		const response = await axios.get(
			`${tmdbApiUrl}/movie/${id}?language=${this.language}`,
			options
		);
		const movie: Movie = response.data;

		return { movie };
	}

	async nowPlaying() {
		const response = await axios.get(
			`${tmdbApiUrl}/movie/now_playing?language=${this.language}&page=${this.page}&region=${this.region}`,
			options
		);
		const movies: Movie[] = response.data.results;

		return { movies };
	}
}

const tmdbApiUrl = 'https://api.themoviedb.org/3';

const options = {
	method: 'GET',
	headers: {
		accept: 'application/json',
		Authorization: `Bearer ${process.env.TMDB_API_READ_ACCESS_TOKEN}`
	}
};
