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
  category: string;
  setCategory: (...event: any[]) => void;
  list: string[];
}

export default function CategoryPicker({
  category,
  setCategory,
  list,
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
            !category && "text-muted-foreground normal-case"
          )}
        >
          {category
            ? list.find((listItem) => listItem === category)
            : "Välj kategori"}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="md:w-[552px] w-[336px] p-0">
        <Command>
          <CommandList>
            {list.map((listItem) => (
              <CommandItem
                key={listItem}
                value={listItem}
                className="capitalize"
                onSelect={(currentValue) => {
                  setCategory(currentValue === category ? "" : currentValue);
                  setOpen(false);
                }}
              >
                <Check
                  className={cn(
                    "mr-2 h-4 w-4",
                    category === listItem ? "opacity-100" : "opacity-0"
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
