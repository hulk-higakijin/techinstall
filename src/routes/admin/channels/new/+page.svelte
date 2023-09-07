<script lang="ts">
  export let data;
  import ChannelForm from '$components/channels/ChannelForm.svelte';
</script>

<div>
	<div class="flex mb-2">
		<h1 class="font-semibold text-2xl">NEW CHANNEL</h1>
	</div>

	<ChannelForm data={data.form} />
</div>
