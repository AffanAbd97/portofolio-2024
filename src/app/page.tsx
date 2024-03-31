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

export default async function Home() {

  
  const file = await fs.readFile(process.cwd() + "/src/data/data.json", "utf8");
  const data = JSON.parse(file);
  return (
    <AOSProvider>
      <main className="flex  items-center p-24 bg-[#1f1f1f] ">
        <div className="h-auto ml-96 w-full">
          <div className="max-w-[770px] w-[770px] mx-auto">
            <Intro />
            <Resume />
            <Service />
            <Skills />
            <Project data={data}/>
            <Contact/>
          </div>
        </div>
        <UserCard />
        <Sidebar/>
      </main>
    </AOSProvider>
  );
}
