import prisma from '$lib/prisma';
import { fail, redirect, type Actions } from '@sveltejs/kit';

export const actions: Actions = {
	default: async ({ request, locals }) => {
		const form = await request.formData();
		const id = form.get('id');
		const title = form.get('title');
		const thumbnailUrl = form.get('thumbnailUrl');

		if (typeof id !== 'string' || typeof title !== 'string' || typeof thumbnailUrl !== 'string')
			return fail(400);

		try {
			const youtube = await prisma.youtube.create({
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
