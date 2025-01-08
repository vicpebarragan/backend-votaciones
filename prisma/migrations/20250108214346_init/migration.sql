-- CreateTable
CREATE TABLE "mensaje" (
    "id" SERIAL NOT NULL,
    "usuario_envia_id" INTEGER NOT NULL,
    "chat_id" INTEGER NOT NULL,
    "mensaje" TEXT NOT NULL,
    "estado" TEXT NOT NULL,
    "fecha_ingreso" TIMESTAMP(3) NOT NULL,
    "fecha_modificacion" TIMESTAMP(3) NOT NULL,
    "observacion" TEXT,
    "usuario_ingreso" INTEGER NOT NULL,
    "usuario_modificacion" INTEGER NOT NULL,

    CONSTRAINT "mensaje_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "mensaje" ADD CONSTRAINT "mensaje_chat_id_fkey" FOREIGN KEY ("chat_id") REFERENCES "chat"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "mensaje" ADD CONSTRAINT "mensaje_usuario_envia_id_fkey" FOREIGN KEY ("usuario_envia_id") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
