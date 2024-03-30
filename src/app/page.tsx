"use client";
import Content from "@/components/Content";
import ServiceCards from "@/components/ServiceCards";
import Sidebar from "@/components/Sidebar";
import UserCard from "@/components/UserCard";
import Image from "next/image";
import { BiHome } from "react-icons/bi";
import { BsBag, BsPhone } from "react-icons/bs";
import { CiGlobe } from "react-icons/ci";
import { PiChartBarHorizontalLight } from "react-icons/pi";
import React, { useEffect } from "react";
import { FaLaravel } from "react-icons/fa";
import {
  SiTailwindcss,
  SiMysql,
  SiJavascript,
  SiJetpackcompose,
  SiFigma,
} from "react-icons/si";
import { DiPhp, DiHtml5, DiCss3, DiReact } from "react-icons/di";
import { BsBootstrapFill } from "react-icons/bs";
import { TbBrandKotlin } from "react-icons/tb";
import AOS from "aos";

export default function Home() {
  useEffect(() => {
    AOS.init();
  }, []);
  const icons = [
    SiTailwindcss,
    FaLaravel,
    DiPhp,
    SiMysql,
    BsBootstrapFill,
    DiHtml5,
    DiCss3,
    SiJavascript,
    TbBrandKotlin,
    SiJetpackcompose,
    DiReact,
    SiFigma,
  ];

  const labels = [
    "Tailwind CSS",
    "Laravel",
    "PHP",
    "MySQL",
    "Bootstrap",
    "HTML5",
    "CSS3",
    "JavaScript",
    "Kotlin",
    "Jetpack Compose",
    "React JS",
    "Figma",
  ];
  return (
    <main className="flex  items-center p-24 bg-[#1f1f1f] ">
      <div className="h-[8000px] ml-96 w-full">
        <div className="max-w-[770px] w-[770px] mx-auto">
          <Content Icon={BiHome} tag="Introduction">
            <div className="flex flex-col gap-16 py-16">
              <h1 className="text-white text-7xl">
                Hi, I&apos;m{" "}
                <span className="text-blue-500">Affan Abdullah Izzuddin</span>
              </h1>
              <p className="text-gray-400">
                I am a junior developer. I am currently studying at the
                university Dian Nuswantoro Semarang majoring in informatics
                engineering, I have experience in web development and Android
                Development .
              </p>
            </div>
          </Content>

          <Content Icon={BsBag} tag="Resume">
            <div className="flex flex-col gap-16 py-16">
              <h2 className="text-white text-5xl">
                Education & <span className="text-blue-500">Experience</span>
              </h2>
              <ol className="relative border-s border-gray-200 ">
                <li className="mb-10 ms-6 group/timeline" data-aos="fade-down"   >
                  <span className="absolute flex items-center justify-center w-4 h-4 bg-blue-100 group-hover/timeline:bg-blue-500 rounded-full -start-2 transition-all duration-300 ease-in-out"></span>
                  <h3 className="flex items-center mb-1 text-xl font-semibold text-white group-hover/timeline:text-blue-500 transition-all duration-300 ease-in-out">
                    Web Programmer Intern - Internship
                    <span className="bg-blue-100 text-blue-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded ms-3">
                      Latest
                    </span>
                  </h3>
                  <time className="block mb-2 text-sm font-normal leading-none text-gray-400 ">
                    November 2023 - April 2024
                  </time>

                  <p className="mb-4 text-base font-normal text-gray-500 ">
                    UDINUS Data and Information Technical Implementation Unit
                  </p>
                </li>
                <li className="mb-10 ms-6 group/timeline" data-aos="fade-down"  >
                  <span className="absolute flex items-center justify-center w-4 h-4 bg-blue-100 group-hover/timeline:bg-blue-500 rounded-full -start-2 transition-all duration-300 ease-in-out"></span>
                  <h3 className="flex items-center mb-1 text-xl font-semibold text-white group-hover/timeline:text-blue-500 transition-all duration-300 ease-in-out">
                    Mobile Development Cohorts - Training Program
                  </h3>
                  <time className="block mb-2 text-sm font-normal leading-none text-gray-400 ">
                    February 2023 - July 2023
                  </time>

                  <p className="mb-4 text-base font-normal text-gray-500 ">
                    Bangkit Academy 2023 Batch 1 - Mobile Development
                  </p>
                </li>
                <li className="mb-10 ms-6 group/timeline" data-aos="fade-down"  >
                  <span className="absolute flex items-center justify-center w-4 h-4 bg-blue-100 group-hover/timeline:bg-blue-500 rounded-full -start-2 transition-all duration-300 ease-in-out"></span>
                  <h3 className="flex items-center mb-1 text-xl font-semibold text-white group-hover/timeline:text-blue-500 transition-all duration-300 ease-in-out">
                    Team members of the Research and Development division -
                    Organisation
                  </h3>
                  <time className="block mb-2 text-sm font-normal leading-none text-gray-400 ">
                    August 2022 - July 2023
                  </time>

                  <p className="mb-4 text-base font-normal text-gray-500 ">
                    Dian Nuswantoro Computer Club
                  </p>
                </li>
                <li className="mb-10 ms-6 group/timeline" data-aos="fade-down"  >
                  <span className="absolute flex items-center justify-center w-4 h-4 bg-blue-100 group-hover/timeline:bg-blue-500 rounded-full -start-2 transition-all duration-300 ease-in-out"></span>
                  <h3 className="flex items-center mb-1 text-xl font-semibold text-white group-hover/timeline:text-blue-500 transition-all duration-300 ease-in-out">
                    Team members of the Website division - Organisation
                  </h3>
                  <time className="block mb-2 text-sm font-normal leading-none text-gray-400 ">
                    September 2022 - July 2023
                  </time>

                  <p className="mb-4 text-base font-normal text-gray-500 ">
                    Dian Nuswantoro Computer Club
                  </p>
                </li>
                <li className="mb-10 ms-6 group/timeline" data-aos="fade-down"  >
                  <span className="absolute flex items-center justify-center w-4 h-4 bg-blue-100 group-hover/timeline:bg-blue-500 rounded-full -start-2 transition-all duration-300 ease-in-out"></span>
                  <h3 className="flex items-center mb-1 text-xl font-semibold text-white group-hover/timeline:text-blue-500 transition-all duration-300 ease-in-out">
                    Bachelor of Informatics Engineering - University
                  </h3>
                  <time className="block mb-2 text-sm font-normal leading-none text-gray-400 ">
                    September 2020 - April 2024
                  </time>

                  <p className="mb-4 text-base font-normal text-gray-500 ">
                    Dian Nuswantoro University - GPA: 3.75
                  </p>
                </li>
              </ol>
            </div>
          </Content>
          <Content Icon={PiChartBarHorizontalLight} tag="Service">
            <div className="flex flex-col gap-16 py-16">
              <h2 className="text-white text-5xl">
                My <span className="text-blue-500">Specializations</span>
              </h2>
              <div className="flex flex-col gap-2">
                <ServiceCards
                  aos="fade-right"
                  title="Web Developer"
                  description="Custom web development for front-end and back-end, focus on visual engage and responsive designs."
                  count={10}
                  Icon={CiGlobe}
                />
                <ServiceCards
                  aos="fade-left"
                  title="Mobile Developer"
                  description="Build Android application focus on user flow and user experience"
                  count={10}
                  Icon={BsPhone}
                />
              </div>
            </div>
          </Content>
          <Content Icon={PiChartBarHorizontalLight} tag="Skills">
            <div className="flex flex-col gap-16 py-16">
              <h2 className="text-white text-5xl">
                My <span className="text-blue-500">Specializations</span>
              </h2>
              <div className="grid md:grid-cols-6 grid-cols-2 gap-4 items-center mx-auto">
                {icons.map((Icon, index) => (
                  <div
                    key={index}
                    className=" group flex items-center justify-center "
                    data-aos={`fade-${
                      index % 5 === 0
                        ? "right"
                        : index % 5 === 1
                        ? "down"
                        : index % 5 === 2
                        ? "up"
                        : index % 5 === 3
                        ? "left"
                        : "down"
                    }`}
                  >
                    <div className=" rounded-lg p-10 transform transition-all  group-hover:bg-transparent outline group-hover:outline-blue-500 outline-none relative  group-hover:absolute  group-hover:z-20 group-hover:scale-110">
                      <Icon className="text-white transform transition-all group-hover:text-blue-500 text-xl h-16 w-16" />
                      <p
                        className={`leading-none text-center transform transition-all group-hover:block group-hover:text-blue-500 hidden  absolute inset-x-0 ${
                          Icon === SiJetpackcompose ? "bottom-4" : "bottom-3"
                        } `}
                      >
                        {labels[index]}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Content>
        </div>
      </div>
      <UserCard />
    </main>
  );
}
