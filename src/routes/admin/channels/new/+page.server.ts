import prisma from '$lib/prisma';
import { channelSchema } from '$lib/schemas/channelSchema';
import { fail, type Actions, redirect } from '@sveltejs/kit';
import { superValidate } from 'sveltekit-superforms/server';

export const load = async () => {
	const form = await superValidate(channelSchema);
	return { form };
};

export const actions: Actions = {
	default: async (event) => {
		const form = await superValidate(event, channelSchema);
		const { id, name, avatarUrl } = form.data;

    if (!form.valid) {
      return fail(400, { form });
    }

    try {
      const channel = await prisma.channel.create({
        data: {
          id,
          name,
          avatarUrl
        }
      });
    } catch(error) {
      return fail(500);
    }

    throw redirect(303, '/admin/channels');
	}
};
