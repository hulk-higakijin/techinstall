<script lang="ts">
  import {  Heading } from 'flowbite-svelte'

	export let data;
</script>

<Heading tag="h4" class="text-primary-700 py-4">現在公開中</Heading>

<div class="grid grid-cols-4 gap-4">
	{#each data.movies as movie}
		<a href="/movies/{movie.id}">
			<img
				src="https://image.tmdb.org/t/p/w300_and_h450_bestv2/{movie.poster_path}"
				alt={movie.title}
				class="rounded"
			/>
		</a>
	{/each}
</div>
