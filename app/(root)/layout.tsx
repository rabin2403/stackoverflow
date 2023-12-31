import LeftSideBar from "@/components/main/LeftSideBar";
import RightSideBar from "@/components/main/RightSideBar";
import Navbar from "@/components/shared/navbar/Navbar";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="background-light850_dark100 relative">
      <Navbar />
      <div className="flex sm:pt-24 pt-14">
        <LeftSideBar />
        <section className="flex  md:min-h-[calc(100vh-7rem)] flex-1 flex-col px-6 pb-6 pt-10 max-md:pb-14 sm:px-14">
          <div className="mx-auto w-full max-w-5xl">{children}</div>
        </section>
        <RightSideBar />
      </div>
      {/* Toaster */}
    </main>
  );
};

export default Layout;
