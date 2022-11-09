/*
  Warnings:

  - You are about to drop the `Pic` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Pic";

-- CreateTable
CREATE TABLE "pics" (
    "id" STRING NOT NULL,
    "pic_url" STRING NOT NULL,
    "title" STRING NOT NULL,
    "description" STRING NOT NULL,

    CONSTRAINT "pics_pkey" PRIMARY KEY ("id")
);
