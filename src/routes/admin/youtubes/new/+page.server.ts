import prisma from '$lib/prisma';
import { fail, redirect, type Actions } from '@sveltejs/kit';
import type { PageServerLoad } from '../$types';
import { youtubeSchema } from '$lib/schemas/youtubeSchema';
import { superValidate } from 'sveltekit-superforms/server';

export const load: PageServerLoad = async () => {
	const form = await superValidate(youtubeSchema);
	const channels = await prisma.channel.findMany()

	return { channels, form };
};

export const actions: Actions = {
	default: async (event) => {
		const form = await superValidate(event, youtubeSchema);
		const { id, title, thumbnailUrl, channelId } = form.data;

		if (!form.valid) {
			return fail(400, { form });
		}

		try {
			const youtube = await prisma.youtube.create({
				data: {
					id,
					title,
					thumbnailUrl,
					channelId
				}
			});
		} catch (error) {
			return fail(500);
		}

		throw redirect(303, '/admin/youtubes');
	}
};
