import React from "react";
import Content from "../Content";
import { PiChartBarHorizontalLight } from "react-icons/pi";
import ServiceCards from "../ServiceCards";
import { CiGlobe } from "react-icons/ci";
import { BsPhone } from "react-icons/bs";

function Service() {
  return (
    <Content Icon={PiChartBarHorizontalLight} tag="Service">
      <div className="flex flex-col gap-16 py-16">
        <h2 className="text-white text-5xl">
          My <span className="text-blue-500">Specializations</span>
        </h2>
        <div className="flex flex-col gap-2">
          <ServiceCards
            aos="fade-right"
            title="Web Developer"
            description="Custom web development for front-end and back-end, focus on visual engage and responsive designs."
            count={10}
            Icon={CiGlobe}
          />
          <ServiceCards
            aos="fade-left"
            title="Mobile Developer"
            description="Build Android application focus on user flow and user experience"
            count={10}
            Icon={BsPhone}
          />
        </div>
      </div>
    </Content>
  );
}

export default Service;
