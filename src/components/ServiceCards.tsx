import React from "react";
import { IconType } from "react-icons";
import { BiCode } from "react-icons/bi";

interface ServiceProps {
  Icon: IconType;
  title: string;
  description: string;
  count: number;
  aos: string;
}

function ServiceCards({ Icon, title, description, count, aos }: ServiceProps) {

  return (
    <div
      data-aos={aos}
      className="w-full py-10 px-10 bg-transparent rounded-3xl service-border group/service transition-all ease-in-out duration-100"
    >
      <div className="w-full flex justify-between items-center">
        <h5 className="mb-2 text-2xl  tracking-tight text-white ">{title}</h5>
        <Icon className="text-4xl text-blue-500" />
      </div>

      <p className="mb-3 font-normal text-gray-400 ">{description}</p>
      <p className="group-hover/service:underline underline-offset-4 text-gray-300  transition-all ease-in-out duration-100">
        {count} Project
      </p>
    </div>
  );
}

export default ServiceCards;
