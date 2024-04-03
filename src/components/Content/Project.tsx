"use client";

import React from "react";
import Content from "../Content";
import { PiChartBarHorizontalLight } from "react-icons/pi";
import Image from "next/image";
import Dinacom from "../../../public/img/web/Dinacom.png";

import { ProjectData } from "@/types/ProjectData";
import Link from "next/link";
import { CgLoadbarDoc } from "react-icons/cg";
import ProjectItem from "../ProjectCard";
interface ProjectProps {
  data: ProjectData[];
}
function Project({ data }: ProjectProps) {
  const dataDinacom = data.find((item) => item.id === 7);
  const dataSprout = data.find((item) => item.id === 1);

  return (
    <Content Icon={CgLoadbarDoc} tag="Portfolio" id="portfolio">
      <div className="flex flex-col gap-16 py-16">
        <h2 className="text-white text-5xl">
          Featured <span className="text-blue-500">Project</span>
        </h2>

        <ProjectItem data={dataDinacom} />
        <ProjectItem data={dataSprout} />
        <div className="text-center">
          <Link
            href="/project"
            className="rounded-xl font-semibold  inline-flex items-center gap-2 bg-blue-500 py-4 px-6 text-sm justify-center text-[#222] outline outline-none hover:bg-transparent hover:outline-blue-500 hover:text-blue-500 transition-all duration-300 ease-in-out"
          >
            More Project
          </Link>
        </div>
      </div>
    </Content>
  );
}

export default Project;
