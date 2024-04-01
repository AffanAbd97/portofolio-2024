import { useSidebar } from "@/app/hooks/useSidebar";
import Image from "next/image";
import React from "react";
import { BiEnvelope } from "react-icons/bi";
import { BsGithub } from "react-icons/bs";
import UserButton from "./UserButton";

function UserCard() {
  return (
    <div className="mt-32 lg:mt-0 bg-[#1f1f1f] rounded-3xl w-full lg:w-96 lg:fixed lg:left-16 lg:top-1/2 transform lg:-translate-y-1/2">
      <div className="py-12 px-8 flex flex-col gap-8 items-center justify-center rounded-3xl  relative lg:shadow-border lg:shadow-2xl">
        <div className="lg:flex justify-between items-center w-full hidden ">
          <h1 className="text-white text-4xl">Affan</h1>
          <h1 className="hidden lg:block text-white">Web Developer</h1>
          <UserButton />
        </div>
        <div className="w-full h-56 relative rounded-lg ">
          <Image
            src={"/img/self-image.jpg"}
            alt=""
            fill
            style={{ objectFit: "cover" }}
            className="w-full h-full object-cover rounded-3xl"
          />
        </div>
        <div className="text-white text-center">
          <h1 className="font-semibold text-2xl">Affan Abdullah Izzdiin</h1>
          <p>affana959@gmail.com</p>
        </div>
        <div className="flex gap-2">
          <div className="flex rounded-full border border-gray-400 p-4 text-2xl text-gray-400 hover:border-blue-500  hover:text-blue-500 cursor-pointer">
            <BsGithub />
          </div>
          <div className="flex rounded-full border border-gray-400 p-4 text-2xl text-gray-400 hover:border-blue-500  hover:text-blue-500 cursor-pointer">
            <BsGithub />
          </div>
          <div className="flex rounded-full border border-gray-400 p-4 text-2xl text-gray-400 hover:border-blue-500  hover:text-blue-500 cursor-pointer">
            <BsGithub />
          </div>
        </div>
        <button className="rounded-full font-semibold  inline-flex items-center gap-2 bg-blue-500 py-4 w-full justify-center text-[#222] outline outline-none hover:bg-transparent hover:outline-blue-500 hover:text-blue-500 transition-all duration-300 ease-in-out">
          <BiEnvelope className="text-2xl" />
          <span>Kontak Saya</span>
        </button>
      </div>
    </div>
  );
}

export default UserCard;
