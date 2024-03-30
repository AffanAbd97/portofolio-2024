"use client";

import React from "react";
import Content from "../Content";
import { PiChartBarHorizontalLight } from "react-icons/pi";
import Image from "next/image";
import Dinacom from "../../../public/img/web/Dinacom.png";
import ProjectCard from "../ProjectCard";
import { ProjectData } from "@/types/ProjectData";
import Link from "next/link";
interface ProjectProps {
  data: ProjectData[];
}
function Project({ data }: ProjectProps) {
  const dataDinacom = data.find((item) => item.id === 7);
  const dataSprout = data.find((item) => item.id === 1);

  return (
    <Content Icon={PiChartBarHorizontalLight} tag="Portfolio">
      <div className="flex flex-col gap-16 py-16">
        <h2 className="text-white text-5xl">
          Featured <span className="text-blue-500">Project</span>
        </h2>

        <ProjectCard data={dataDinacom} />
        <ProjectCard data={dataSprout} />
        <div className="text-center">
          <Link
            href="/product"
            className="text-white bg-blue-500 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5   focus:outline-none "
          >
            More Product
          </Link>
        </div>
      </div>
    </Content>
  );
}

export default Project;
