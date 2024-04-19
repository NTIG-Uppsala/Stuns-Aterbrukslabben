interface FormErrorParagraphProps {
  content: string;
}

export default function FormErrorParagraph({
  content,
}: FormErrorParagraphProps) {
  return (
    <p className="text-red-500 md:text-base text-sm" role="alert">
      {content}
    </p>
  );
}
