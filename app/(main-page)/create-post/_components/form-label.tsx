interface FormLabelProps {
  content: string;
}

export default function FormLabel({ content }: FormLabelProps) {
  return <label className="font-medium md:text-base text-sm">{content}</label>;
}
