import React from "react";
import UserButton from "./UserButton";

function MobileTop() {
  return (
    <nav className="bg-[#1f1f1f] py-8 px-8 fixed w-full top-0 z-50 md:hidden">
      <div className="flex justify-between items-center w-full ">
        <h1 className="text-white text-4xl">Affan</h1>
        <h1 className="hidden md:block text-white">Web Developer</h1>
        <UserButton />
      </div>
    </nav>
  );
}

export default MobileTop;
