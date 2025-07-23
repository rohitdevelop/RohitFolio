import React from "react";
import ProjectCard from "./ProjectCard";
import ProjectsText from "./ProjectsText";
import mern from "/public/images/websitelogo.png"
const projects = [
  {
    image: "https://strapi.dhiwise.com/uploads/react_copy_to_clipboard_OG_Image_b7dc8db284.png",
    title: "Task Manager App",
    date: "dec 2024",
    link: "https://copy-paste-app.vercel.app/",
    align: "left",  // Changed to left
    about: "I created a Task Manager App using React, Tailwind CSS, and Redux with a smooth UI and efficient state management"
  },
  {
    image:  mern,
    title: "WebDev Pathshala",
    date: "march 2025",
    link: "https://lern-mern-2bu7.vercel.app/",
    align: "right",
    about: "I use in thise react, backend for authentication or quiz game and Ai chatbot"

  }, 
  {
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkEd4kOcRb1JJc0ahiRo0wsH9nmYB14oSWFA&amp;usqp=CAU",
    title: "EcoSop E-Commmerse",
    date: "may 2025",
    link: "https://ecoshop-front-mn3k.vercel.app/",
    align: "left",  // Changed to left
    about: "I use in thise next.js, backend and clerk"

  },
  {
    image: "https://variety.com/wp-content/uploads/2023/07/Main-Menu.png",
    title: "Jeaopardy game",
    date: "jun 2025",
    link: "https://fea-game-7rk2.vercel.app/",
    align: "right",  // Changed to left
    about: "I use in thise react, tailwind and animated ui"

  },
];

const Projects = () => {
  return (
    <div id="projects" className="py-12 px-4 sm:px-6 lg:px-8 w-full mx-auto  md:bg-gradient-to-tr md:from-cyan-900 md:via-black md:to-orange-950 ">
      <ProjectsText />
      <div className="mt-12 space-y-24">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            name={project.title}
            year={project.date}
            link={project.link}
            image={project.image}
            align={project.align}
            about={project.about}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;