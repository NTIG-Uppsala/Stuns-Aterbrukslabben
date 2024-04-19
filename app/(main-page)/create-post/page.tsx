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
    return;
  }
}
