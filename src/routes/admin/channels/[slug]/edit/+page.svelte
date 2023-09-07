<script lang="ts">
	import ChannelForm from "$components/channels/ChannelForm.svelte";

	export let data;
	const { channel } = data;
</script>

<div>
	<div class="flex mb-2">
		<h1 class="font-semibold text-2xl">Edit {channel.name}</h1>
	</div>

  <ChannelForm data={data.form} />
</div>
