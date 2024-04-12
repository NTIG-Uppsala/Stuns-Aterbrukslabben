import { db } from "@/lib/db";

export default async function findSoonExpiringPosts() {
  const now = new Date();
  const today = new Date(now.setHours(0, 0, 0, 0));
  const tomorrow = new Date(today.getTime() + 24 * 60 * 60 * 1000); // 1 day from now at 00:00
  const inSevenDays = new Date(today.getTime() + 24 * 60 * 60 * 1000 * 7); // 7 days from now at 00:00
  const inEightDays = new Date(today.getTime() + 24 * 60 * 60 * 1000 * 8); // 8 days from now at 00:00

  const posts = await db.post.findMany({
    where: {
      expiresAt: {
        // Finds posts that expire whitin a week. (Before the 8th day att 00:00)
        lte: inEightDays,
      },
    },
  });

  function dateToEpoch(date: Date) {
    return date.setHours(0, 0, 0, 0);
  }

  const postsExpiringInOneWeek = posts.filter((post) => {
    return dateToEpoch(post.expiresAt) === dateToEpoch(inSevenDays);
  });
  const postsExpiringTomorrow = posts.filter((post) => {
    return dateToEpoch(post.expiresAt) === dateToEpoch(tomorrow);
  });
  const postsExpiringToday = posts.filter((post) => {
    return dateToEpoch(post.expiresAt) <= dateToEpoch(today);
  });

  return {
    postsExpiringInOneWeek,
    postsExpiringTomorrow,
    postsExpiringToday,
  };
}
