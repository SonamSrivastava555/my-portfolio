import React from "react";
import Sonam_img  from "../assets/Sonam_img.png"
import TextChanger from "../TextChanger";

const Home = () => {
  return (
    <div id="home" className="text-white flex w-full justify-between items-start p-10 md:p-20">
      <div className="md:w-2/4 md:pt-10 ">
        <h1 className="text-xl md:text-6xl font-bold flex leading-normal tracking-tighter">
          <TextChanger/>
        </h1>
        <p className="text-sm md:text-2xl tracking-tight ">
          I am a self-taught Frontend Developer with skills in HTML, CSS, JavaScript, React.js, Redux, Tailwind CSS, and Bootstrap. 
        </p>
        <div className="mt-10">
          <a href="mailto:srivastavasonam555@email.com" className="mt-5 md:md-10 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697] m-20 ">
         Contact me
        </a>

        <a
  href="/SonamNewCvpdf.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="mt-15 md:md-10 text-white py02 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697] m-20"
>
  My Resume
</a>
        </div>
         
      </div>
      <div>
       <img
  className="h-64 w-64  object-cover rounded-full shadow-lg border-4 border-gray-200 mr-60 transition-all duration-500 ease-in-out hover:scale-130 hover:opacity-90"
  src={Sonam_img}
  alt="My image"
/>
      </div>
    </div>
  );
};

export default Home;