import Link from "next/link";

import getNameAndEmailFromUserId from "@/utils/get-name-and-email-from-user-id";

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
  const post = await getPostData(Number(params.postId));

  if (post) {
    const { firstName, lastName, email } = await getNameAndEmailFromUserId({
      userId: post.userId,
    });
    const postUserRole = await getUserRoleFromUserId({ userId: post.userId });
    const fullName = firstName + " " + lastName;
    return (
      <div className="md:max-w-screen-md max-w-[360px] mt-5 mx-auto">
        <PostComponent post={post} email={email} fullName={fullName} />
        <div className="w-full flex justify-end md:mt-[-24px] mt-[-16px]">
          <PostModerationActions
            postId={post.id}
            postEmail={email}
            postTitle={post.title}
            postUserRole={postUserRole}
          />
        </div>
      </div>
    );
  } else {
    return (
      <div className="flex w-full h-[52vh] items-end justify-center text-center">
        <div className="flex flex-col max-w-screen-sm gap-y-2 px-3">
          <h1 className="text-xl font-medium">
            Oj då, inget inlägg hittades...
          </h1>
          <p className="text-pretty">
            Detta inlägg verkar inte finnas. Om du tror att inlägget bör finnas
            kontrollera då URL:en. Om du precis skapat inlägget kan det ta en
            liten stund för inlägget att dyka upp.
          </p>
          <Link className="text-blue-600 hover:underline pt-1 text-lg" href="/">
            Till startsidan
          </Link>
        </div>
      </div>
    );
  }
}
