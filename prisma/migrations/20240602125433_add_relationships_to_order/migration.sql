/*
  Warnings:

  - Added the required column `brothId` to the `Order` table without a default value. This is not possible if the table is not empty.
  - Added the required column `proteinId` to the `Order` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Order" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "description" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "brothId" INTEGER NOT NULL,
    "proteinId" INTEGER NOT NULL,
    CONSTRAINT "Order_brothId_fkey" FOREIGN KEY ("brothId") REFERENCES "Broth" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Order_proteinId_fkey" FOREIGN KEY ("proteinId") REFERENCES "Protein" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Order" ("description", "id", "image") SELECT "description", "id", "image" FROM "Order";
DROP TABLE "Order";
ALTER TABLE "new_Order" RENAME TO "Order";
PRAGMA foreign_key_check("Order");
PRAGMA foreign_keys=ON;
