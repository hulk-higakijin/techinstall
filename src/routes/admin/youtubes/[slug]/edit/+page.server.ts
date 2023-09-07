import prisma from '$lib/prisma';
import { youtubeSchema } from '$lib/schemas/youtubeSchema';
import { fail, type Actions, redirect, error } from '@sveltejs/kit';
import { superValidate } from 'sveltekit-superforms/server';

export const load = async ({ params }) => {
	const youtube = await prisma.youtube.findUnique({ where: { id: params.slug } });
	const form = await superValidate(youtube, youtubeSchema);

	if (!youtube) throw error(404);

	return { youtube, form };
};

export const actions: Actions = {
	default: async (event) => {
		const form = await superValidate(event, youtubeSchema);
		const { id, title, thumbnailUrl } = form.data;

		if (!form.valid) {
			return fail(400, { form });
		}

		try {
			const youtube = await prisma.youtube.update({
				where: { id: event.params.slug },
				data: {
					id,
					title,
					thumbnailUrl
				}
			});
		} catch (error) {
			return fail(500);
		}

		throw redirect(303, '/admin/youtubes');
	}
};
