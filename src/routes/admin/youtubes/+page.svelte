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
</script>

<div>
	<div class="flex mb-2">
		<h1 class="font-semibold text-2xl">List of Youtubes</h1>
		<Button href="/admin/youtubes/new" class="ml-auto">NEW</Button>
	</div>

	<Table>
		<TableHead>
			<TableHeadCell>THUMBNAIL</TableHeadCell>
			<TableHeadCell>ID</TableHeadCell>
			<TableHeadCell>TITLE</TableHeadCell>
			<TableHeadCell>Edit</TableHeadCell>
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
					<TableHeadCell><a href="/admin/youtubes/{youtube.id}/edit">Edit</a></TableHeadCell>
				</TableBodyRow>
			{/each}
		</TableBody>
	</Table>
</div>
