import React from "react";
import ProjectCard from "./ProjectCard";
import ProjectsText from "./ProjectsText";

const projects = [
  {
    image: "/assets/project1.jpg",
    title: "Task Paste App",
    date: "dec 2024",
    link: "#",
    align: "left",  // Changed to left
    about: "I use in thise react, tailwind and redux"
  },
  {
    image: "/assets/project2.jpg",
    title: "WEBDEV Pathshala",
    date: "march 2025",
    link: "#",
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