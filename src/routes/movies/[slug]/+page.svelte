<script lang="ts">
	import { Heading, Tabs, TabItem } from 'flowbite-svelte';

	export let data;
	export let { movie } = data;
</script>

<Heading tag="h4" class="text-primary-700 py-4">{movie.title}</Heading>

<div class="flex gap-4">
	<img src="https://image.tmdb.org/t/p/w300_and_h450_bestv2/{movie.poster_path}" alt="" />

	<div class="w-full">
		<Tabs>
			<TabItem open title="Profile">
				<p class="text-sm text-gray-500 dark:text-gray-400">
					<b>Profile:</b> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
					incididunt ut labore et dolore magna aliqua.
				</p>
			</TabItem>
			<TabItem title="Settings">
				<p class="text-sm text-gray-500 dark:text-gray-400">
					<b>Settings:</b> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
					incididunt ut labore et dolore magna aliqua.
				</p>
			</TabItem>
			<TabItem title="Users">
				<p class="text-sm text-gray-500 dark:text-gray-400">
					<b>Users:</b> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
					incididunt ut labore et dolore magna aliqua.
				</p>
			</TabItem>
			<TabItem title="あらすじ">
				<p class="text-sm text-gray-500 dark:text-gray-400">{movie.overview}</p>
			</TabItem>
			<TabItem disabled>
				<span slot="title" class="text-gray-400 dark:text-gray-500">Disabled</span>
				<p class="text-sm text-gray-500 dark:text-gray-400">
					<b>Disabled:</b> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
					incididunt ut labore et dolore magna aliqua.
				</p>
			</TabItem>
		</Tabs>
	</div>
</div>
