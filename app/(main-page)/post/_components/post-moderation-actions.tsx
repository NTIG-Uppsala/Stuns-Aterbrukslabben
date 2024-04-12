import { checkRole } from "@/utils/check-role";
import DeletePostButton from "@/components/delete-post-button";

interface PostModerationActionsProps {
  postEmail: string;
  postId: number;
  postTitle: string;
  postUserRole: string;
}

export default function PostModerationActions({
  postEmail,
  postId,
  postTitle,
  postUserRole,
}: PostModerationActionsProps) {
  if (checkRole("admin") || checkRole("moderator")) {
    const roleText = ["medlem", "admin", "moderator"].includes(postUserRole)
      ? `${postUserRole.charAt(0).toUpperCase() + postUserRole.slice(1)}`
      : `Okänd roll: ${
          postUserRole.charAt(0).toUpperCase() + postUserRole.slice(1)
        }`;

    return (
      <div className="w-full justify-end bg-secondary md:py-4 py-3 md:px-8 px-5 flex md:text-base text-sm gap-x-3 rounded-b-lg">
        <p className="font-semibold">{roleText}</p>
        <DeletePostButton
          postEmail={postEmail}
          postId={postId}
          postTitle={postTitle}
          redirectPath="/"
        />
      </div>
    );
  } else {
    return;
  }
}
