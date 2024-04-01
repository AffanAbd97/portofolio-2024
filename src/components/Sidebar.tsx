import { Tooltip } from "flowbite-react";
import Link from "next/link";
import React from "react";
import { BiUser } from "react-icons/bi";
import { BsBoxes } from "react-icons/bs";
import { CgLoadbarDoc, CgMail } from "react-icons/cg";
import { PiBriefcase, PiChartBarHorizontal } from "react-icons/pi";

function Sidebar() {
  return (
    <>
      <div className="lg:fixed hidden lg:block right-16 top-1/4 ">
        {/* <ul className="bg-gratext-gray-300 rounded p-2 mb-2 ">
          <li className="peer text-gray-300 p-2  hover:text-blue-500 flex justify-center flex-col items-center ">
            <FaBars className="text-2xl" />
          </li>
          <li className="peer text-gray-300 p-2  hover:text-blue-500 flex justify-center flex-col items-center ">
            <BiMoon className="text-2xl" />
          </li>
        </ul> */}

        <ul className="bg-[#222] rounded-full p-2 shadow-border">
          <li className="peer text-gray-300 p-2  hover:text-blue-500 ">
            <Tooltip content="Introduction" placement="left">
              <Link
                href={"#home"}
                className="inline-flex justify-center flex-col items-center "
              >
                <BiUser className="text-2xl" />
              </Link>
            </Tooltip>
          </li>
          <li className="peer text-gray-300 p-2  hover:text-blue-500 ">
            <Tooltip content="Resume" placement="left">
              <Link
                href={"#resume"}
                className="inline-flex justify-center flex-col items-center "
              >
                <PiBriefcase   className="text-2xl" />
              </Link>
            </Tooltip>
          </li>
          <li className="peer text-gray-300 p-2  hover:text-blue-500 ">
            <Tooltip content="Service" placement="left">
              <Link
                href={"#service"}
                className="inline-flex justify-center flex-col items-center "
              >
                <PiChartBarHorizontal  className="text-2xl" />
              </Link>
            </Tooltip>
          </li>
          <li className="peer text-gray-300 p-2  hover:text-blue-500 ">
            <Tooltip content="Skill" placement="left">
              <Link
                href={"#skill"}
                className="inline-flex justify-center flex-col items-center "
              >
                <BsBoxes  className="text-2xl" />
              </Link>
            </Tooltip>
          </li>
          <li className="peer text-gray-300 p-2  hover:text-blue-500 ">
            <Tooltip content="Portfolio" placement="left">
              <Link
                href={"#portfolio"}
                className="inline-flex justify-center flex-col items-center "
              >
                <CgLoadbarDoc   className="text-2xl" />
              </Link>
            </Tooltip>
          </li>
          <li className="peer text-gray-300 p-2  hover:text-blue-500 ">
            <Tooltip content="Contact" placement="left">
              <Link
                href={"#contact"}
                className="inline-flex justify-center flex-col items-center "
              >
                <CgMail   className="text-2xl" />
              </Link>
            </Tooltip>
          </li>
          
        </ul>
      </div>
    </>
  );
}

export default Sidebar;
