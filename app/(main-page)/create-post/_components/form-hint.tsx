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
  content: string;
}

export default function FormHint({ width, height, content }: FormHintProps) {
  return (
    <TooltipProvider>
      <Tooltip delayDuration={100}>
        <TooltipTrigger type="button">
          <HelpCircle strokeWidth={1} width={width} height={height} />
        </TooltipTrigger>
        <TooltipContent side="bottom" className="w-[170px]">
          <p className="text-xs text-center">
            {content}
          </p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
