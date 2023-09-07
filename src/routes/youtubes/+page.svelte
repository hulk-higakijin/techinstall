<script>
	import { Card } from 'flowbite-svelte';

	export let data;

	const { youtubes } = data;
</script>

<div class="grid grid-cols-4 gap-4">
	{#each youtubes as youtube}
		<Card href="/youtubes/{youtube.id}" class="shadow-none">
			<img src={youtube.thumbnailUrl} alt={youtube.id} class="mb-4 rounded" />
			<p class="font-normal text-gray-700 dark:text-gray-400 leading-tight line-clamp-3 text-sm">
				{youtube.title}
			</p>
		</Card>
	{/each}
</div>
