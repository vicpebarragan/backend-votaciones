-- CreateTable
CREATE TABLE "tipo_dignidad" (
    "id" SERIAL NOT NULL,
    "dignidad" TEXT NOT NULL,
    "estado" TEXT NOT NULL,
    "fecha_ingreso" TIMESTAMP(3) NOT NULL,
    "fecha_modificacion" TIMESTAMP(3) NOT NULL,
    "observacion" TEXT,
    "usuario_ingreso" INTEGER NOT NULL,
    "usuario_modificacion" INTEGER NOT NULL,

    CONSTRAINT "tipo_dignidad_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tipo_eleccion" (
    "id" SERIAL NOT NULL,
    "tipo" TEXT NOT NULL,
    "descripcion" TEXT NOT NULL,
    "estado" TEXT NOT NULL,
    "fecha_ingreso" TIMESTAMP(3) NOT NULL,
    "fecha_modificacion" TIMESTAMP(3) NOT NULL,
    "observacion" TEXT,
    "usuario_ingreso" INTEGER NOT NULL,
    "usuario_modificacion" INTEGER NOT NULL,

    CONSTRAINT "tipo_eleccion_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "acta" (
    "id" SERIAL NOT NULL,
    "junta_id" INTEGER NOT NULL,
    "delegado_id" INTEGER NOT NULL,
    "proceso_id" INTEGER NOT NULL,
    "tipo_id" INTEGER NOT NULL,
    "total_votantes" INTEGER NOT NULL,
    "votos_blancos" INTEGER NOT NULL,
    "votos_nulos" INTEGER NOT NULL,
    "total_firmas" INTEGER NOT NULL,
    "estado" TEXT NOT NULL,
    "fecha_ingreso" TIMESTAMP(3) NOT NULL,
    "fecha_modificacion" TIMESTAMP(3) NOT NULL,
    "observacion" TEXT,
    "usuario_ingreso" INTEGER NOT NULL,
    "usuario_modificacion" INTEGER NOT NULL,

    CONSTRAINT "acta_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "acta" ADD CONSTRAINT "acta_tipo_id_fkey" FOREIGN KEY ("tipo_id") REFERENCES "tipo_eleccion"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "acta" ADD CONSTRAINT "acta_junta_id_fkey" FOREIGN KEY ("junta_id") REFERENCES "Junta"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "acta" ADD CONSTRAINT "acta_proceso_id_fkey" FOREIGN KEY ("proceso_id") REFERENCES "proceso_electoral"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
