-- CreateTable
CREATE TABLE "proceso_dignidad" (
    "id" SERIAL NOT NULL,
    "proceso_electoral_id" INTEGER NOT NULL,
    "dignidad_id" INTEGER NOT NULL,
    "tipo_dignidad_id" INTEGER NOT NULL,
    "estado" TEXT NOT NULL,
    "fecha_ingreso" TIMESTAMP(3) NOT NULL,
    "fecha_modificacion" TIMESTAMP(3) NOT NULL,
    "observacion" TEXT,
    "usuario_ingreso" INTEGER NOT NULL,
    "usuario_modificacion" INTEGER NOT NULL,

    CONSTRAINT "proceso_dignidad_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "proceso_dignidad" ADD CONSTRAINT "proceso_dignidad_proceso_electoral_id_fkey" FOREIGN KEY ("proceso_electoral_id") REFERENCES "proceso_electoral"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "proceso_dignidad" ADD CONSTRAINT "proceso_dignidad_dignidad_id_fkey" FOREIGN KEY ("dignidad_id") REFERENCES "dignidad"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "proceso_dignidad" ADD CONSTRAINT "proceso_dignidad_tipo_dignidad_id_fkey" FOREIGN KEY ("tipo_dignidad_id") REFERENCES "tipo_dignidad"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
