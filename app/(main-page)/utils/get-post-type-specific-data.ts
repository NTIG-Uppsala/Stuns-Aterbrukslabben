"use client";

interface GetPostTypeSpecificDataProps {
  postType: string;
}

export default function getPostTypeSpecificData({
  postType,
}: GetPostTypeSpecificDataProps) {
  let postTypeColor, expirationDateText;

  if (postType === "Erbjuds") {
    postTypeColor = "bg-offerColor";
    expirationDateText = "Hämta senast";
  } else if (postType === "Efterfrågas") {
    postTypeColor = "bg-requestColor";
    expirationDateText = "Vill ha senast";
  } else {
    postTypeColor = "bg-primary";
    expirationDateText = "Senast";
  }

  return { postTypeColor, expirationDateText };
}
