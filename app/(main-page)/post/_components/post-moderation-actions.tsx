import DeletePostButton from "@/components/delete-post-button";
import type { Post } from "@prisma/client";

interface PostModerationActionsProps {
  postData: Post;
  postUserRole: string;
}

export default function PostModerationActions({
  postData,
  postUserRole,
}: PostModerationActionsProps) {
  const roleText = ["medlem", "admin", "moderator"].includes(postUserRole)
    ? `${postUserRole.charAt(0).toUpperCase() + postUserRole.slice(1)}`
    : `Okänd roll: ${
        postUserRole.charAt(0).toUpperCase() + postUserRole.slice(1)
      }`;

  return (
    <div className="w-full justify-end bg-secondary md:py-4 py-3 md:px-8 px-5 flex md:text-base text-sm gap-x-3 rounded-b-2xl">
      <p className="font-semibold">{roleText}</p>
      <DeletePostButton postData={postData} redirectPath="/" />
    </div>
  );
}
