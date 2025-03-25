import React from "react";
import ProjectCard from "./ProjectCard";
import ProjectsText from "./ProjectsText";

const projects = [
  {
    image: "/assets/project1.jpg",
    title: "Vacation of Africa",
    date: "Mar 2022",
    link: "#",
    align: "left",  // Changed to left
  },
  {
    image: "/assets/project2.jpg",
    title: "Moola App",
    date: "Sept 2022",
    link: "#",
    align: "right",
  },
  {
    image: "/assets/project3.jpg",
    title: "Tourzania",
    date: "Jan 2023",
    link: "#",
    align: "left",  // Changed to left
  },
];

const Projects = () => {
  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
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
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;