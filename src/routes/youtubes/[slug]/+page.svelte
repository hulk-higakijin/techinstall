<script lang="ts">
	import YoutubeIframe from '$components/YoutubeIframe.svelte';

	export let data;
	const { youtube } = data;
</script>

<div>
	<div class="grid grid-cols-12 gap-4">
		<div class="col-span-9">
			<div class="mb-2">
				<YoutubeIframe youtubeId={data.youtube.id} />
			</div>
			<div>
				<h1 class="font-semibold text-xl text-gray-700 mb-2">{youtube.title}</h1>
				<div class="flex gap-2">
					<img
						src={youtube.channel.avatarUrl}
						alt={youtube.channel.name}
						class="rounded-full h-16 w-16"
					/>
					<p class="my-auto text-sm text-gray-700">{youtube.channel.name}</p>
				</div>
			</div>
		</div>
		<div class="col-span-3">hogehoge</div>
	</div>
</div>
