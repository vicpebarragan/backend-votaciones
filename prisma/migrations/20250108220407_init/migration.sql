-- CreateTable
CREATE TABLE "rbu" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "descripcion" TEXT NOT NULL,
    "tipo_eleccion_id" INTEGER NOT NULL,
    "conteo_personas" INTEGER NOT NULL,
    "estado" TEXT NOT NULL,
    "fecha_ingreso" TIMESTAMP(3) NOT NULL,
    "fecha_modificacion" TIMESTAMP(3) NOT NULL,
    "observacion" TEXT,
    "usuario_ingreso" INTEGER NOT NULL,
    "usuario_modificacion" INTEGER NOT NULL,

    CONSTRAINT "rbu_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "rbu" ADD CONSTRAINT "rbu_tipo_eleccion_id_fkey" FOREIGN KEY ("tipo_eleccion_id") REFERENCES "tipo_eleccion"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
