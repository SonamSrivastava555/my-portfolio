import React from "react";
import { FaCss3, FaFigma, FaHtml5, FaJs, FaReact } from "react-icons/fa";
import { RiTailwindCssLine } from "react-icons/ri";
import { FaGoogle } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa6";;
import { RiNetflixFill } from "react-icons/ri";
import { FaAmazon } from "react-icons/fa";
import { FaGit } from "react-icons/fa";
const Experience = () => {
  return (
    <div id="experience" className="p-10 md:p-24 my-15 rounded-md text-white bg-sky-950 w-300 mx-auto">
      <h1 className=" md:text-4xl text-white  text-center m-3 text-4xl font-bold">Experience</h1>
      <div className="flex flex-wrap items-center justify-around">
        <div className="flex flex-wrap md:w-2/5 gap-8 md:p-12 py-10">
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaHtml5 color="#E34F26" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaCss3 color="#1572B6" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaReact color="#61DAFB" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaJs color="#F7DF1E" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaFigma color="#F24E1E" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaBootstrap color="#47A248" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <RiTailwindCssLine color="#FF4438" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaGit color="#FF4438" size={50} />
          </span>
        </div>
        <div>
          <div className="flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-center">
           
            <span className="text-white">
              <h2 className="leading-tight">Freelace Project </h2>
              <h3>Gurukul Academy</h3>
              <p className="text-sm leading-tight font-thin">Developed and maintained the Gurukul Academy website.</p>
             <ul className="text-sm p-2">
                <li>- Built responsive UI using React, HTML, CSS</li>
                <li>- Implemented interactive features and progress bars for skill sections. </li>
                <li>- Collaborated remotely, delivering solutions in a freelance capacity.</li>
               
              </ul>
            </span>
          </div>
          <div className="flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg  p-4 items-center">
            
            <span className="text-white">
              <h2 className="leading-tight">GLobal Homeopathy clinic</h2>
              <p className="text-sm leading-tight font-thin">
                Developed and maintained responsive website for Global Homeopathy Clinic.
              </p>
              <ul className="text-sm p-2">
                <li>- Integrated online appointment and contact features for better patient access</li>
                <li>- Designed clean and user-friendly UI using React, HTML, CSS, and Brapl</li>
                <li>- Implemented secure patient data forms and digital consultation interface.</li>
              </ul>
            </span>
          </div>
          <div className="flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg  p-4 items-center">
          
            <span className="text-white">
              <h2 className="leading-tight">Food delivery website for Khichdi Express </h2 >
              <p className="text-sm leading-tight font-thin">
               Developed a responsive food delivery website for Khichdi Express in Triveni Nagar, Lucknow.
              </p>
              <ul className="text-sm p-2">
                <li>- Designed an easy-to-navigate menu for Indian and Chinese cuisine.</li>
                <li>- Integrated online ordering and delivery tracking features.</li>
              </ul>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;