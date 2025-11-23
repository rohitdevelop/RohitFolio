import React from "react";
import ProjectCard from "./ProjectCard";
import ProjectsText from "./ProjectsText";
import mern from "/public/images/websitelogo.png";
import { Link } from "react-router-dom";

const projects = [
  {
    image: "https://strapi.dhiwise.com/uploads/react_copy_to_clipboard_OG_Image_b7dc8db284.png",
    title: "Task Manager App",
     link: "https://copy-paste-app.vercel.app/",
    about: "Created a Task Manager App using React, Tailwind CSS, and Redux with smooth UI and state management.",
  },
  {
    image: mern,
    title: "WebDev Pathshala",
     link: "https://lern-mern-2bu7.vercel.app/",
    about: "React project with backend for authentication, quiz game, and AI chatbot.",
  },
  {
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkEd4kOcRb1JJc0ahiRo0wsH9nmYB14oSWFA&amp;usqp=CAU",
    title: "EcoShop E-Commerce",
     link: "https://ecoshop-front-mn3k.vercel.app/",
    about: "Next.js project with backend integration and Clerk authentication.",
  },
  {
    image: "https://variety.com/wp-content/uploads/2023/07/Main-Menu.png",
    title: "Jeopardy Game",
     link: "https://fea-game-7rk2.vercel.app/",
    about: "Built with React, Tailwind, and animated UI for smooth gameplay.",
  },
];

const Projects = () => {
  return (
    <div
      id="projects"
      className="py-12 px-4 sm:px-6 lg:px-8 w-full mx-auto md:bg-gradient-to-tr md:from-cyan-900 md:via-black md:to-orange-950"
    >
      <ProjectsText />

      {/* 2x2 Grid */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            name={project.title}
            year={project.date}
            link={project.link}
            image={project.image}
            about={project.about}
          />
        ))}
      </div>

      {/* View More Button */}
      <div className="flex justify-center items-center w-full mt-10">
        <Link
          to="/manyproject"
          className="py-3 px-3 sm:py-4 sm:px-8 text-center rounded-3xl sm:rounded-4xl bg-cyan-900 text-amber-50 font-semibold text-sm sm:text-lg hover:bg-cyan-700 transition duration-300"
        >
          View More
        </Link>
      </div>
    </div>
  );
};

export default Projects;
