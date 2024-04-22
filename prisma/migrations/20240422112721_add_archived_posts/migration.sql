-- AlterTable
ALTER TABLE "Post" ALTER COLUMN "expiresAt" SET DEFAULT NOW() + interval '6 months';

-- CreateTable
CREATE TABLE "ArchivedPost" (
    "id" SERIAL NOT NULL,
    "title" VARCHAR(40) NOT NULL,
    "description" TEXT,
    "postType" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL,
    "hasCustomExpirationDate" BOOLEAN NOT NULL,
    "archivedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ArchivedPost_pkey" PRIMARY KEY ("id")
);
