<script lang="ts">
	export let data;
	import YoutubeForm from '$components/youtubes/YoutubeForm.svelte';
</script>

<div>
	<div class="flex mb-2">
		<h1 class="font-semibold text-2xl">NEW YOUTUBE</h1>
	</div>

	<YoutubeForm data={data.form} />
</div>
