<script lang="ts">
	export let youtubeId: string;
</script>

<div style="position: relative; padding-bottom: 56.25%;">
	<iframe
		style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"
		src="https://www.youtube.com/embed/{youtubeId}"
		frameborder="0"
		allow="autoplay; 
    encrypted-media"
		allowfullscreen
	/>
</div>
