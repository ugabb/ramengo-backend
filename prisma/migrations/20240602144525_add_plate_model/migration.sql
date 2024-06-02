/*
  Warnings:

  - You are about to drop the column `brothId` on the `Order` table. All the data in the column will be lost.
  - You are about to drop the column `proteinId` on the `Order` table. All the data in the column will be lost.

*/
-- CreateTable
CREATE TABLE "Plate" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "iamge" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "brothId" INTEGER NOT NULL,
    "proteinId" INTEGER NOT NULL,
    CONSTRAINT "Plate_brothId_fkey" FOREIGN KEY ("brothId") REFERENCES "Broth" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Plate_proteinId_fkey" FOREIGN KEY ("proteinId") REFERENCES "Protein" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Order" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "description" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "plateId" INTEGER,
    CONSTRAINT "Order_plateId_fkey" FOREIGN KEY ("plateId") REFERENCES "Plate" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Order" ("description", "id", "image") SELECT "description", "id", "image" FROM "Order";
DROP TABLE "Order";
ALTER TABLE "new_Order" RENAME TO "Order";
PRAGMA foreign_key_check("Order");
PRAGMA foreign_keys=ON;
