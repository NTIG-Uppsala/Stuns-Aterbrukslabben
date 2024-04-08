-- AlterTable
ALTER TABLE "Post" ALTER COLUMN "expiresAt" SET DEFAULT NOW() + interval '6 months';

-- AddForeignKey
ALTER TABLE "SoonExpiringPosts" ADD CONSTRAINT "SoonExpiringPosts_postId_fkey" FOREIGN KEY ("postId") REFERENCES "Post"("id") ON DELETE CASCADE ON UPDATE CASCADE;
