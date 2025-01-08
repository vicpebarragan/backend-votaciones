-- CreateTable
CREATE TABLE "pregunta_consulta_popular" (
    "id" SERIAL NOT NULL,
    "pregunta" TEXT NOT NULL,
    "estado" TEXT NOT NULL,
    "fecha_ingreso" TIMESTAMP(3) NOT NULL,
    "fecha_modificacion" TIMESTAMP(3) NOT NULL,
    "observacion" TEXT,
    "usuario_ingreso" INTEGER NOT NULL,
    "usuario_modificacion" INTEGER NOT NULL,

    CONSTRAINT "pregunta_consulta_popular_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "detalle_acta_consulta" (
    "id" SERIAL NOT NULL,
    "acta_id" INTEGER NOT NULL,
    "pregunta_id" INTEGER NOT NULL,
    "total_si" INTEGER NOT NULL,
    "total_no" INTEGER NOT NULL,
    "estado" TEXT NOT NULL,
    "fecha_ingreso" TIMESTAMP(3) NOT NULL,
    "fecha_modificacion" TIMESTAMP(3) NOT NULL,
    "observacion" TEXT,
    "usuario_ingreso" INTEGER NOT NULL,
    "usuario_modificacion" INTEGER NOT NULL,

    CONSTRAINT "detalle_acta_consulta_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "detalle_acta_consulta_pregunta_id_key" ON "detalle_acta_consulta"("pregunta_id");

-- AddForeignKey
ALTER TABLE "rbu_opcion_lista" ADD CONSTRAINT "rbu_opcion_lista_lista_id_fkey" FOREIGN KEY ("lista_id") REFERENCES "partido_politico"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "rbu_opcion_consulta" ADD CONSTRAINT "rbu_opcion_consulta_pregunta_id_fkey" FOREIGN KEY ("pregunta_id") REFERENCES "pregunta_consulta_popular"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "detalle_acta_consulta" ADD CONSTRAINT "detalle_acta_consulta_acta_id_fkey" FOREIGN KEY ("acta_id") REFERENCES "acta"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "detalle_acta_consulta" ADD CONSTRAINT "detalle_acta_consulta_pregunta_id_fkey" FOREIGN KEY ("pregunta_id") REFERENCES "pregunta_consulta_popular"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
