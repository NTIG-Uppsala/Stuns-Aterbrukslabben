/*
  Warnings:

  - You are about to drop the `ArchivedPost` table. If the table is not empty, all the data it contains will be lost.

*/
-- AlterTable
ALTER TABLE "Post" ALTER COLUMN "expiresAt" SET DEFAULT NOW() + interval '6 months';

-- DropTable
DROP TABLE "ArchivedPost";

-- CreateTable
CREATE TABLE "ArchivedPosts" (
    "id" SERIAL NOT NULL,
    "title" VARCHAR(40) NOT NULL,
    "description" TEXT,
    "postType" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL,
    "hasCustomExpirationDate" BOOLEAN NOT NULL,
    "archivedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deletionReason" TEXT NOT NULL,

    CONSTRAINT "ArchivedPosts_pkey" PRIMARY KEY ("id")
);
