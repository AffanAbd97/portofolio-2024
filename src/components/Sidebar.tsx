import React from "react";
import { BiMoon, BiUser } from "react-icons/bi";
import { FaBars } from "react-icons/fa6";

function Sidebar() {
  return (
    <>
      <div>
        <ul className="bg-white rounded p-2 mb-2">
          <li className="peer text-[#222] p-2  hover:text-blue-500 flex justify-center flex-col items-center ">
            <FaBars className="text-2xl" />
          </li>
          <li className="peer text-[#222] p-2  hover:text-blue-500 flex justify-center flex-col items-center ">
            <BiMoon className="text-2xl" />
          </li>
        </ul>

        <ul className="bg-white rounded p-2">
          <li className="peer text-[#222] p-2  hover:text-blue-500 border-b">
            <div className="inline-flex justify-center flex-col items-center ">
              <BiUser className="text-2xl" />
              <p className="text-sm">User</p>
            </div>
          </li>
          <li className="peer text-[#222] p-2  hover:text-blue-500 border-b">
            <div className="inline-flex justify-center flex-col items-center ">
              <BiUser className="text-2xl" />
              <p className="text-sm">User</p>
            </div>
          </li>
          <li className="peer text-[#222] p-2  hover:text-blue-500 border-b">
            <div className="inline-flex justify-center flex-col items-center ">
              <BiUser className="text-2xl" />
              <p className="text-sm">User</p>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Sidebar;
