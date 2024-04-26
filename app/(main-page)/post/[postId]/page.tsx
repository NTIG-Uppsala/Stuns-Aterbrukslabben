import Link from "next/link";

import { checkRole } from "@/utils/check-role";
import DeleteOwnPostButton from "../_components/delete-own-post-button";
import getNameAndEmailFromUserId from "@/utils/get-name-and-email-from-user-id";
import { getUserId } from "@/utils/get-user-id";

import getPostData from "../../utils/get-post-data";
import getUserRoleFromUserId from "../../utils/get-user-role-from-user-id";
import PostComponent from "../_components/post-component";
import PostModerationActions from "../_components/post-moderation-actions";

interface PostIdPageProps {
  params: {
    postId: string;
  };
}

export default async function PostIdPage({ params }: PostIdPageProps) {
  const postData = await getPostData(Number(params.postId));
  const userId = getUserId();

  if (postData) {
    const { firstName, lastName, email } = await getNameAndEmailFromUserId({
      userId: postData.userId,
    });
    const postUserRole = await getUserRoleFromUserId({
      userId: postData.userId,
    });
    const fullName = firstName + " " + lastName;

    const deleteButton =
      userId === postData.userId ? (
        <DeleteOwnPostButton postData={postData} redirectPath="/" />
      ) : checkRole("admin") || checkRole("moderator") ? (
        <PostModerationActions
          postData={postData}
          postUserRole={postUserRole}
        />
      ) : undefined;

    return (
      <div className="md:max-w-screen-md max-w-[360px] mt-5 mx-auto">
        <PostComponent
          postData={postData}
          email={email}
          fullName={fullName}
          deleteButton={deleteButton}
        />
      </div>
    );
  } else {
    return (
      <div className="flex w-full h-[52vh] items-end justify-center text-center">
        <div className="flex flex-col max-w-screen-sm gap-y-2 px-3">
          <h1 className="text-xl font-medium">
            Oj då, ingen annons hittades...
          </h1>
          <p className="text-pretty">
            Denna annons verkar inte finnas. Om du tror att annonsen bör finnas
            kontrollera då URL:en. Om du precis skapat annonsen kan det ta en
            liten stund för den att dyka upp.
          </p>
          <Link className="text-blue-600 hover:underline pt-1 text-lg" href="/">
            Till startsidan
          </Link>
        </div>
      </div>
    );
  }
}
