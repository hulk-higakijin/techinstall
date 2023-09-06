<script lang="ts">
	import { Button, Input, Label } from 'flowbite-svelte';

	export let data;
	import { superForm } from 'sveltekit-superforms/client';
	const { form, message, errors, submitting, capture, restore, enhance } = superForm(data.form, {
		taintedMessage: false
	});
</script>

<div>
	<div class="flex mb-2">
		<h1 class="font-semibold text-2xl">NEW YOUTUBE</h1>
	</div>

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

		<Button type="submit" disabled={$submitting}>Submit</Button>
	</form>
</div>
