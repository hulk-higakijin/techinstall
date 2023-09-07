/*
  Warnings:

  - Added the required column `channelId` to the `Youtube` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Youtube" ADD COLUMN     "channelId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Youtube" ADD CONSTRAINT "Youtube_channelId_fkey" FOREIGN KEY ("channelId") REFERENCES "Channel"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
