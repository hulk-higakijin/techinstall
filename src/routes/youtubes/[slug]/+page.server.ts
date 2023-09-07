import prisma from '$lib/prisma';
import { error } from '@sveltejs/kit';

export const load = async ({ params }) => {
	const youtube = await prisma.youtube.findUnique({
		where: { id: params.slug },
		include: { channel: true }
	});

	const otherYoutubes = await prisma.youtube.findMany();

	if (!youtube) throw error(404);

	return { youtube, otherYoutubes };
};
