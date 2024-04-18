import Link from "next/link";

import extendSoonExpiringPost from "./extend-soon-expiring-post";
import getSoonExpiringPost from "../../utils/get-soon-expiring-post";

interface ExtendPostByMailPageProps {
  params: {
    postLink: string;
  };
}

export default async function ExtendPostByMailPage({
  params,
}: ExtendPostByMailPageProps) {
  const soonExpiringPost = await getSoonExpiringPost({
    postLink: params.postLink,
  });

  if (!soonExpiringPost) {
    return (
      <div className="flex flex-col max-w-screen-sm mx-auto gap-y-2 px-3 h-[75vh] justify-center text-center">
        <h1 className="text-xl font-medium">Inget inlägg hittades</h1>
        <p>
          Ojdå, något gick fel och inget inlägg hittades. <br /> Säkerställ att
          inlägget inte redan förlängts eller tagits bort. <br /> Var god och
          kontakta oss om problemet kvarstår.
        </p>
        <Link className="text-blue-600 hover:underline pt-1 text-lg" href="/">
          Till startsidan
        </Link>
      </div>
    );
  }

  const response = await extendSoonExpiringPost({
    postId: soonExpiringPost.id,
  });

  if (response.error) {
    console.error(response.error);
    return <div>..Ojdå, något gick fel</div>;
  }

  return (
    <div className="flex flex-col max-w-screen-sm mx-auto gap-y-2 px-3 h-[75vh] justify-center text-center">
      <h1 className="text-xl font-medium">Inlägg förlängt</h1>
      <p className="text-balance">
        Ditt inlägg &quot;{soonExpiringPost.title}&quot; har förlängts med sex
        månader. Inläggets nya utgångsdatum är {String(response.data)}.
      </p>
      <Link className="text-blue-600 hover:underline pt-1 text-lg" href="/">
        Till startsidan
      </Link>
    </div>
  );
}
