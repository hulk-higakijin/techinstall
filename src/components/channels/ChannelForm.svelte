<script lang="ts">
	import { Button, Input, Label } from 'flowbite-svelte';
	import type { channelSchema } from '$lib/schemas/channelSchema';
	import type { SuperValidated } from 'sveltekit-superforms';
	import { superForm } from 'sveltekit-superforms/client';

	export let data: SuperValidated<typeof channelSchema>;
	const { form, message, errors, submitting, capture, restore, enhance } = superForm(data, {
		taintedMessage: false
	});
</script>

<form use:enhance method="POST">
	<div class="mb-2">
		<Label for="id">ID</Label>
		<Input id="id" name="id" bind:value={$form.id} disabled={$submitting} />
		{#if $errors.id}<span class="text-red-500">{$errors.id[0]}</span>{/if}
	</div>
	<div class="mb-2">
		<Label for="name">NAME</Label>
		<Input id="name" name="name" bind:value={$form.name} disabled={$submitting} />
		{#if $errors.name}<span class="text-red-500">{$errors.name[0]}</span>{/if}
	</div>
	<div class="mb-2">
		<Label for="avatarUrl">AVATAR URL</Label>
		<Input
			id="avatarUrl"
			name="avatarUrl"
			bind:value={$form.avatarUrl}
			disabled={$submitting}
		/>
		{#if $errors.avatarUrl}<span class="text-red-500">{$errors.avatarUrl[0]}</span>{/if}
	</div>

	<Button type="submit" disabled={$submitting}>Submit</Button>
</form>
