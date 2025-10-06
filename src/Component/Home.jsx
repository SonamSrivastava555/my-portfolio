import React from "react";
import Sonam_img from "../assets/Sonam_img.png";
import TextChanger from "../TextChanger";

const Home = () => {
  return (
    <div
      id="home"
      className="text-white flex flex-col-reverse md:flex-row items-center md:items-start w-full max-w-4xl mx-auto p-6 md:p-20 gap-10 md:gap-0"
    >
      {/* Left Section: Content */}
      <div className="w-full md:w-2/4 flex flex-col items-center md:items-start text-center md:text-left gap-6">
        <h1 className="text-2xl md:text-6xl font-bold leading-normal tracking-tighter">
          <TextChanger />
        </h1>
        <p className="text-sm md:text-2xl tracking-tight">
          I am a self-taught Frontend Developer with skills in HTML, CSS, JavaScript, React.js, Redux, Tailwind CSS, and Bootstrap.
        </p>
        <div className="flex flex-col md:flex-row gap-6 w-full md:w-auto items-center md:items-start">
          <a
            href="mailto:srivastavasonam555@email.com"
            className="w-full md:w-auto text-white py-2 px-6 text-base md:text-lg font-semibold rounded-3xl bg-[#465697] hover:opacity-85 hover:scale-105 duration-300 transition"
          >
            Contact me
          </a>
          <a
            href="/SonamNewCvpdf.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full md:w-auto text-white py-2 px-6 text-base md:text-lg font-semibold rounded-3xl bg-[#465697] hover:opacity-85 hover:scale-105 duration-300 transition"
          >
            My Resume
          </a>
        </div>
      </div>
      {/* Right Section: Image */}
      <div className="flex justify-center md:justify-end w-full md:w-2/4">
        <img
          className="h-48 w-48 md:h-64 md:w-64 object-cover rounded-full shadow-lg border-4 border-gray-200 transition-all duration-500 ease-in-out hover:scale-105 hover:opacity-90"
          src={Sonam_img}
          alt="My image"
        />
      </div>
    </div>
  );
};

export default Home;