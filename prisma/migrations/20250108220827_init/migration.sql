-- CreateTable
CREATE TABLE "rbu_opcion_lista" (
    "id" SERIAL NOT NULL,
    "rbu_id" INTEGER NOT NULL,
    "lista_id" INTEGER NOT NULL,
    "conteo" INTEGER NOT NULL,
    "estado" TEXT NOT NULL,
    "fecha_ingreso" TIMESTAMP(3) NOT NULL,
    "fecha_modificacion" TIMESTAMP(3) NOT NULL,
    "observacion" TEXT,
    "usuario_ingreso" INTEGER NOT NULL,
    "usuario_modificacion" INTEGER NOT NULL,

    CONSTRAINT "rbu_opcion_lista_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "rbu_opcion_dignidad" (
    "id" SERIAL NOT NULL,
    "rbu_id" INTEGER NOT NULL,
    "dignidad_id" INTEGER NOT NULL,
    "conteo" INTEGER NOT NULL,
    "estado" TEXT NOT NULL,
    "fecha_ingreso" TIMESTAMP(3) NOT NULL,
    "fecha_modificacion" TIMESTAMP(3) NOT NULL,
    "observacion" TEXT,
    "usuario_ingreso" INTEGER NOT NULL,
    "usuario_modificacion" INTEGER NOT NULL,

    CONSTRAINT "rbu_opcion_dignidad_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "rbu_opcion_consulta" (
    "id" SERIAL NOT NULL,
    "rbu_id" INTEGER NOT NULL,
    "pregunta_id" INTEGER NOT NULL,
    "conteo" INTEGER NOT NULL,
    "estado" TEXT NOT NULL,
    "fecha_ingreso" TIMESTAMP(3) NOT NULL,
    "fecha_modificacion" TIMESTAMP(3) NOT NULL,
    "observacion" TEXT,
    "usuario_ingreso" INTEGER NOT NULL,
    "usuario_modificacion" INTEGER NOT NULL,

    CONSTRAINT "rbu_opcion_consulta_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "rbu_opcion_lista" ADD CONSTRAINT "rbu_opcion_lista_rbu_id_fkey" FOREIGN KEY ("rbu_id") REFERENCES "rbu"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "rbu_opcion_dignidad" ADD CONSTRAINT "rbu_opcion_dignidad_rbu_id_fkey" FOREIGN KEY ("rbu_id") REFERENCES "rbu"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "rbu_opcion_consulta" ADD CONSTRAINT "rbu_opcion_consulta_rbu_id_fkey" FOREIGN KEY ("rbu_id") REFERENCES "rbu"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
