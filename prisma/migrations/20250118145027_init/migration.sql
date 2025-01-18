/*
  Warnings:

  - You are about to drop the `juntaUsuario` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "juntaUsuario" DROP CONSTRAINT "juntaUsuario_junta_id_fkey";

-- DropForeignKey
ALTER TABLE "juntaUsuario" DROP CONSTRAINT "juntaUsuario_usuario_id_fkey";

-- DropTable
DROP TABLE "juntaUsuario";

-- CreateTable
CREATE TABLE "junta_usuario" (
    "id" SERIAL NOT NULL,
    "junta_id" INTEGER NOT NULL,
    "usuario_id" INTEGER NOT NULL,
    "estado" TEXT NOT NULL,
    "fecha_ingreso" TIMESTAMP(3) NOT NULL,
    "fecha_modificacion" TIMESTAMP(3) NOT NULL,
    "observacion" TEXT,
    "usuario_ingreso" INTEGER NOT NULL,
    "usuario_modificacion" INTEGER NOT NULL,

    CONSTRAINT "junta_usuario_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "junta_usuario" ADD CONSTRAINT "junta_usuario_junta_id_fkey" FOREIGN KEY ("junta_id") REFERENCES "Junta"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "junta_usuario" ADD CONSTRAINT "junta_usuario_usuario_id_fkey" FOREIGN KEY ("usuario_id") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
