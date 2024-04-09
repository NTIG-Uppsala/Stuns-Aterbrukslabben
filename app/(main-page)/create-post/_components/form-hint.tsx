import { HelpCircle } from "lucide-react";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface FormHintProps {
  width: number;
  height: number;
}

export default function FormHint({ width, height }: FormHintProps) {
  return (
    <TooltipProvider>
      <Tooltip delayDuration={0}>
        <TooltipTrigger>
          <HelpCircle width={width} height={height} />
        </TooltipTrigger>
        <TooltipContent side="bottom" className="w-[170px]">
          <p>
            <span className="font-bold">Förnamn</span>,{" "}
            <span className="font-bold">efternamn</span> och{" "}
            <span className="font-bold">mejl</span> kan ändras via din
            profilsida.
          </p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
