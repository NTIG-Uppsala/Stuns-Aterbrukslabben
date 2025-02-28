import { HelpCircle } from "lucide-react";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
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
    <>
      <TooltipProvider>
        <Tooltip delayDuration={100}>
          <TooltipTrigger className="xl:block hidden" type="button">
            <HelpCircle strokeWidth={2} width={20} height={20} />
          </TooltipTrigger>
          <TooltipContent
            side="bottom"
            className="w-[170px] text-sm text-center"
          >
            {content}
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      {/* Mobile */}
      <Popover>
        <PopoverTrigger className="xl:hidden block">
          <HelpCircle strokeWidth={2} width={20} height={20} />
        </PopoverTrigger>
        <PopoverContent
          align="end"
          className="p-2 w-[170px] text-xs text-center"
        >
          {content}
        </PopoverContent>
      </Popover>
    </>
  );
}
