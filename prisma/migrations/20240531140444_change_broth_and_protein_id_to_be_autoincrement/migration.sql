/*
  Warnings:

  - The primary key for the `Broth` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `Broth` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.
  - The primary key for the `Order` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `Order` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.
  - The primary key for the `Protein` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `Protein` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Broth" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "imageInactive" TEXT NOT NULL,
    "imageActive" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "price" REAL NOT NULL
);
INSERT INTO "new_Broth" ("description", "id", "imageActive", "imageInactive", "name", "price") SELECT "description", "id", "imageActive", "imageInactive", "name", "price" FROM "Broth";
DROP TABLE "Broth";
ALTER TABLE "new_Broth" RENAME TO "Broth";
CREATE TABLE "new_Order" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "description" TEXT NOT NULL,
    "imageInactive" TEXT NOT NULL
);
INSERT INTO "new_Order" ("description", "id", "imageInactive") SELECT "description", "id", "imageInactive" FROM "Order";
DROP TABLE "Order";
ALTER TABLE "new_Order" RENAME TO "Order";
CREATE TABLE "new_Protein" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "imageInactive" TEXT NOT NULL,
    "imageActive" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "price" REAL NOT NULL
);
INSERT INTO "new_Protein" ("description", "id", "imageActive", "imageInactive", "name", "price") SELECT "description", "id", "imageActive", "imageInactive", "name", "price" FROM "Protein";
DROP TABLE "Protein";
ALTER TABLE "new_Protein" RENAME TO "Protein";
PRAGMA foreign_key_check("Broth");
PRAGMA foreign_key_check("Order");
PRAGMA foreign_key_check("Protein");
PRAGMA foreign_keys=ON;
