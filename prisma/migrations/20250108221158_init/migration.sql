-- CreateTable
CREATE TABLE "dignidad" (
    "id" SERIAL NOT NULL,
    "nombres" TEXT NOT NULL,
    "apellidos" TEXT NOT NULL,
    "identificacion" TEXT NOT NULL,
    "estado" TEXT NOT NULL,
    "fecha_ingreso" TIMESTAMP(3) NOT NULL,
    "fecha_modificacion" TIMESTAMP(3) NOT NULL,
    "observacion" TEXT,
    "usuario_ingreso" INTEGER NOT NULL,
    "usuario_modificacion" INTEGER NOT NULL,

    CONSTRAINT "dignidad_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "rbu_opcion_dignidad" ADD CONSTRAINT "rbu_opcion_dignidad_dignidad_id_fkey" FOREIGN KEY ("dignidad_id") REFERENCES "dignidad"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
