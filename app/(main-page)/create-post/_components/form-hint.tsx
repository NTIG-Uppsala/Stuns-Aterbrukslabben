import { HelpCircle } from "lucide-react";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface FormHintProps {
  content: string;
}

export default function FormHint({ content }: FormHintProps) {
  return (
    <TooltipProvider>
      <Tooltip delayDuration={100}>
        <TooltipTrigger type="button">
          <HelpCircle
            className="md:block hidden"
            strokeWidth={1}
            width={25}
            height={25}
          />
          <HelpCircle
            className="md:hidden block"
            strokeWidth={1}
            width={20}
            height={20}
          />
        </TooltipTrigger>
        <TooltipContent side="bottom" className="w-[170px]">
          <p className="text-xs text-center">{content}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
