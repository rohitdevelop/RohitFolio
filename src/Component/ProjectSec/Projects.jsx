import React from "react";
import ProjectCard from "./ProjectCard";
import ProjectsText from "./ProjectsText";
import mern from "../images/websitelogo.png";
import Webora from "../images/Weboraapp.png";
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
    image: "https://png.pngtree.com/background/20230626/original/pngtree-three-dimensional-shopping-cart-picture-image_4057129.jpg" ,
     title: "EcoShop E-Commerce",
    link: "https://ecoshop-front-mn3k.vercel.app/",
    about: "Next.js project with backend integration and Clerk authentication.",
  },
  {
    image: Webora,
    title: "Webora app",
    link: "https://choose-web-app-g4r5.vercel.app/",
    about: "Built with Next, Ts, and Mongodb and smooth UI.",
  },
];

const Projects = () => {
  return (
    <div
      id="projects"
      className="py-12 px-4 sm:px-6 lg:px-8 w-full mx-auto md:bg-gradient-to-tr md:from-cyan-900 md:via-black md:to-orange-950"
    >
      {/* Section Heading */}
      <ProjectsText />

      {/* 2x2 Grid */}
      <div className="mt-12 grid md:pl-24 md:pr-24 grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            name={project.title}
            link={project.link}
            image={project.image}
            about={project.about}
          />
        ))}
      </div>

      {/* View More Projects Button */}
      <div className="flex justify-center mt-12">
        <a
          href="/manyproject"
          className="group relative inline-flex items-center justify-center overflow-hidden rounded-3xl bg-cyan-500/10 backdrop-blur-lg border border-cyan-500/20 px-10 py-5 font-bold text-cyan-300 transition-all duration-300 hover:bg-cyan-500/20 hover:border-cyan-400/40 hover:shadow-2xl hover:shadow-cyan-500/30"
        >
          <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
          <span className="relative flex items-center gap-3 text-lg">
            <span>View More Projects</span>
            <svg
              className="w-6 h-6 transition-all duration-300 group-hover:translate-x-2 group-hover:scale-110"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </span>
        </a>
      </div>
    </div>
  );
};

export default Projects;
