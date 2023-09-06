<script lang="ts">
	import { enhance } from '$app/forms';
</script>

<div>
	<form use:enhance method="post">
		<input id="id" name="id" />
		<input id="title" name="title" />
		<input id="thumbnailUrl" name="thumbnailUrl" />

    <button type="submit">Submit</button>
	</form>
</div>
