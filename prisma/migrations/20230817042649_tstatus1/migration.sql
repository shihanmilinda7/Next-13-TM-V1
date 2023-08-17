/*
  Warnings:

  - Added the required column `status` to the `tasks` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_tasks" (
    "taskid" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "staffid" TEXT NOT NULL,
    "clientname" TEXT NOT NULL,
    "categoryid" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "visitcount" TEXT NOT NULL,
    "status" TEXT NOT NULL
);
INSERT INTO "new_tasks" ("categoryid", "clientname", "location", "staffid", "taskid", "visitcount") SELECT "categoryid", "clientname", "location", "staffid", "taskid", "visitcount" FROM "tasks";
DROP TABLE "tasks";
ALTER TABLE "new_tasks" RENAME TO "tasks";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
