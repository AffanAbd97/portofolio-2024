"use client";
import ProjectItem from "@/components/ProjectCard";
import { FadeDirection } from "@/types/FadeDirection";
import { ProjectData } from "@/types/ProjectData";
import React from "react";
interface Props {
  data: ProjectData[];
}
function Web({ data }: Props) {
  const webData = data.filter((item) => item.type === "web");


  return (
    <div className="p-12 grid grid-cols-1 lg:grid-cols-2  2xl:grid-cols-3 gap-12">
      {webData.map((item: ProjectData, index: number) => (
        <ProjectItem data={item} key={index} fadeDir={FadeDirection.Up} />
      ))}
    </div>
  );
}

export default Web;
