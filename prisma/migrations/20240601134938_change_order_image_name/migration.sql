/*
  Warnings:

  - You are about to drop the column `imageInactive` on the `Order` table. All the data in the column will be lost.
  - Added the required column `image` to the `Order` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Order" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "description" TEXT NOT NULL,
    "image" TEXT NOT NULL
);
INSERT INTO "new_Order" ("description", "id") SELECT "description", "id" FROM "Order";
DROP TABLE "Order";
ALTER TABLE "new_Order" RENAME TO "Order";
PRAGMA foreign_key_check("Order");
PRAGMA foreign_keys=ON;
