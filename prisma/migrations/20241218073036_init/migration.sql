/*
  Warnings:

  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "User";

-- CreateTable
CREATE TABLE "Provincia" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "estado" TEXT NOT NULL,
    "fecha_ingreso" TIMESTAMP(3) NOT NULL,
    "fecha_modificacion" TIMESTAMP(3) NOT NULL,
    "observacion" TEXT,
    "usuario_ingreso" INTEGER NOT NULL,
    "usuario_modificacion" INTEGER NOT NULL,

    CONSTRAINT "Provincia_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Circunscripcion" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "provincia_id" INTEGER NOT NULL,
    "estado" TEXT NOT NULL,
    "fecha_ingreso" TIMESTAMP(3) NOT NULL,
    "fecha_modificacion" TIMESTAMP(3) NOT NULL,
    "observacion" TEXT,
    "usuario_ingreso" INTEGER NOT NULL,
    "usuario_modificacion" INTEGER NOT NULL,

    CONSTRAINT "Circunscripcion_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Canton" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "circunscripcion_id" INTEGER NOT NULL,
    "provincia_id" INTEGER NOT NULL,
    "estado" TEXT NOT NULL,
    "fecha_ingreso" TIMESTAMP(3) NOT NULL,
    "fecha_modificacion" TIMESTAMP(3) NOT NULL,
    "observacion" TEXT,
    "usuario_ingreso" INTEGER NOT NULL,
    "usuario_modificacion" INTEGER NOT NULL,

    CONSTRAINT "Canton_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Parroquia" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "canton_id" INTEGER NOT NULL,
    "estado" TEXT NOT NULL,
    "fecha_ingreso" TIMESTAMP(3) NOT NULL,
    "fecha_modificacion" TIMESTAMP(3) NOT NULL,
    "observacion" TEXT,
    "usuario_ingreso" INTEGER NOT NULL,
    "usuario_modificacion" INTEGER NOT NULL,

    CONSTRAINT "Parroquia_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Recinto_Electoral" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "parroquia_id" INTEGER NOT NULL,
    "estado" TEXT NOT NULL,
    "fecha_ingreso" TIMESTAMP(3) NOT NULL,
    "fecha_modificacion" TIMESTAMP(3) NOT NULL,
    "observacion" TEXT,
    "usuario_ingreso" INTEGER NOT NULL,
    "usuario_modificacion" INTEGER NOT NULL,

    CONSTRAINT "Recinto_Electoral_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Junta" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "recinto_id" INTEGER NOT NULL,
    "estado" TEXT NOT NULL,
    "fecha_ingreso" TIMESTAMP(3) NOT NULL,
    "fecha_modificacion" TIMESTAMP(3) NOT NULL,
    "observacion" TEXT,
    "usuario_ingreso" INTEGER NOT NULL,
    "usuario_modificacion" INTEGER NOT NULL,

    CONSTRAINT "Junta_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "partido_politico" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "vigente" BOOLEAN NOT NULL,
    "estado" TEXT NOT NULL,
    "fecha_ingreso" TIMESTAMP(3) NOT NULL,
    "fecha_modificacion" TIMESTAMP(3) NOT NULL,
    "observacion" TEXT,
    "usuario_ingreso" INTEGER NOT NULL,
    "usuario_modificacion" INTEGER NOT NULL,

    CONSTRAINT "partido_politico_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Usuario" (
    "id" SERIAL NOT NULL,
    "identificacion" TEXT NOT NULL,
    "rol_id" INTEGER NOT NULL,
    "nombres" TEXT NOT NULL,
    "apellidos" TEXT NOT NULL,
    "partido_id" INTEGER NOT NULL,
    "genero" TEXT NOT NULL,
    "direccion" TEXT,
    "telefono" TEXT,
    "telefono_aux" TEXT,
    "correo_electronico" TEXT NOT NULL,
    "canton_id" INTEGER NOT NULL,
    "parroquia_id" INTEGER NOT NULL,
    "recinto_id" INTEGER NOT NULL,
    "estado" TEXT NOT NULL,
    "fecha_ingreso" TIMESTAMP(3) NOT NULL,
    "fecha_modificacion" TIMESTAMP(3) NOT NULL,
    "observacion" TEXT,
    "usuario_ingreso" INTEGER NOT NULL,
    "usuario_modificacion" INTEGER NOT NULL,

    CONSTRAINT "Usuario_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Circunscripcion" ADD CONSTRAINT "Circunscripcion_provincia_id_fkey" FOREIGN KEY ("provincia_id") REFERENCES "Provincia"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Canton" ADD CONSTRAINT "Canton_circunscripcion_id_fkey" FOREIGN KEY ("circunscripcion_id") REFERENCES "Circunscripcion"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Parroquia" ADD CONSTRAINT "Parroquia_canton_id_fkey" FOREIGN KEY ("canton_id") REFERENCES "Canton"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Recinto_Electoral" ADD CONSTRAINT "Recinto_Electoral_parroquia_id_fkey" FOREIGN KEY ("parroquia_id") REFERENCES "Parroquia"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Junta" ADD CONSTRAINT "Junta_recinto_id_fkey" FOREIGN KEY ("recinto_id") REFERENCES "Recinto_Electoral"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Usuario" ADD CONSTRAINT "Usuario_partido_id_fkey" FOREIGN KEY ("partido_id") REFERENCES "partido_politico"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
