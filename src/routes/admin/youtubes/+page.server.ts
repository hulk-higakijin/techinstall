import prisma from '$lib/prisma';
import { redirect, type Actions } from '@sveltejs/kit';

export const load = async ({ locals }) => {
	const { user } = await locals.auth.validateUser();
	if (!user || !user.isAdmin) throw redirect(302, '/login');

	const youtubes = await prisma.youtube.findMany();

	return { youtubes };
};

export const actions: Actions = {
	delete: async (event) => {
		const slug = event.url.searchParams.get('slug')!;

		await prisma.youtube.delete({ where: { id: slug } });
		throw redirect(303, '/admin/youtubes');
	}
};
