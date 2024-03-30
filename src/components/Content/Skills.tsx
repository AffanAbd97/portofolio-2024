import React from 'react'
import { PiChartBarHorizontalLight } from 'react-icons/pi'
import { SiFigma, SiJavascript, SiJetpackcompose, SiMysql, SiTailwindcss } from 'react-icons/si'
import Content from '../Content'
import { BsBootstrapFill } from 'react-icons/bs';
import { DiPhp, DiHtml5, DiCss3, DiReact } from 'react-icons/di';
import { FaLaravel } from 'react-icons/fa6';
import { TbBrandKotlin } from 'react-icons/tb';

function Skills() {
    const icons = [
        SiTailwindcss,
        FaLaravel,
        DiPhp,
        SiMysql,
        BsBootstrapFill,
        DiHtml5,
        DiCss3,
        SiJavascript,
        TbBrandKotlin,
        SiJetpackcompose,
        DiReact,
        SiFigma,
      ];
    
      const labels = [
        "Tailwind CSS",
        "Laravel",
        "PHP",
        "MySQL",
        "Bootstrap",
        "HTML5",
        "CSS3",
        "JavaScript",
        "Kotlin",
        "Jetpack Compose",
        "React JS",
        "Figma",
      ];
  return (
    <Content Icon={PiChartBarHorizontalLight} tag="Skills">
    <div className="flex flex-col gap-16 py-16">
      <h2 className="text-white text-5xl">
        My <span className="text-blue-500">Specializations</span>
      </h2>
      <div className="grid md:grid-cols-6 grid-cols-2 gap-4 items-center mx-auto">
        {icons.map((Icon, index) => (
          <div
            key={index}
            className=" group flex items-center justify-center "
            data-aos={`fade-${
              index % 5 === 0
                ? "right"
                : index % 5 === 1
                ? "down"
                : index % 5 === 2
                ? "up"
                : index % 5 === 3
                ? "left"
                : "down"
            }`}
          >
            <div className=" rounded-lg p-10 transform transition-all  group-hover:bg-transparent outline group-hover:outline-blue-500 outline-none relative  group-hover:absolute  group-hover:z-20 group-hover:scale-110">
              <Icon className="text-white transform transition-all group-hover:text-blue-500 text-xl h-16 w-16" />
              <p
                className={`leading-none text-center transform transition-all group-hover:block group-hover:text-blue-500 hidden  absolute inset-x-0 ${
                  Icon === SiJetpackcompose ? "bottom-4" : "bottom-3"
                } `}
              >
                {labels[index]}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </Content>
  )
}

export default Skills