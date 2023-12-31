"use client";
import { sidebarLinks } from "@/constants/constants";
// import { SignedOut } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { Button } from "../ui/button";

const LeftSideBar = () => {
  const pathname = usePathname();
  return (
      <div
        className={`background-light900_dark200 sticky left-0 top-0 hidden h-[calc(100vh-50px)] overflow-y-scroll border-none px-4  py-10 sm:block md:px-6`}
      >
        {sidebarLinks.map((item) => {
          const isActive =
            (pathname.includes(item.route) && item.route.length > 1) ||
            pathname === item.route;
          return (
            <Link
              href={item.route}
              className={`${
                isActive
                  ? "primary-gradient rounded-lg text-light-900"
                  : "text-dark300_light900"
              } flex items-center justify-start gap-4 bg-transparent p-4`}
              key={item.label}
            >
              <Image
                src={item.imgURL}
                alt={item.label}
                width={20}
                height={20}
                className={`${isActive ? "" : "invert-colors"}`}
              />
              <p
                className={`${
                  isActive ? "base-bold" : "base-medium"
                } hidden md:block`}
              >
                {item.label}
              </p>
            </Link>
          );
        })}
        <div className="flex flex-col gap-3">
          <Link href={"/sign-in"}>
            <Button className="btn-secondary small-medium min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none ">
              <span className="primary-text-gradient hidden md:block">
                Log In
              </span>
              <Image
                src={"/assets/icons/account.svg"}
                width={23}
                height={23}
                alt="DevFlow"
                className="invert-colors block md:hidden"
              />
            </Button>
          </Link>
          <Link href={"/sign-up"}>
            <Button className="light-border-2 btn-tertiary text-dark400_light900 small-medium min-h-[41px] w-full rounded-lg border px-4 py-3 shadow-none ">
              <span className="hidden text-dark-100 dark:text-white md:block">
                Sign Up
              </span>
              <Image
                src={"/assets/icons/sign-up.svg"}
                width={23}
                height={23}
                alt="DevFlow"
                className="invert-colors block md:hidden"
              />
            </Button>
          </Link>
        </div>
      </div>
  );
};

export default LeftSideBar;
