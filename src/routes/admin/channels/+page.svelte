<script lang="ts">
	import {
		Button,
		Table,
		TableBody,
		TableBodyCell,
		TableBodyRow,
		TableHead,
		TableHeadCell
	} from 'flowbite-svelte';

	export let data;

	const { channels } = data;

	const handleDeleteSubmit = (event: Event) => {
		if (!confirm('Are you sure?')) {
			event.preventDefault();
		}
	};
</script>

<div>
	<div class="flex mb-2">
		<h1 class="font-semibold text-2xl">List of Channels</h1>
		<Button href="/admin/channels/new" class="ml-auto">NEW</Button>
	</div>

	<Table>
		<TableHead>
			<TableHeadCell>Avatar</TableHeadCell>
			<TableHeadCell>Id</TableHeadCell>
			<TableHeadCell>Name</TableHeadCell>
			<TableHeadCell>Edit</TableHeadCell>
			<TableHeadCell>Delete</TableHeadCell>
		</TableHead>
		<TableBody>
			{#each channels as channel}
				<TableBodyRow>
					<TableBodyCell
						><img
							src={channel.avatarUrl}
							alt={channel.name}
							class="w-20 object-contain rounded"
						/></TableBodyCell
					>
					<TableBodyCell>{channel.id}</TableBodyCell>
					<TableBodyCell>{channel.name}</TableBodyCell>
					<TableBodyCell>
						<Button href="/admin/channels/{channel.id}/edit">Edit</Button>
					</TableBodyCell>
					<TableBodyCell>
						<form
							method="POST"
							action="?/delete&slug={channel.id}"
							on:submit={(e) => handleDeleteSubmit(e)}
						>
							<Button type="submit" color="red">Delete</Button>
						</form>
					</TableBodyCell>
				</TableBodyRow>
			{/each}
		</TableBody>
	</Table>
</div>
