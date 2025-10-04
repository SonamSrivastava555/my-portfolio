import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div
      id="contact"
      className="flex justify-around  m-10   bg-sky-950 w-300 mx-auto rounded-md  text-white p-10 md:p-12 items-center"
    >
      <div>
        <h1 className="text-2xl md:text-6xl font-bold">Contact Me</h1>
        
        
      </div>

      <ul className="text-sm md:text-xl">
        
           <li className="flex gap-1 items-center">
          <MdOutlineEmail size={20} />
         <a  href="mailto:srivastavasonam555@gmail.com"
    className="underline hover:text-blue-300">
      srivastavasonam555
    </a>
        </li>
       
       
        <li className="flex gap-1 items-center">
          <CiLinkedin />
          <a  href="https://linkedin.com/in/sonamsrivastava555"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-blue-300">
               linkedin.com/in/sonamsrivastava555
            </a>
         
        </li>
        <li className="flex gap-1 items-center">
          <FaGithub />
          <a href="https://github.com/SonamSrivastava555" target="_blank" rel="noopener noreferrer"
            className="underline hover:text-blue-300">
           github.com/SonamSrivastava555/Calculator
          </a>
       
        </li>
      </ul>
    </div>
  );
};

export default Footer;