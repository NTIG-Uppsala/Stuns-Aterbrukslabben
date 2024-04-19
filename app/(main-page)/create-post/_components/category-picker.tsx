"use client";

import { Check, ChevronsUpDown } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Command, CommandItem, CommandList } from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface CategoryPickerProps {
  currentCategory: string;
  setCurrentCategory: (...event: any[]) => void;
  Itemslist: string[];
}

export default function CategoryPicker({
  currentCategory,
  setCurrentCategory,
  Itemslist,
}: CategoryPickerProps) {
  const [open, setOpen] = useState(false);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          role="combobox"
          aria-expanded={open}
          className={cn(
            "w-full justify-between capitalize bg-primary bg-opacity-40",
            !currentCategory && "text-muted-foreground normal-case"
          )}
        >
          {currentCategory
            ? Itemslist.find((listItem) => listItem === currentCategory)
            : "Välj kategori"}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="md:w-[552px] w-[336px] p-0">
        <Command>
          <CommandList>
            {Itemslist.map((listItem) => (
              <CommandItem
                key={listItem}
                value={listItem}
                className="capitalize"
                onSelect={(selectedValue) => {
                  setCurrentCategory(
                    selectedValue === currentCategory ? "" : selectedValue
                  );
                  setOpen(false);
                }}
              >
                <Check
                  className={cn(
                    "mr-2 h-4 w-4",
                    currentCategory === listItem ? "opacity-100" : "opacity-0"
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
