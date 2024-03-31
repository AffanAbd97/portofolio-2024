import React from "react";
import Content from "../Content";
import { BsBag } from "react-icons/bs";
import { CgMail } from "react-icons/cg";

function Contact() {
  return (
    <Content Icon={CgMail} tag="Contact" id="contact">
      <div className="flex flex-col gap-16 py-16">
        <h2 className="text-white text-5xl">
          Let&apos;s Work <span className="text-blue-500"> Together!</span>
        </h2>
        <form action="https://formsubmit.co/affana959@gmail.com" method="POST">
          <div className="relative z-0 mb-6 w-full group">
            <input
              type="email"
              name="email"
              className="block py-2.5 px-0 w-full text-sm text-gray-300 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-500 peer"
              placeholder=" "
              required
              id="email"
            />
            <label
              htmlFor="email"
              className="absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-500  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Email address
            </label>
          </div>
          <div className="relative z-0 mb-6 w-full group">
            <input
              type="text"
              name="name"
              id="name"
              className="block py-2.5 px-0 w-full text-sm text-gray-300 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-500 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="name"
              className="absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-500  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Name
            </label>
          </div>
          <div className="relative z-0 mb-6 w-full group">
            <textarea
              name="message"
              id="message"
              className=" resize-none block py-2.5 px-0 w-full text-sm text-gray-300 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-500 peer"
              placeholder=" "
              required
              cols={30}
              rows={5}
            ></textarea>
            <label
              htmlFor="message"
              className="absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-500  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Message
            </label>
          </div>
          <button
            type="submit"
            className="rounded-xl font-semibold  inline-flex items-center gap-2 bg-blue-500 py-4 w-full justify-center text-[#222] outline outline-none hover:bg-transparent hover:outline-blue-500 hover:text-blue-500 transition-all duration-300 ease-in-out"
          >
            Submit
          </button>
        </form>

        
      </div>
    </Content>
  );
}

export default Contact;
