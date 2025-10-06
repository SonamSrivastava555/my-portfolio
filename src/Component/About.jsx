import React from 'react'
import Sonam_about from "../assets/Sonam_about.jpg"

const About = () => {
  return (
    <div id="about" className="text-white bg-sky-950 max-w-6xl w-full mx-auto rounded-md p-4 md:p-12">
      <h1 className="text-center mb-6 text-3xl md:text-4xl font-bold">About me</h1>
      <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
        {/* Responsive Image */}
        <div className="flex-shrink-0 flex justify-center w-full md:w-auto">
          <img
            className="h-40 w-40 md:h-56 md:w-56 object-cover rounded-full shadow-lg border-4 border-gray-200 transition-all duration-500 ease-in-out hover:scale-105 hover:opacity-90"
            src={Sonam_about}
            alt="Profile"
          />
        </div>
        {/* About Text & Progress Bars */}
        <div className="flex flex-col gap-5 font-bold text-base md:text-lg w-full">
          <p>
            I’m a frontend developer with 4 years of freelance experience. I have built projects for Gurukul Academy and Global Homeopath Clinic using React, JavaScript, HTML, and CSS. I love building clean, responsive, and user-friendly websites.
          </p>
          <p>
            My passion for frontend development is not only reflected in my extensive experience but also in the enthusiasm and dedication I bring to each project.
          </p>
          <div className="flex flex-col gap-4 mt-2">
            <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-8">
              <span>HTML</span>
              <hr className="w-full md:w-96 h-3 bg-gradient-to-r from-purple-800 to-pink-700 rounded-lg border-none" />
            </div>
            <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-8">
              <span>CSS</span>
              <hr className="w-full md:w-64 h-3 bg-gradient-to-r from-purple-800 to-pink-700 rounded-lg border-none" />
            </div>
            <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-8">
              <span>JavaScript</span>
              <hr className="w-full md:w-48 h-3 bg-gradient-to-r from-purple-800 to-pink-700 rounded-lg border-none" />
            </div>
            <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-8">
              <span>React JS</span>
              <hr className="w-full md:w-80 h-3 bg-gradient-to-r from-purple-800 to-pink-700 rounded-lg border-none" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About;





