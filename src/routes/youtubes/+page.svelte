<script>
	import { Card } from 'flowbite-svelte';

	export let data;

	const { youtubes } = data;
</script>

<div>
	<h1>Youtubes</h1>
	<div class="grid grid-cols-4 gap-4">
		{#each youtubes as youtube}
			<Card href="/youtubes/{youtube.id}">
				<img src={youtube.thumbnailUrl} alt={youtube.id} />
				<p class="line-clamp-3">{youtube.title}</p>
			</Card>
		{/each}
	</div>
</div>
