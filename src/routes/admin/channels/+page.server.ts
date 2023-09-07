import prisma from "$lib/prisma"
import { redirect, type Actions } from "@sveltejs/kit"

export const load = async () => {
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
