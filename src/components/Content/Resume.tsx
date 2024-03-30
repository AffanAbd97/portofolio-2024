import React from 'react'
import Content from '../Content'
import { BsBag } from 'react-icons/bs'

function Resume() {
  return (
    <Content Icon={BsBag} tag="Resume">
    <div className="flex flex-col gap-16 py-16">
      <h2 className="text-white text-5xl">
        Education & <span className="text-blue-500">Experience</span>
      </h2>
      <ol className="relative border-s border-gray-200 ">
        <li className="mb-10 ms-6 group/timeline" data-aos="fade-down">
          <span className="absolute flex items-center justify-center w-4 h-4 bg-blue-100 group-hover/timeline:bg-blue-500 rounded-full -start-2 transition-all duration-300 ease-in-out"></span>
          <h3 className="flex items-center mb-1 text-xl font-semibold text-white group-hover/timeline:text-blue-500 transition-all duration-300 ease-in-out">
            Web Programmer Intern - Internship
            <span className="bg-blue-100 text-blue-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded ms-3">
              Latest
            </span>
          </h3>
          <time className="block mb-2 text-sm font-normal leading-none text-gray-400 ">
            November 2023 - April 2024
          </time>

          <p className="mb-4 text-base font-normal text-gray-500 ">
            UDINUS Data and Information Technical Implementation Unit
          </p>
        </li>
        <li className="mb-10 ms-6 group/timeline" data-aos="fade-down">
          <span className="absolute flex items-center justify-center w-4 h-4 bg-blue-100 group-hover/timeline:bg-blue-500 rounded-full -start-2 transition-all duration-300 ease-in-out"></span>
          <h3 className="flex items-center mb-1 text-xl font-semibold text-white group-hover/timeline:text-blue-500 transition-all duration-300 ease-in-out">
            Mobile Development Cohorts - Training Program
          </h3>
          <time className="block mb-2 text-sm font-normal leading-none text-gray-400 ">
            February 2023 - July 2023
          </time>

          <p className="mb-4 text-base font-normal text-gray-500 ">
            Bangkit Academy 2023 Batch 1 - Mobile Development
          </p>
        </li>
        <li className="mb-10 ms-6 group/timeline" data-aos="fade-down">
          <span className="absolute flex items-center justify-center w-4 h-4 bg-blue-100 group-hover/timeline:bg-blue-500 rounded-full -start-2 transition-all duration-300 ease-in-out"></span>
          <h3 className="flex items-center mb-1 text-xl font-semibold text-white group-hover/timeline:text-blue-500 transition-all duration-300 ease-in-out">
            Team members of the Research and Development division -
            Organisation
          </h3>
          <time className="block mb-2 text-sm font-normal leading-none text-gray-400 ">
            August 2022 - July 2023
          </time>

          <p className="mb-4 text-base font-normal text-gray-500 ">
            Dian Nuswantoro Computer Club
          </p>
        </li>
        <li className="mb-10 ms-6 group/timeline" data-aos="fade-down">
          <span className="absolute flex items-center justify-center w-4 h-4 bg-blue-100 group-hover/timeline:bg-blue-500 rounded-full -start-2 transition-all duration-300 ease-in-out"></span>
          <h3 className="flex items-center mb-1 text-xl font-semibold text-white group-hover/timeline:text-blue-500 transition-all duration-300 ease-in-out">
            Team members of the Website division - Organisation
          </h3>
          <time className="block mb-2 text-sm font-normal leading-none text-gray-400 ">
            September 2022 - July 2023
          </time>

          <p className="mb-4 text-base font-normal text-gray-500 ">
            Dian Nuswantoro Computer Club
          </p>
        </li>
        <li className="mb-10 ms-6 group/timeline" data-aos="fade-down">
          <span className="absolute flex items-center justify-center w-4 h-4 bg-blue-100 group-hover/timeline:bg-blue-500 rounded-full -start-2 transition-all duration-300 ease-in-out"></span>
          <h3 className="flex items-center mb-1 text-xl font-semibold text-white group-hover/timeline:text-blue-500 transition-all duration-300 ease-in-out">
            Bachelor of Informatics Engineering - University
          </h3>
          <time className="block mb-2 text-sm font-normal leading-none text-gray-400 ">
            September 2020 - April 2024
          </time>

          <p className="mb-4 text-base font-normal text-gray-500 ">
            Dian Nuswantoro University - GPA: 3.75
          </p>
        </li>
      </ol>
    </div>
  </Content>
  )
}

export default Resume