import Link from "next/link";
import getSoonExpiringPost from "../../utils/get-soon-expiring-post";
import deletePostsByIds from "@/utils/delete-posts-by-id";

interface PageProps {
  params: {
    postLink: string;
  };
}

export default async function DeletePostByMailPage({ params }: PageProps) {
  const soonExpiringPost = await getSoonExpiringPost({
    postLink: params.postLink,
  });

  if (!soonExpiringPost) {
    return <div>Inget inlägg hittades</div>;
  }

  const response = await deletePostsByIds({ postsIds: [soonExpiringPost.id] });
  if (response.error) {
    console.error(response.error);
    return <div>..Ojdå, något gick fel</div>;
  }

  return (
    <div className="flex w-full h-[48vh] items-end justify-center text-center">
      <div className="flex flex-col max-w-screen-sm gap-y-2 px-3">
        <h1 className="text-xl font-medium">Inlägg bortaget</h1>
        <p className="text-pretty">
          Ditt inlägg {soonExpiringPost.title} har tagits bort.
        </p>
        <Link className="text-blue-600 hover:underline pt-1 text-lg" href="/">
          Till startsidan
        </Link>
      </div>
    </div>
  );
}
