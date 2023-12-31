"use client";
import { useTheme } from "@/context/ThemeProvider";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";

const NotFound = () => {
  const { mode } = useTheme();
  return (
    <div>
      {mode === "dark" ? (
        <Image
          src={"/assets/images/dark-illustration.png"}
          width={400}
          height={400}
          alt="hello"
          className="mx-auto w-full max-w-[400px]"
        />
      ) : (
        <Image
          src={"/assets/images/light-illustration.png"}
          width={400}
          height={400}
          alt="hello"
          className="mx-auto w-full max-w-[400px]"
        />
      )}
      <div className="text-dark100_light900 w-full space-y-3 py-10 text-center">
        <h2 className="h2-bold">There&apos;s no question to show</h2>
        <p className="text-sm ">
          Be the first to break the silence! 🚀 Ask a Question and kickstart the
          discussion. our query could be the next big thing others learn from.
          Get involved! 💡
        </p>
        <Link href={"/ask-question"} className="flex justify-center  max-sm:w-full">
          <Button className="primary-gradient min-h-[46px] px-4 py-3 !text-light-900 ">
            Ask a Question
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
