import prisma from '$lib/prisma';

export const load = () => {
	const tags = prisma.tag.findMany();

	return { tags };
};
