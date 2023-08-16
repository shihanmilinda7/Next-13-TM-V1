-- CreateTable
CREATE TABLE "categories" (
    "categoryid" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "categoryname" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "categorydetails" (
    "categorydetailid" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "categoryid" INTEGER NOT NULL,
    "categorydetailname" TEXT NOT NULL
);
