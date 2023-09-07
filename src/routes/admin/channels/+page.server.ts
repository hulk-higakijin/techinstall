import prisma from "$lib/prisma"

export const load = async () => {
  const channels = await prisma.channel.findMany()

  return { channels }
}

