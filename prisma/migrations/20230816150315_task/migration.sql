-- CreateTable
CREATE TABLE "tasks" (
    "taskid" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "staffid" INTEGER NOT NULL,
    "clientname" TEXT NOT NULL,
    "categoryid" INTEGER NOT NULL,
    "location" TEXT NOT NULL,
    "visitcount" TEXT NOT NULL
);
