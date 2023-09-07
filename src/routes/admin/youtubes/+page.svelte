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
	const { youtubes } = data;

	const handleDeleteSubmit = (event: Event) => {
		if (!confirm('Are you sure?')) {
			event.preventDefault();
		}
	};
</script>

<div>
	<div class="flex mb-2">
		<h1 class="font-semibold text-2xl">List of Youtubes</h1>
		<Button href="/admin/youtubes/new" class="ml-auto">NEW</Button>
	</div>

	<Table>
		<TableHead>
			<TableHeadCell>Thumbnail</TableHeadCell>
			<TableHeadCell>Id</TableHeadCell>
			<TableHeadCell>Title</TableHeadCell>
			<TableHeadCell>Channel</TableHeadCell>
			<TableHeadCell>Edit</TableHeadCell>
			<TableHeadCell>Delete</TableHeadCell>
		</TableHead>
		<TableBody>
			{#each youtubes as youtube}
				<TableBodyRow>
					<TableBodyCell
						><img
							src={youtube.thumbnailUrl}
							alt={youtube.title}
							class="w-60 object-contain"
						/></TableBodyCell
					>
					<TableBodyCell>{youtube.id}</TableBodyCell>
					<TableBodyCell>{youtube.title}</TableBodyCell>
					<TableBodyCell>{youtube.channel.name}</TableBodyCell>
					<TableBodyCell>
						<Button href="/admin/youtubes/{youtube.id}/edit">Edit</Button>
					</TableBodyCell>
					<TableBodyCell>
						<form
							method="POST"
							action="?/delete&slug={youtube.id}"
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
