"use client";

import { Check, ChevronsUpDown } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  Command,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface MunicipalityPickerProps {
  municipality: string;
  setMunicipality: (...event: any[]) => void;
  list: string[];
}

export default function MunicipalityPicker({
  municipality,
  setMunicipality,
  list,
}: MunicipalityPickerProps) {
  const [open, setOpen] = useState(false);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          role="combobox"
          aria-expanded={open}
          className={cn(
            "md:w-[260px] w-[160px] justify-between capitalize bg-primary bg-opacity-40",
            !municipality && "text-muted-foreground normal-case"
          )}
        >
          {municipality
            ? list.find((listItem) => listItem === municipality)
            : "Välj kommun"}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="md:w-[260px] w-[160px] p-0">
        <Command>
          <CommandInput placeholder="Sök kommuner...." />
          <CommandList>
            {list.map((listItem) => (
              <CommandItem
                key={listItem}
                value={listItem}
                className="capitalize"
                onSelect={(currentValue) => {
                  setMunicipality(
                    currentValue === municipality ? "" : currentValue
                  );
                  setOpen(false);
                }}
              >
                <Check
                  className={cn(
                    "mr-2 h-4 w-4",
                    municipality === listItem ? "opacity-100" : "opacity-0"
                  )}
                />
                {listItem}
              </CommandItem>
            ))}
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
