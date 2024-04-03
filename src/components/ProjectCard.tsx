"use client";

import Image, { StaticImageData } from "next/image";
import React, { useState } from "react";
import { Button, Carousel, Modal } from "flowbite-react";
import { AiFillGithub, AiOutlineGlobal } from "react-icons/ai";
import { PiAndroidLogoFill } from "react-icons/pi";
import { type ProjectData } from "@/types/ProjectData";
import { FadeDirection } from "@/types/FadeDirection";

interface Props {
  data?: ProjectData;
  fadeDir?: FadeDirection; 
}
function ProjectItem({ data, fadeDir = FadeDirection.Left }: Props) {
  const [openModal, setOpenModal] = useState(false);
  if (!data) {
    return <>aada</>;
  }
  return (
    <>
      <div data-aos={`fade-${fadeDir}`}>
        <div
          className="w-full 2xl:h-[480px] h-48  relative rounded-3xl peer mb-4 cursor-pointer group/project"
          onClick={() => setOpenModal(true)}
        >
          <div className="w-full h-full relative">
            <Image
              src={data?.imagePath}
              fill
              style={{ objectFit: "cover", zIndex: 2 }}
              alt=""
              className="rounded-3xl"
            />
          </div>
          <div className="2xl:flex hidden items-center gap-2 z-50 2xl:absolute bottom-3 left-3">
            {data.framework.map((item: string, index: number) => (
              <div
                key={index}
                className="rounded-full bg-[#222] group-hover/project:bg-white py-4 px-6 text-white group-hover/project:text-[#222] font-semibold transition-all ease-in-out duration-300"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
        <div className="flex 2xl:hidden items-center gap-2 z-50 2xl:absolute bottom-3 left-3">
          {data.framework.map((item: string, index: number) => (
            <div
              key={index}
              className="rounded-full bg-[#222] text-white shadow-border px-2 py-1 mb-4"
            >
              {item}
            </div>
          ))}
        </div>
        <h1 className="peer-hover:underline text-4xl text-white">
          {data.name}
        </h1>
      </div>

      <Modal
        show={openModal}
        onClose={() => setOpenModal(false)}
        className=""
        size={"5xl"}
        theme={{
          root: {
            base: "fixed inset-x-0 top-0 z-50 h-screen overflow-y-auto overflow-x-hidden 2xl:inset-0 2xl:h-full ",
            show: {
              on: "flex bg-gray-900 bg-opacity-50  transition-all ease-in-out duration-1000",
            },
          },

          content: {
            base: "relative h-full w-full p-4 2xl:h-auto ",
            inner:
              "relative flex max-h-[90dvh] flex-col rounded-lg bg-[#222] shadow",
          },
          header: {
            base: "flex items-start justify-between rounded-t border-b  border-gray-700 p-5",
            popup: "border-b-0 p-2",
            title: "text-xl font-medium text-white ",
            close: {
              base: "ml-auto inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-white hover:bg-gray-200 hover:text-white  ",
              icon: "h-5 w-5",
            },
          },
          footer: {
            base: "flex items-center space-x-2 rounded-b border-gray-200 p-6 dark:border-gray-600",
            popup: "border-t  border-gray-700",
          },
        }}
      >
        <Modal.Header className="text-white">{data.name}</Modal.Header>
        <Modal.Body>
          <div className="w-full h-[400px]  order-1 mb-4">
            {data.vidoPath && data.vidoPath !== "" ? (
              <Carousel slide={false}>
                {data.imageList.map((imagePath: string, index: number) => (
                  <div className="w-full h-full rounded-3xl" key={index}>
                    <Image
                      src={imagePath}
                      alt={`Image ${index}`}
                      fill
                      style={{ objectFit: "contain" }}
                    />
                  </div>
                ))}

                <video src={data.vidoPath} className="" controls autoPlay />
              </Carousel>
            ) : (
              <Carousel slideInterval={4000}>
                {data.imageList.map((imagePath: string, index: number) => (
                  <div className="w-full h-full rounded-3xl" key={index}>
                    <Image
                      src={imagePath}
                      alt={`Image ${index}`}
                      fill
                      style={{ objectFit: "contain" }}
                    />
                  </div>
                ))}
              </Carousel>
            )}
          </div>
          <div className="space-y-6">
            <p className="text-base leading-relaxed text-white">
              {data.deskripsi}
            </p>
            <p className="text-base leading-relaxed text-white">{data.tech}</p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <div className="flex items-center gap-4">
            {data.linkApk && data.linkApk !== "" && (
              <div>
                <a
                  href={data.linkApk}
                  target="_blank"
                  className="inline-flex items-center justify-start px-4 py-2 bg-blue-500 rounded-lg text-[#222] hover:text-blue-500 hover:outline-blue-500 outline outline-none hover:bg-transparent "
                >
                  <PiAndroidLogoFill />
                  <span className="ml-2">Link Apk</span>
                </a>
              </div>
            )}
            {data.linkGithub && data.linkGithub !== "" && (
              <div>
                <a
                  href={data.linkGithub}
                  target="_blank"
                  className="inline-flex items-center justify-start px-4 py-2 bg-blue-500 rounded-lg text-[#222] hover:text-blue-500 hover:outline-blue-500 outline outline-none hover:bg-transparent "
                >
                  <AiFillGithub />
                  <span className="ml-2">Link Repository</span>
                </a>
              </div>
            )}
            {data.linkWeb && data.linkWeb !== "" && (
              <div>
                <a
                  href={data.linkWeb}
                  target="_blank"
                  className="inline-flex items-center justify-start px-4 py-2 bg-blue-500 rounded-lg text-[#222] hover:text-blue-500 hover:outline-blue-500 outline outline-none hover:bg-transparent "
                >
                  <AiOutlineGlobal />
                  <span className="ml-2">Link Website</span>
                </a>
              </div>
            )}
          </div>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ProjectItem;
