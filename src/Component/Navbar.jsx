import React from 'react'


function Navbar() {
   
  return (
<>
<nav className="flex flex-wrap justify-between md:items-center text-white px-10 pt-10 md:px-20">
<span className="text-2xl font-bold tracking-wide">Portfolio</span> 
<ul className={`   mx-4 py-2 font-semibold md: mt-5 bg-black px-2 rounded-xl bg-opacity-30 md:border-none text-center md:bg-transparent md:static md:mx-0 md:flex gap-6`}>
    <a href="#home">
         <li className="text-md transition-all duration-300 p-1 md:p-0">Home </li>
    </a>
   <a href="#about">
    <li className="text-md transition-all duration-300 p-1 md:p-0">About</li>
   </a>
   <a href="#experience">
    <li className="text-md transition-all duration-300 p-1 md:p-0">Experience</li>
   </a>
    <a href="#project"> <li className="text-md transition-all duration-300 p-1 md:p-0">Project</li>
    </a>

    <a href="#contact">
        <li className="text-md transition-all duration-300 p-1 md:p-0">Contact</li>
    </a>
    
</ul>
 
</nav>
</>
     
   
  )
}

export default Navbar
