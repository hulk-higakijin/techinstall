import prisma from '$lib/prisma';

const getHigakijin = async () => {
	const higakijin = await prisma.authUser.findFirst({ where: { username: 'higakijin' } });

	if (higakijin) {
		await prisma.authUser.update({ where: { id: higakijin.id }, data: { isAdmin: true } });
	} else {
		console.log('higakijin is not found');
	}
};

getHigakijin();
