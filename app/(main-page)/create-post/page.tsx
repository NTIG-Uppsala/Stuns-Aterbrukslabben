import Link from "next/link";

import getNameAndEmailFromUserId from "@/utils/get-name-and-email-from-user-id";
import { getUserId } from "@/utils/get-user-id";

import CreatePostComponent from "./_components/create-post-component";

export default async function createPostPage() {
  const userId = getUserId();

  if (userId) {
    const { firstName, lastName, email } = await getNameAndEmailFromUserId({
      userId,
    });

    return (
      <div>
        <CreatePostComponent
          firstName={firstName}
          lastName={lastName}
          email={email}
          userId={userId}
        />
      </div>
    );
  } else {
    return (
      <div className="flex flex-col max-w-screen-sm mx-auto gap-y-2 px-3 h-[75vh] justify-center text-center">
        <h1 className="text-xl font-medium">Ogiltig användarinformation</h1>
        <p>
          Ojdå, något gick fel och din användarinformation hittades inte. <br />
          Var god och kontakta oss om problemet kvarstår.
        </p>
        <Link className="text-blue-600 hover:underline pt-1 text-lg" href="/">
          Till startsidan
        </Link>
      </div>
    );
  }
}
