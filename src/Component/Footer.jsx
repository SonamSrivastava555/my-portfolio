import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div
      id="contact"
      className="bg-sky-950 text-white max-w-max mx-auto w-full m-5 rounded-md p-6 md:p-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-y-6 md:gap-x-12"
    >
      <div>
    <h1 className="text-3xl md:text-5xl font-bold mb-4 md:mb-0">Contact Me</h1>
  </div>

   <ul className="text-sm md:text-xl flex flex-col md:flex-row gap-y-4 md:gap-x-8 items-start md:items-center w-full md:w-auto">
    <li className="flex gap-2 items-center whitespace-nowrap">
      <MdOutlineEmail size={20} />
      <a href="mailto:srivastavasonam555@gmail.com" className="underline hover:text-blue-300">
        srivastavasonam555
      </a>
    </li>

    <li className="flex gap-2 items-center whitespace-nowrap">
      <CiLinkedin size={20} />
      <a href="https://linkedin.com/in/sonamsrivastava555" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-300 truncate max-w-[180px] md:max-w-none">
        linkedin.com/in/sonamsrivastava555
      </a>
    </li>

    <li className="flex gap-2 items-center whitespace-nowrap">
      <FaGithub size={20} />
      <a href="https://github.com/SonamSrivastava555" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-300 truncate max-w-[180px] md:max-w-none">
        github.com/SonamSrivastava555
      </a>
    </li>
  </ul>
    </div>
  );
};
export default Footer;