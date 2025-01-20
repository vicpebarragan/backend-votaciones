/*
  Warnings:

  - You are about to drop the column `apellidos` on the `dignidad` table. All the data in the column will be lost.
  - You are about to drop the column `nombres` on the `dignidad` table. All the data in the column will be lost.
  - You are about to drop the column `nombre` on the `proceso_dignidad` table. All the data in the column will be lost.
  - Added the required column `nombre` to the `dignidad` table without a default value. This is not possible if the table is not empty.
  - Added the required column `dignidad_id` to the `proceso_dignidad` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "dignidad" DROP COLUMN "apellidos",
DROP COLUMN "nombres",
ADD COLUMN     "nombre" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "proceso_dignidad" DROP COLUMN "nombre",
ADD COLUMN     "dignidad_id" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "proceso_dignidad" ADD CONSTRAINT "proceso_dignidad_dignidad_id_fkey" FOREIGN KEY ("dignidad_id") REFERENCES "dignidad"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
