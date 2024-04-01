import UserCard from "@/components/UserCard";
import React from "react";
import Intro from "@/components/Content/Intro";
import Resume from "@/components/Content/Resume";
import Service from "@/components/Content/Service";
import Skills from "@/components/Content/Skills";
import Project from "@/components/Content/Project";
import AOSProvider from "@/Providers/Aos";
import { promises as fs } from "fs";
import Contact from "@/components/Content/Contact";
import Sidebar from "@/components/Sidebar";
import MobileSidebar from "@/components/MobileSidebar";
import MobileTop from "@/components/MobileTop";

export default async function Home() {
  const file = await fs.readFile(process.cwd() + "/src/data/data.json", "utf8");
  const data = JSON.parse(file);
  return (
    <AOSProvider>
      <MobileTop />
      <MobileSidebar />
      <main className="grid items-center  lg:p-24 bg-[#1f1f1f]  w-full">
        <div className="h-auto ml-0 lg:ml-32 w-full">
          <UserCard />
          <div className="max-w-[770px] lg:w-[770px] w-full mx-auto px-8">
            <Intro />
            <Resume />
            <Service />
            <Skills />
            <Project data={data} />
            <Contact />
          </div>
        </div>
        <Sidebar />
      </main>
    </AOSProvider>
  );
}
