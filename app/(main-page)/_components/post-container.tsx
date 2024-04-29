"use client";

import type { Post } from "@prisma/client";

import PostCard from "./post-card";

interface PostContainerProps {
  posts?: Post[];
}

export default function PostContainer({ posts }: PostContainerProps) {
  const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  return (
    <div className="flex flex-col md:gap-y-3 gap-y-2 md:mt-6 mt-4">
      {posts && posts.length > 0 ? (
        posts.map((post) => {
          return <PostCard key={post.id} postData={post} timezone={timezone} />;
        })
      ) : (
        <div className="flex justify-center md:mt-12 mt-8">
          <p className="text-center bg-secondary md:text-xl text-md md:w-1/3 w-3/5 md:p-4 py-3 rounded-lg">
            Inga annonser hittades
          </p>
        </div>
      )}
    </div>
  );
}
