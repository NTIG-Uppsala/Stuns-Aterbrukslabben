interface ErrorParagraphProps {
  content?: string;
}

export default function ErrorParagraph({ content }: ErrorParagraphProps) {
  return (
    <p className="text-red-500 md:text-base text-sm" role="alert">
      {content}
    </p>
  );
}
