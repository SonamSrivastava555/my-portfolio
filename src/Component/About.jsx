import React from 'react'
import Sonam_about  from "../assets/Sonam_about.jpg"
const About = () => {
  return (
    <div id="about" className="text-white bg-sky-950 w-300 mx-auto rounded-md "> 
      <div >
        <h1 className="text-center m-3 text-4xl font-bold ">About me</h1>
      </div>
      <div className='flex '>
        <div >
          <img className='h-34 w-34  object-cover rounded-full shadow-lg border-4 border-gray-200 mr-60 ml-5 transition-all duration-500 ease-in-out hover:scale-130 hover:opacity-90' src={Sonam_about} alt="" />
        </div>
        <div className='flex flex-col gap-5 font-bold text-lg'>
        <p>
               I’m a frontend developer with 4 years of freelance experience. I have
        built projects for Gurukul Academy and Global Homeopath Clinic using
        React, JavaScript, HTML, and CSS. I love building clean, responsive, and
        user-friendly websites.
        </p>
        <p>My passion for frontend development is not only reflected in my extensive experience but also in the enthusiasm and dedication I bring to each project.</p>
         <div className='flex flex-col gap-5 '>
        <div className='flex gap-14 items-center transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300  '>
          <p>HTML</p><hr className='w-96 border-none outline-none h-3 bg-gradient-to-r from-purple-800 to-pink-700 rounded-lg  ' />
        </div>
        <div className='flex gap-14 items-center transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300 '  >
          <p>CSS</p><hr className='w-64 border-none outline-none h-3 bg-gradient-to-r from-purple-800 to-pink-700 rounded-lg ' />
        </div>
        <div className='flex gap-14 items-center transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300 '>
          <p>JavaScript</p><hr className='w-48 border-none outline-none h-3 bg-gradient-to-r from-purple-800 to-pink-700 rounded-lg' />
        </div>
        <div className='flex gap-14 items-center transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300 '>
          <p>React JS</p><hr className='w-80 border-none outline-none h-3 bg-gradient-to-r from-purple-800 to-pink-700 rounded-lg' />
        </div>
       </div>
      
       </div>
       
      </div>
     
      
     
</div>

  )
}

export default About