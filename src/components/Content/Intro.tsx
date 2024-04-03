import React from "react";
import Content from "../Content";
import { BiHome } from "react-icons/bi";
import { MdKeyboardArrowDown, MdKeyboardArrowLeft } from "react-icons/md";
import Link from "next/link";
function Intro() {
  return (
    <Content Icon={BiHome} tag="Introduction" id="home">
      <div className="flex flex-col gap-16 py-16">
        <h1 className="text-white text-5xl 2xl:text-7xl">
          Hi, I&apos;m{" "}
          <span className="text-blue-500">Affan Abdullah Izzuddin</span>
        </h1>
        <p className="text-gray-400 text-lg">
          I&apos;m a fresh graduate with a degree in Informatics Engineering,
          passionate about web development and mobile development.
        </p>
      </div>
      <div className="w-full flex items-center justify-end">
        <Link
          href="#portfolio"
          className="animate-bounce inline-flex justify-center items-center text-gray-300 outline outline-white p-6 text-3xl rounded-full writing-vertical hover:underline underline-offset-2"
        >
          Project
          <MdKeyboardArrowDown />
        </Link>
      </div>
    </Content>
  );
}

export default Intro;
