import prisma from '$lib/prisma';
import { redirect, type Actions, type ServerLoadEvent } from '@sveltejs/kit';

export const load = async (params: ServerLoadEvent) => {
	const { user } = await params.locals.auth.validateUser();
	if (!user || !user.isAdmin) throw redirect(302, '/login');

	const youtubes = await prisma.youtube.findMany({ include: { channel: true } });

	return { youtubes };
};

export const actions: Actions = {
	delete: async (event) => {
		const slug = event.url.searchParams.get('slug')!;

		await prisma.youtube.delete({ where: { id: slug } });
		throw redirect(303, '/admin/youtubes');
	}
};
