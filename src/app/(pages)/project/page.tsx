import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FaBoxOpen } from "react-icons/fa6";
import AOSProvider from "@/Providers/Aos";
import { promises as fs } from "fs";
import Web from "./components/Web";
import Mobile from "./components/Mobile";
import Link from "next/link";
import Footer from "@/components/Footer";
export default async function Project() {
  const file = await fs.readFile(process.cwd() + "/src/data/data.json", "utf8");
  const data = JSON.parse(file);
  return (
    <AOSProvider>
      <Tabs defaultValue="web" className="relative bg-[#1f1f1f]  ">
        <nav className="w-full flex items-center justify-between z-50 absolute text-white px-8 py-6">
          <Link href={"/"} className="text-2xl font-semibold">
            Affan
          </Link>
          <TabsList>
            <TabsTrigger value="web">Website</TabsTrigger>
            <TabsTrigger value="mobile">Mobile</TabsTrigger>
          </TabsList>
          <div></div>
        </nav>
        <div
          className={`relative text-center h-96 bg-cover bg-center `}
          style={{
            backgroundImage: `url('/img/banner.jpg')`,
          }}
        >
          <div className="absolute inset-0 bg-black opacity-75"></div>

          <div className="relative z-10 text-white h-full flex justify-center items-center">
            <div>
              <h1 className="text-5xl inline-flex">
                <FaBoxOpen className="me-2" />
                <span> Portfolio</span>
              </h1>
              <p>Projects that I have worked on previously</p>
            </div>
          </div>
        </div>
        <TabsContent value="web">
          <Web data={data} />
        </TabsContent>
        <TabsContent value="mobile">
          <Mobile data={data} />
        </TabsContent>
      </Tabs>
      <Footer />
    </AOSProvider>
  );
}
