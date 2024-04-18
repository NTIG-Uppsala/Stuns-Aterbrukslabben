import { cn } from "@/lib/utils";

interface PostTypePickerProps {
  postType: string;
  setPostType: (...event: any[]) => void;
}

export default function PostTypePicker({
  postType,
  setPostType,
}: PostTypePickerProps) {
  return (
    <div className="grid grid-cols-2 md:w-60 w-52 mx-auto md:text-lg text-sm">
      <input
        type="button"
        value="Erbjuds"
        onClick={() => setPostType("Erbjuds")}
        className={cn(
          "hover:bg-opacity-60 py-[3px] rounded-s-md cursor-pointer bg-primary",
          postType === "Erbjuds" && "bg-offerColor bg-opacity-65"
        )}
      ></input>
      <input
        type="button"
        value="Efterfrågas"
        onClick={() => setPostType("Efterfrågas")}
        className={cn(
          "hover:bg-opacity-60 py-[3px] rounded-e-md cursor-pointer bg-primary",
          postType === "Efterfrågas" && "bg-requestColor bg-opacity-65"
        )}
      ></input>
    </div>
  );
}
