<script lang="ts">
	export let data;

	const { youtubes } = data;
</script>

<div>
	<h1>Youtubes</h1>

	<a href="/admin/youtubes/new">New Youtube</a>

	<ul>
		{#each youtubes as youtube}
			<li>
				<a href="/admin/youtubes/{youtube.id}">
					{youtube.title}
				</a>
			</li>
		{/each}
	</ul>
</div>
