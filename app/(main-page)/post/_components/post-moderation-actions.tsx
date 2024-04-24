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
    <div className="flex justify-end md:text-base text-sm gap-x-3">
      <p className="font-semibold">{roleText}</p>
      <DeletePostButton postData={postData} redirectPath="/" />
    </div>
  );
}
