import React from "react";
import { FaCss3, FaFigma, FaHtml5, FaJs, FaReact, FaGoogle, FaBootstrap, FaAmazon, FaGit } from "react-icons/fa";
import { RiTailwindCssLine, RiNetflixFill } from "react-icons/ri";

const Experience = () => {
  return (
    <div
      id="experience"
      className="p-6 md:p-12 my-8 rounded-md text-white bg-sky-950 max-w-6xl w-full mx-auto"
    >
      <h1 className="text-3xl md:text-4xl text-white text-center m-3 font-bold">
        Experience
      </h1>
      <div className="flex flex-col md:flex-row flex-wrap items-center justify-between">
        {/* Skill Icons */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:w-2/5 p-4 md:p-8">
          <span className="p-3 bg-zinc-950 flex items-center justify-center rounded-2xl">
            <FaHtml5 color="#E34F26" size={40} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center justify-center rounded-2xl">
            <FaCss3 color="#1572B6" size={40} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center justify-center rounded-2xl">
            <FaReact color="#61DAFB" size={40} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center justify-center rounded-2xl">
            <FaJs color="#F7DF1E" size={40} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center justify-center rounded-2xl">
            <FaFigma color="#F24E1E" size={40} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center justify-center rounded-2xl">
            <FaBootstrap color="#7952B3" size={40} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center justify-center rounded-2xl">
            <RiTailwindCssLine color="#38BDF8" size={40} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center justify-center rounded-2xl">
            <FaGit color="#F1502F" size={40} />
          </span>
        </div>
        {/* Project Experiences */}
        <div className="w-full md:w-3/5">
          <div className="flex flex-col gap-4">
            <div className="bg-slate-950 bg-opacity-45 rounded-lg p-4">
              <span className="text-white">
                <h2 className="leading-tight font-semibold">Freelace Project</h2>
                <h3>Gurukul Academy</h3>
                <p className="text-sm leading-tight font-thin">
                  Developed and maintained the Gurukul Academy website.
                </p>
                <ul className="text-sm p-2 list-disc ml-4">
                  <li>Built responsive UI using React, HTML, CSS</li>
                  <li>Implemented interactive features and progress bars for skill sections.</li>
                  <li>Collaborated remotely, delivering solutions in a freelance capacity.</li>
                </ul>
              </span>
            </div>
            <div className="bg-slate-950 bg-opacity-45 rounded-lg p-4">
              <span className="text-white">
                <h2 className="leading-tight font-semibold">Global Homeopathy clinic</h2>
                <p className="text-sm leading-tight font-thin">
                  Developed and maintained responsive website for Global Homeopathy Clinic.
                </p>
                <ul className="text-sm p-2 list-disc ml-4">
                  <li>Integrated online appointment and contact features for better patient access</li>
                  <li>Designed clean and user-friendly UI using React, HTML, CSS, and Bootstrap</li>
                  <li>Implemented secure patient data forms and digital consultation interface.</li>
                </ul>
              </span>
            </div>
            <div className="bg-slate-950 bg-opacity-45 rounded-lg p-4">
              <span className="text-white">
                <h2 className="leading-tight font-semibold">Food delivery website for Khichdi Express</h2>
                <p className="text-sm leading-tight font-thin">
                  Developed a responsive food delivery website for Khichdi Express in Triveni Nagar, Lucknow.
                </p>
                <ul className="text-sm p-2 list-disc ml-4">
                  <li>Designed an easy-to-navigate menu for Indian and Chinese cuisine.</li>
                  <li>Integrated online ordering and delivery tracking features.</li>
                </ul>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;






