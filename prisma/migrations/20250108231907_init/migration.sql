-- CreateTable
CREATE TABLE "noticia" (
    "id" SERIAL NOT NULL,
    "partido_id" INTEGER NOT NULL,
    "imagen_url" TEXT NOT NULL,
    "cuerpo" TEXT NOT NULL,
    "estado" TEXT NOT NULL,
    "fecha_ingreso" TIMESTAMP(3) NOT NULL,
    "fecha_modificacion" TIMESTAMP(3) NOT NULL,
    "observacion" TEXT,
    "usuario_ingreso" INTEGER NOT NULL,
    "usuario_modificacion" INTEGER NOT NULL,

    CONSTRAINT "noticia_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "evento" (
    "id" SERIAL NOT NULL,
    "partido_id" INTEGER NOT NULL,
    "fecha_inicio" TIMESTAMP(3) NOT NULL,
    "fecha_fin" TIMESTAMP(3) NOT NULL,
    "hora_inicio" TIMESTAMP(3) NOT NULL,
    "hora_fin" TIMESTAMP(3) NOT NULL,
    "descripcion" TEXT NOT NULL,
    "imagen_url" TEXT NOT NULL,
    "ubicacion_url" TEXT NOT NULL,
    "estado" TEXT NOT NULL,
    "fecha_ingreso" TIMESTAMP(3) NOT NULL,
    "fecha_modificacion" TIMESTAMP(3) NOT NULL,
    "observacion" TEXT,
    "usuario_ingreso" INTEGER NOT NULL,
    "usuario_modificacion" INTEGER NOT NULL,

    CONSTRAINT "evento_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "detalle_acta" (
    "id" SERIAL NOT NULL,
    "acta_id" INTEGER NOT NULL,
    "dignidad_id" INTEGER NOT NULL,
    "partido_politico_id" INTEGER NOT NULL,
    "total_votos" INTEGER NOT NULL,
    "estado" TEXT NOT NULL,
    "fecha_ingreso" TIMESTAMP(3) NOT NULL,
    "fecha_modificacion" TIMESTAMP(3) NOT NULL,
    "observacion" TEXT,
    "usuario_ingreso" INTEGER NOT NULL,
    "usuario_modificacion" INTEGER NOT NULL,

    CONSTRAINT "detalle_acta_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "noticia" ADD CONSTRAINT "noticia_partido_id_fkey" FOREIGN KEY ("partido_id") REFERENCES "partido_politico"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "evento" ADD CONSTRAINT "evento_partido_id_fkey" FOREIGN KEY ("partido_id") REFERENCES "partido_politico"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "detalle_acta" ADD CONSTRAINT "detalle_acta_acta_id_fkey" FOREIGN KEY ("acta_id") REFERENCES "acta"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "detalle_acta" ADD CONSTRAINT "detalle_acta_dignidad_id_fkey" FOREIGN KEY ("dignidad_id") REFERENCES "dignidad"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "detalle_acta" ADD CONSTRAINT "detalle_acta_partido_politico_id_fkey" FOREIGN KEY ("partido_politico_id") REFERENCES "partido_politico"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
