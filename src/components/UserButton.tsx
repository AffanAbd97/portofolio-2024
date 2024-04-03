"use client";
import { useSidebar } from "@/app/hooks/useSidebar";
import React from "react";
import { FaBars } from "react-icons/fa6";

function UserButton() {
  const { toggleOpen } = useSidebar();
  return (
    <button
      onClick={toggleOpen}
      className="sticky flex 2xl:hidden text-white h-8 w-8 rounded-full hover:text-blue-500 focus:text-blue-500 service-border  items-center justify-center p-2"
    >
      <FaBars />
    </button>
  );
}

export default UserButton;
