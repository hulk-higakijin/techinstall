<script lang="ts">
	import { Alert } from 'flowbite-svelte';

	import { enhance } from "$app/forms";
	import type { PageData } from "./$types";

	export let data: PageData;
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<Alert>
	<span class="font-medium">Info alert!</span> Change a few things up and try submitting again.
</Alert>

<h1>Profile</h1>
<div>
	<p>User id: {data.user.userId}</p>
	<p>Username: {data.user.username}</p>
</div>
<form use:enhance method="post">
	<input type="submit" value="Sign out" />
</form>
