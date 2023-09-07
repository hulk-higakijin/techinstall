import prisma from '$lib/prisma.js';
import { channelSchema } from '$lib/schemas/channelSchema';
import { error, type Actions, fail, redirect } from '@sveltejs/kit';
import { superValidate } from 'sveltekit-superforms/client';

export const load = async (event) => {
	const channel = await prisma.channel.findUnique({ where: { id: event.params.slug } });
	const form = await superValidate(channel, channelSchema);

	if (!channel) throw error(404);

	return { channel, form };
};

export const actions: Actions = {
	default: async (event) => {
		const form = await superValidate(event, channelSchema);
		const { id, name, avatarUrl } = form.data;

		if (!form.valid) {
			return fail(400, { form });
		}

		try {
			const channel = await prisma.channel.update({
				where: { id: event.params.slug },
				data: {
					id,
					name,
					avatarUrl
				}
			});
		} catch (error) {
			return fail(500);
		}

		throw redirect(303, '/admin/channels');
	}
};
