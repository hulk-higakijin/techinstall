import prisma from "$lib/prisma"
import { redirect, type Actions, type ServerLoadEvent } from "@sveltejs/kit"

export const load = async (params: ServerLoadEvent) => {
  const { user }  = await params.locals.auth.validateUser()
	if (!user || !user.isAdmin) throw redirect(302, '/login');

  const channels = await prisma.channel.findMany()

  return { channels }
}

export const actions: Actions = {
  delete: async (event) => {
    const slug = event.url.searchParams.get("slug")!

    await prisma.channel.delete({ where: { id: slug } })
    throw redirect(303, "/admin/channels")
  }
}
