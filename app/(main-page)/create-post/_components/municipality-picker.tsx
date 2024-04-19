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
  currentMunicipality: string;
  setCurrentMunicipality: (...event: any[]) => void;
  itemsList: string[];
}

export default function MunicipalityPicker({
  currentMunicipality,
  setCurrentMunicipality,
  itemsList,
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
            !currentMunicipality && "text-muted-foreground normal-case"
          )}
        >
          {currentMunicipality
            ? itemsList.find((listItem) => listItem === currentMunicipality)
            : "Välj kommun"}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="md:w-[260px] w-[160px] p-0">
        <Command>
          <CommandInput placeholder="Sök kommuner...." />
          <CommandList>
            {itemsList.map((listItem) => (
              <CommandItem
                key={listItem}
                value={listItem}
                className="capitalize"
                onSelect={(selectedValue) => {
                  setCurrentMunicipality(
                    selectedValue === currentMunicipality ? "" : selectedValue
                  );
                  setOpen(false);
                }}
              >
                <Check
                  className={cn(
                    "mr-2 h-4 w-4",
                    currentMunicipality === listItem
                      ? "opacity-100"
                      : "opacity-0"
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
