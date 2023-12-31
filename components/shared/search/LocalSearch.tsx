"use client";
import Image from "next/image";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";

const LocalSearch = () => {
  const [search, setSearch] = useState("");
  return (
    <div className="relative w-full ">
      <div className="background-light800_darkgradient relative flex grow items-center min-h-[56px] gap-4 rounded-xl px-4">
        <Image
          src={"/assets/icons/search.svg"}
          alt="search"
          width={24}
          height={24}
          className="cursor-pointer"
        />
        <Input
          type="text"
          placeholder="Search questions"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          className="paragraph-regular no-focus placeholder background-light800_darkgradient outline-none border-none shadow-none"
        />
      </div>
    </div>
  );
};

export default LocalSearch;
