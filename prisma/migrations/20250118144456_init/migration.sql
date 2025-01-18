-- CreateTable
CREATE TABLE "juntaUsuario" (
    "id" SERIAL NOT NULL,
    "junta_id" INTEGER NOT NULL,
    "usuario_id" INTEGER NOT NULL,
    "estado" TEXT NOT NULL,
    "fecha_ingreso" TIMESTAMP(3) NOT NULL,
    "fecha_modificacion" TIMESTAMP(3) NOT NULL,
    "observacion" TEXT,
    "usuario_ingreso" INTEGER NOT NULL,
    "usuario_modificacion" INTEGER NOT NULL,

    CONSTRAINT "juntaUsuario_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "juntaUsuario" ADD CONSTRAINT "juntaUsuario_junta_id_fkey" FOREIGN KEY ("junta_id") REFERENCES "Junta"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "juntaUsuario" ADD CONSTRAINT "juntaUsuario_usuario_id_fkey" FOREIGN KEY ("usuario_id") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
