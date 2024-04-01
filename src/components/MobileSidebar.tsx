"use client";

import React from "react";

import { Sidebar } from "flowbite-react";
import { HiChartPie } from "react-icons/hi";
import { BiHome, BiUser } from "react-icons/bi";
import { BsBoxes } from "react-icons/bs";
import { CgLoadbarDoc, CgMail } from "react-icons/cg";
import { PiBriefcase, PiChartBarHorizontal } from "react-icons/pi";
import { useSidebar } from "@/app/hooks/useSidebar";
import { MdClose } from "react-icons/md";
import { IoMdCodeWorking } from "react-icons/io";
import { usePathname } from "next/navigation";

function MobileSidebar() {
  const { isOpen, toggleOpen } = useSidebar();
  const pathname = usePathname();

  console.log(pathname);

  return (
    <>
      <Sidebar
        aria-label="Default sidebar example"
        className=" fixed right-0 z-50"
        hidden={isOpen}
        theme={{
          root: {
            base: "h-full",
            collapsed: {
              on: "w-16",
              off: "w-64",
            },
            inner:
              "h-full overflow-y-auto overflow-x-hidden rounded  px-3 py-4 bg-[#1f1f1f]/90",
          },

          item: {
            base: "flex items-center justify-center rounded-lg p-2 text-base font-normal text-white hover:bg-[#1f1f1f]",
            active: "bg-gray-100 dark:bg-gray-700",
            collapsed: {
              insideCollapse: "group w-full pl-8 transition duration-75",
              noIcon: "font-bold",
            },
            content: {
              base: "flex-1 whitespace-nowrap px-3",
            },
            icon: {
              base: "h-6 w-6 flex-shrink-0 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white",
              active: "text-gray-700 dark:text-gray-100",
            },
            label: "",
            listItem: "",
          },
          items: {
            base: "",
          },
          itemGroup: {
            base: "mt-4 space-y-2 border-t border-gray-200 pt-4 first:mt-0 first:border-t-0 first:pt-0 dark:border-gray-700",
          },
        }}
      >
        <div className="w-full flex items-center justify-end">
          <button className="text-lg text-gray-50 mb-2" onClick={toggleOpen}>
            <MdClose />
          </button>
        </div>
        <Sidebar.Items>
          <Sidebar.ItemGroup>
            <Sidebar.Item href="/" icon={BiHome}>
              Home
            </Sidebar.Item>
            <Sidebar.Item href="/project" icon={IoMdCodeWorking}>
              Project
            </Sidebar.Item>
          </Sidebar.ItemGroup>
          {pathname == "/" && (
            <Sidebar.ItemGroup>
              <Sidebar.Item href="#home" icon={BiUser}>
                Introduction
              </Sidebar.Item>
              <Sidebar.Item href="#resume" icon={PiBriefcase}>
                Resume
              </Sidebar.Item>
              <Sidebar.Item href="#service" icon={PiChartBarHorizontal}>
                Service
              </Sidebar.Item>
              <Sidebar.Item href="#skill" icon={BsBoxes}>
                Skill
              </Sidebar.Item>
              <Sidebar.Item href="#portfolio" icon={CgLoadbarDoc}>
                Portfolio
              </Sidebar.Item>
              <Sidebar.Item href="#contact" icon={CgMail}>
                Contact
              </Sidebar.Item>
            </Sidebar.ItemGroup>
          )}
        </Sidebar.Items>
      </Sidebar>
    </>
  );
}

export default MobileSidebar;
