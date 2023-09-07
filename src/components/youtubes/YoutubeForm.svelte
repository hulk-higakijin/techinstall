<script lang="ts">
	import { Button, Input, Label, Select } from 'flowbite-svelte';
	import type { youtubeSchema } from '$lib/schemas/youtubeSchema';
	import type { SuperValidated } from 'sveltekit-superforms';
	import { superForm } from 'sveltekit-superforms/client';
	import type { Channel } from '@prisma/client';

	export let data: SuperValidated<typeof youtubeSchema>;
	export let channels: Channel[];
	const { form, message, errors, submitting, capture, restore, enhance } = superForm(data, {
		taintedMessage: false
	});

	let channelItems = channels.map((channel) => {
		return {
			value: channel.id,
			name: channel.name
		};
	});
</script>

<form use:enhance method="POST">
	<div class="mb-2">
		<Label for="id">ID</Label>
		<Input id="id" name="id" bind:value={$form.id} disabled={$submitting} />
		{#if $errors.id}<span class="text-red-500">{$errors.id[0]}</span>{/if}
	</div>
	<div class="mb-2">
		<Label for="title">TITLE</Label>
		<Input id="title" name="title" bind:value={$form.title} disabled={$submitting} />
		{#if $errors.title}<span class="text-red-500">{$errors.title[0]}</span>{/if}
	</div>
	<div class="mb-2">
		<Label for="thumbnailUrl">THUMBNAIL URL</Label>
		<Input
			id="thumbnailUrl"
			name="thumbnailUrl"
			bind:value={$form.thumbnailUrl}
			disabled={$submitting}
		/>
		{#if $errors.thumbnailUrl}<span class="text-red-500">{$errors.thumbnailUrl[0]}</span>{/if}
	</div>
	<div class="mb-2">
		<Label for="channelId">Channel</Label>
		<Select
			id="channelId"
			name="channelId"
			class="mt-2"
			items={channelItems}
			bind:value={$form.channelId}
			disabled={$submitting}
			placeholder="select..."
		/>
		{#if $errors.channelId}<span class="text-red-500">{$errors.channelId[0]}</span>{/if}
	</div>
	<Button type="submit" disabled={$submitting}>Submit</Button>
</form>
