-- AlterTable
ALTER TABLE "Post" ALTER COLUMN "expiresAt" SET DEFAULT NOW() + interval '6 months';
