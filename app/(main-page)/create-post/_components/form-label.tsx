interface FormLabelProps {
  htmlFor?: string;
  labelText: string;
}

export default function FormLabel({ htmlFor, labelText }: FormLabelProps) {
  return (
    <label htmlFor={htmlFor} className="font-medium md:text-base text-sm">
      {labelText}
    </label>
  );
}
