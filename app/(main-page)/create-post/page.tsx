import { getUserId } from "@/utils/get-user-id";

import CreatePostComponent from "./_components/create-post-component";
import getNameAndEmailFromUserId from "../utils/get-name-and-email-from-user-id";
import getUserRoleFromUserId from "../utils/get-user-role-from-user-id";

export default async function createPostPage() {
  const userId = getUserId();

  if (userId) {
    const { firstName, lastName, email } = await getNameAndEmailFromUserId({
      userId,
    });
    const postUserRole = await getUserRoleFromUserId({userId});

    return (
      <div>
        <CreatePostComponent
          firstName={firstName}
          lastName={lastName}
          email={email}
          postUserRole={postUserRole}
        />
      </div>
    );
  } else {
    return;
  }
}
