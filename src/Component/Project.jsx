import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
<>
<div id="project" className="text-white bg-sky-950 w-300 mx-auto rounded-md ">
    <div className="p-10 md:p-24 text-white ">
      <h1 className="text-4xl md:text-4xl text-white font-bold text-center ">Projects</h1>
      <div className="py-12 px-8  flex flex-wrap gap-9">
        <ProjectCard
          title="Weather App" demoUrl="https://sonamsrivastava555.github.io/Weather-App/" sourceCode="https://github.com/SonamSrivastava555/Weather-App"
          main="This is a Weather app created in React js and used features Search weather by city name, Shows temperature, humidity, and weather condition, Responsive UI (mobile + desktop), Built with React + Vite"  />
        <ProjectCard
          title="To-Do List"
          main="This  is a To-Do list website created in Reat js and used some features Add and delete tasks, Mark tasks as completed, Prevents duplicate tasks, Shows current date and time, 
          Clear all tasks in one click" 
          demoUrl="https://sonamsrivastava555.github.io/ToDo-list/"
          sourceCode="https://github.com/SonamSrivastava555/ToDo-list"
        />
        <ProjectCard
          title="Tic-Tac-Toe"
          main="This is a Tic-Tac-Toe game created in html, CSS, JavaScript and used features 2-player game (X and O), Win detection, Draw detection, Reset game button, Simple and responsive design"
          demoUrl="https://sonamsrivastava555.github.io/Tic-Tac-Toe/" 
          sourceCode="https://github.com/SonamSrivastava555/Tic-Tac-Toe"
/>
 <ProjectCard
          title="Calculator"
          main="This is a Calculator using technologies html, CSS, JavaScript and used features are Add, subtract, multiply, divide, Clear button to reset input, Responsive and user-friendly interface, Works directly in the browser (no installation needed)"
demoUrl="https://sonamsrivastava555.github.io/Calculator/" 
          sourceCode="https://github.com/SonamSrivastava555/Calculator"
/>
      </div>
    </div>
    </div>
    </>
  );
};

export default Projects;