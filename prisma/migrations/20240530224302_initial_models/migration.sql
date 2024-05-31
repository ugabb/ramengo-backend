-- CreateTable
CREATE TABLE "Order" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "description" TEXT NOT NULL,
    "imageInactive" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Broth" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "imageInactive" TEXT NOT NULL,
    "imageActive" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "price" REAL NOT NULL
);

-- CreateTable
CREATE TABLE "Protein" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "imageInactive" TEXT NOT NULL,
    "imageActive" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "price" REAL NOT NULL
);
