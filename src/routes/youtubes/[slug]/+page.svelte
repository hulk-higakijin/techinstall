<script lang="ts">
	import YoutubeIframe from '$components/YoutubeIframe.svelte';

	export let data;
	const { youtube, otherYoutubes } = data;
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
						class="rounded-full h-12 w-12"
					/>
					<p class="my-auto text-sm text-gray-700">{youtube.channel.name}</p>
				</div>
			</div>
		</div>
		<div class="col-span-3">
			<h2 class="font-semibold text-gray-700 mb-2">People Also Watch</h2>
			<div class="flex flex-col gap-2">
				{#each otherYoutubes as youtube}
					<a href="/youtubes/{youtube.id}">
						<div class="grid grid-cols-2 gap-2">
							<img src={youtube.thumbnailUrl} alt={youtube.title} class="col-span-1 rounded" />
							<p class="col-span-1 text-sm text-gray-600 line-clamp-5">{youtube.title}</p>
						</div>
					</a>
				{/each}
			</div>
		</div>
	</div>
</div>
