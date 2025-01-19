/*
  Warnings:

  - Added the required column `vigente` to the `proceso_electoral` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "proceso_electoral" ADD COLUMN     "vigente" BOOLEAN NOT NULL;
