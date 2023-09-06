import prisma from "$lib/prisma"
import { redirect } from "@sveltejs/kit";

export const load = async ({ locals }) => {
	const { user } = await locals.auth.validateUser();
	if (!user || !user.isAdmin) throw redirect(302, '/login');

  const youtubes = await prisma.youtube.findMany()
  
  return { youtubes }
}
