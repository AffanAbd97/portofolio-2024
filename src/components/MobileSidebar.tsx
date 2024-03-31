"use client";

import React, { useState } from "react";

import { Sidebar } from "flowbite-react";
import {
  HiArrowSmRight,
  HiChartPie,
  HiInbox,
  HiShoppingBag,
  HiTable,
  HiUser,
  HiViewBoards,
} from "react-icons/hi";
import { useSidebar } from "@/app/hooks/useSidebar";
import { MdClose } from "react-icons/md";

function MobileSidebar() {
  const { isOpen, toggleOpen } = useSidebar();

  return (
    <>
      <Sidebar
        aria-label="Default sidebar example"
        className=" fixed right-0 z-50"
        hidden={isOpen}
      >
        <div className="w-full flex items-center justify-end">
          <button className="text-lg mb-2" onClick={toggleOpen}>
            <MdClose />
          </button>
        </div>
        <Sidebar.Items>
          <Sidebar.ItemGroup>
            <Sidebar.Item href="#" icon={HiChartPie}>
              Dashboard
            </Sidebar.Item>
            
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>
    </>
  );
}

export default MobileSidebar;
