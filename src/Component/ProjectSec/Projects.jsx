import React from "react";
import ProjectCard from "./ProjectCard";
import ProjectsText from "./ProjectsText";
import mern from "/public/images/websitelogo.png"
const projects = [
  {
    image: "https://strapi.dhiwise.com/uploads/react_copy_to_clipboard_OG_Image_b7dc8db284.png",
    title: "Task Paste App",
    date: "dec 2024",
    link: "https://copy-paste-app.vercel.app/",
    align: "left",  // Changed to left
    about: "I created a Copy-Paste App using React, Tailwind CSS, and Redux with a smooth UI and efficient state management"
  },
  {
    image:  mern,
    title: "WEBDEV Pathshala",
    date: "march 2025",
    link: "https://lern-mern-2bu7.vercel.app/",
    align: "right",
    about: "I use in thise react, tailwind and redux"

  },
  {
    image: "/assets/project3.jpg",
    title: "E-Commmerse",
    date: "may 2025",
    link: "#",
    align: "left",  // Changed to left
    about: "I use in thise react, tailwind and redux"

  },
  {
    image: "/assets/project3.jpg",
    title: "GYM web",
    date: "jun 2025",
    link: "#",
    align: "right",  // Changed to left
    about: "I use in thise react, tailwind and redux"

  },
];

const Projects = () => {
  return (
    <div id="projects" className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
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