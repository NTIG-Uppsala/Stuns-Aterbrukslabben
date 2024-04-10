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
      <div className="w-fit bg-secondary py-2 px-10 flex md:text-base text-sm gap-x-3 rounded-b-md">
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
