import React from 'react'
import Content from '../Content'
import { BiHome } from 'react-icons/bi'

function Intro() {
  return (
    <Content Icon={BiHome} tag="Introduction" id='home'>
    <div className="flex flex-col gap-16 py-16">
      <h1 className="text-white text-5xl lg:text-7xl">
        Hi, I&apos;m{" "}
        <span className="text-blue-500">Affan Abdullah Izzuddin</span>
      </h1>
      <p className="text-gray-400">
        I am a junior developer. I am currently studying at the
        university Dian Nuswantoro Semarang majoring in informatics
        engineering, I have experience in web development and Android
        Development .
      </p>
    </div>
  </Content>

  )
}

export default Intro