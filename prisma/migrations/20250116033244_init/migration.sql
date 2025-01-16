-- CreateTable
CREATE TABLE "rol" (
    "id" SERIAL NOT NULL,
    "descripcion" TEXT NOT NULL,
    "estado" TEXT NOT NULL,
    "fecha_ingreso" TIMESTAMP(3) NOT NULL,
    "fecha_modificacion" TIMESTAMP(3) NOT NULL,
    "observacion" TEXT,
    "usuario_ingreso" INTEGER NOT NULL,
    "usuario_modificacion" INTEGER NOT NULL,

    CONSTRAINT "rol_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "responsabilidad" (
    "id" SERIAL NOT NULL,
    "descripcion" TEXT NOT NULL,
    "rol_id" INTEGER NOT NULL,
    "estado" TEXT NOT NULL,
    "fecha_ingreso" TIMESTAMP(3) NOT NULL,
    "fecha_modificacion" TIMESTAMP(3) NOT NULL,
    "observacion" TEXT,
    "usuario_ingreso" INTEGER NOT NULL,
    "usuario_modificacion" INTEGER NOT NULL,

    CONSTRAINT "responsabilidad_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Usuario" ADD CONSTRAINT "Usuario_rol_id_fkey" FOREIGN KEY ("rol_id") REFERENCES "rol"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "responsabilidad" ADD CONSTRAINT "responsabilidad_rol_id_fkey" FOREIGN KEY ("rol_id") REFERENCES "rol"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
