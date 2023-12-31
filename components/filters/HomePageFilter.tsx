"use client";

import React, { useState } from "react";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "../ui/button";
import { Check, ChevronsUpDown } from "lucide-react";
import { HomePageFilters } from "@/constants/filters";
const frameworks = [
  {
    value: "Recommended",
    label: "Recommended",
  },
  {
    value: "Newest",
    label: "Newest",
  },
  {
    value: "Oldest",
    label: "Oldest",
  },
  {
    value: "Trending",
    label: "Trending",
  },
];
const HomePageFilter = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  return (
    <div className="w-full bg-white md:hidden ">
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="w-full justify-between"
          >
            {value}
            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-full p-0 bg-white">
          <Command>
            {/* <CommandInput placeholder="Search framework..." /> */}
            <CommandEmpty>No framework found.</CommandEmpty>
            <CommandGroup>
              {HomePageFilters.map((framework) => (
                <CommandItem
                  key={framework.value}
                  value={framework.value}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue);
                    setOpen(false);
                  }}
                >
                  <Check
                    className={`mr-2 h-4 w-4
                    ${value === framework.value ? "opacity-100" : "opacity-0"}`}
                  />
                  {framework.name}
                </CommandItem>
              ))}
            </CommandGroup>
          </Command>
        </PopoverContent>
      </Popover>{" "}
    </div>
  );
};

export default HomePageFilter;
