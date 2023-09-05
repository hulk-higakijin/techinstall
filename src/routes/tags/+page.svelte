<script lang="ts">
	import { Card } from 'flowbite-svelte';

	export let data;
</script>

<div>
	<h1>Tags</h1>

	<div class="grid grid-cols-4 gap-2">
		{#each data.tags as tag}
			<Card href="/tags/{tag.id}">
				<h2>{tag.name}</h2>
			</Card>
		{/each}
	</div>
</div>
