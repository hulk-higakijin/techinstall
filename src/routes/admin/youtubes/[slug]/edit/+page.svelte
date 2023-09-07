<script lang="ts">
	import YoutubeForm from "$components/youtubes/YoutubeForm.svelte";

	export let data;
	const { youtube } = data;
</script>

<div>
	<div class="flex mb-2">
		<h1 class="font-semibold text-2xl">Edit {youtube.title}</h1>
	</div>

  <YoutubeForm data={data.form} />
</div>
