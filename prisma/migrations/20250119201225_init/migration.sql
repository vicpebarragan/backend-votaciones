/*
  Warnings:

  - You are about to drop the column `dignidad_id` on the `proceso_dignidad` table. All the data in the column will be lost.
  - Added the required column `nombre` to the `proceso_dignidad` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "proceso_dignidad" DROP CONSTRAINT "proceso_dignidad_dignidad_id_fkey";

-- AlterTable
ALTER TABLE "proceso_dignidad" DROP COLUMN "dignidad_id",
ADD COLUMN     "nombre" TEXT NOT NULL;
