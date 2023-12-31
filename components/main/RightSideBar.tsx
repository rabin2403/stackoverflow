import Image from "next/image";
import Link from "next/link";
import React from "react";
import Tags from "../shared/tags/Tags";

const RightSideBar = () => {
  
  const data = [
    {
      content: "Next.js application with Server-Side Rendering (SSR)?",
      link: "nextjsapplication ",
    },
    {
      content: "Next.js application with Server-Side Rendering (SSR)?",
      link: "nextjsapplication ",
    },
    {
      content: "Next.js application with Server-Side Rendering (SSR)?",
      link: "nextjsapplication ",
    },
    {
      content: "Next.js application with Server-Side Rendering (SSR)?",
      link: "nextjsapplication ",
    },
    {
      content: "Next.js application with Server-Side Rendering (SSR)?",
      link: "nextjsapplication ",
    },
  ];

  const popular = [
    { title: "Nextjs", posts: 45 },
    { title: "Nextjs", posts: 45 },
    { title: "Nextjs", posts: 45 },
    { title: "Nextjs", posts: 45 },
    { title: "Nextjs", posts: 45 },
  ];

  return (
    <div className="sticky right-0 top-0 overflow-y-scroll h-[calc(100vh-50px)] px-4 background-light900_dark200 border-none -mt-2 py-10 hidden xl:block max-w-[320px] flex-wrap">
      <div className="space-y-4">
        <h2 className="h2-bold text-dark100_light900">Top Questions</h2>
        {data.map((item, idx) => (
          <Link href={item.link} className=" block" key={idx}>
            <div className="flex gap-5 justify-center items-center">
              <p className="text-dark100_light900 text-sm">{item.content}</p>
              <span className="text-dark100_light900">&gt;</span>
            </div>
          </Link>
        ))}
      </div>
      <div className="space-y-4 mt-10">
        <h2 className="h2-bold text-dark100_light900">Popular Tags</h2>
        {popular.map((item, idx) => (
          <Link href={item.title} className=" block" key={idx}>
            <div className="flex gap-5 justify-between items-center">
              <Tags title={item.title}/>
              <p className="text-dark100_light900">{item.posts}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RightSideBar;
