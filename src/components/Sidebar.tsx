import { Tooltip } from "flowbite-react";
import Link from "next/link";
import React from "react";
import { BiMoon, BiUser } from "react-icons/bi";
import { BsBag } from "react-icons/bs";
import { CiBag1 } from "react-icons/ci";
import { FaBars } from "react-icons/fa6";
import { PiBag } from "react-icons/pi";

function Sidebar() {
  return (
    <>
      <div className="md:fixed hidden md:block right-16 top-1/4 ">
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
                <BiUser className="text-2xl" />
              </Link>
            </Tooltip>
          </li>
          
        </ul>
      </div>
    </>
  );
}

export default Sidebar;