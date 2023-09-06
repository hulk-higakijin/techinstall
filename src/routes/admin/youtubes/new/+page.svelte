<script lang="ts">
	import { enhance } from '$app/forms';
	import { Button, Input, Label } from 'flowbite-svelte';
</script>

<div>
	<div class="flex mb-2">
		<h1 class="font-semibold text-2xl">NEW YOUTUBE</h1>
	</div>

	<form use:enhance method="post">
		<div class="mb-2">
			<Label for="id">ID</Label>
			<Input id="id" name="id" />
		</div>
		<div class="mb-2">
			<Label for="title">TITLE</Label>
			<Input id="title" name="title" />
		</div>
		<div class="mb-2">
			<Label for="thumbnailUrl">THUMBNAIL URL</Label>
			<Input id="thumbnailUrl" name="thumbnailUrl" />
		</div>
		<Button type="submit">Submit</Button>
	</form>
</div>
