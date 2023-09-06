import prisma from "$lib/prisma"

export const load = () => {
  const youtubes = prisma.youtube.findMany()
 
  return { youtubes }
}
