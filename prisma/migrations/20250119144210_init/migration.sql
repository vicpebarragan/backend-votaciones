/*
  Warnings:

  - Added the required column `partido_id` to the `proceso_dignidad` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "proceso_dignidad" ADD COLUMN     "partido_id" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "proceso_dignidad" ADD CONSTRAINT "proceso_dignidad_partido_id_fkey" FOREIGN KEY ("partido_id") REFERENCES "partido_politico"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
