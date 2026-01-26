"use client";
import React from "react";
import ProjectsText from "../ProjectSec/ProjectsText";
import { motion } from "framer-motion";
import {
  FaCode,
  FaExternalLinkSquareAlt,
  FaTag,
  FaGithub,
  FaFilter,
} from "react-icons/fa";

const ALL_PROJECTS = [
  {
    id: 1,
    title: "resume_genrator",
    category: "Next.js + TS",
    description: "A responsive resume using nextjs + Ts.",
    link: "https://resume-genrator-three.vercel.app/",
    codeLink: "https://github.com/rohitdevelop/resume_genrator",
    image: "https://alison.com/html/site/img/resume-builder/build-a-resume.svg",
    tags: ["typesefety", "usefull", "Modern UI"],
  },
  {
    id: 2,
    title: "GYM App",
    category: "GSAP",
    description: "GSAP GYM app with react functionality.",
    link: "https://gsap-project-one-rho.vercel.app/",
    codeLink: "https://github.com/rohitdevelop/GSAP-project",
    image:
      "https://png.pngtree.com/thumb_back/fh260/background/20240329/pngtree-rows-of-dumbbells-in-the-gym-image_15662386.jpg",
    tags: ["React", "Animations", "Modern ui"],
  },
  {
    id: 3,
    title: "Photo grapher",
    category: "React",
    description: "video grapher landing page.",
    link: "https://video-graphy-web.vercel.app/",
    codeLink: " https://github.com/rohitdevelop/VideoGraphy_web",
    image:
      "https://thumbs.dreamstime.com/b/photographer-taking-photo-close-up-isolated-black-background-professional-photographer-camera-black-background-142935649.jpg",
    tags: ["API", "Real-time", "Clean UI"],
  },
  {
    id: 4,
    title: "Scrolling Efect",
    category: "React",
    description: "photo Scrolling landing page.",
    link: "https://scrolling-effect-zeta.vercel.app/",
    codeLink: " https://github.com/rohitdevelop/scrolling-effect",
    image:
      "https://orpetron.com/wp-content/uploads/2023/12/Screenshot-2023-12-16-095700.png",

    tags: ["Lenis", "GSAP", "smooth scroll"],
  },
  {
    id: 5,
    title: "Password Genrator",
    category: "React",
    description: "Genrator password in text and numbers.",
    link: "https://react-calculater-two.vercel.app/",
    codeLink: "https://github.com/rohitdevelop",
    image:
      "https://miro.medium.com/0*NKb54QipseUId6h8", 
    tags: ["react", "copy", "TailwindCss"],
  },
  {
    id: 6,
    title: "User Dhasboard",
    category: "Express",
    description: "Register User Dhasboard Uploaded Images.",
    link: "https://users-dhasboard.onrender.com/",
    codeLink: "https://github.com/rohitdevelop/USER_PROJECT",
    image: "https://dapth.com/getmedia/ffa242d9-a7e3-4b4b-8def-511f889e4d60/What_is_UI_Cover_02.jpg",
  
    tags: ["Express", "Mongodb", "Ejs"],
  },
  {
    id: 7,
    title: "Landng pages",
    category: "Next.js",
    description: "Shadcn ui compony landing page.",
    link: "https://webestica.vercel.app/",
    codeLink: "https://github.com/rohitdevelop/webestica",
    image:     "https://graphite-production.lon1.cdn.digitaloceanspaces.com/Services-images/Design-services/UX-UI-design-at-Graphite.jpg" ,
   
    tags: ["nextjs", "Shadcn", "motion"],
  },
  {
    id: 8,
    title: "Snake Game",
    category: "JavaScript",
    description: "Snake game for kids.",
    link: "https://snake-game-omega-lake.vercel.app/",
    codeLink: "https://github.com/rohitdevelop/snake_game",
    image:  "https://www.classicgame.com/uploaded/game/screenshot/snake-game-800.webp",  
    tags: ["Html", "CSS", "JavaScript"],
  },
  {
    id: 9,
    title: "Photo Edit",
    category: "JavaScript",
    description: "Edit photos by your own app.",
    link: "https://editor-app-three.vercel.app/",
    codeLink: "https://github.com/rohitdevelop/editor-app",
    image:"https://tidbits.com/uploads/2018/07/Photos-before-after-bw.jpg" ,
    tags: ["Html", "CSS", "JavaScript"],
  },
  {
    id: 10,
    title: "Qize app",
    category: "Laravel",
    description: "Learn with fun solve questions using Qize app.",
    link: "https://quiz-app-1-o0e7.onrender.com/",
    codeLink: "https://github.com/rohitdevelop/quiz_app",
    image:"https://media.geeksforgeeks.org/wp-content/uploads/20250127101906800664/Screenshot-2025-01-27-101843.png" ,
    tags: ["PHP", "Laravel", "SQL"],
  },
  {
    id: 11,
    title: "Chat app",
    category: "JavaScript",
    description: "chat with devlopers for your network.",
    link: "https://chat-app-gamma-sand.vercel.app/",
    codeLink: "https://github.com/rohitdevelop/chat_app",
    image:"https://s3-alpha.figma.com/hub/file/2610778840/5e9eddd9-5736-4945-9f55-20136583dc94-cover.png",
    tags: ["nextjs", "Socket.io", "OAuth"],
  },
  {
    id: 12,
    title: "Jeopardy Game",
    category: "react",
    description: "Built with React and animated UI for smooth gameplay.",
    link: "https://fea-game-7rk2.vercel.app/",
    codeLink: "https://github.com/rohitdevelop/FEA_Game",
    image:"https://variety.com/wp-content/uploads/2023/07/Main-Menu.png",
    tags: ["react.js", "animation", "Aceternity UI"],
  },
 
];

const ManyProjects = () => {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-tr md:from-cyan-900 md:via-black md:to-orange-950 transition-colors duration-500 pt-5">
        <ProjectsText />
        {/* Projects Grid */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6 ">
          {ALL_PROJECTS.map((project) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-b-2xl overflow-hidden hover:shadow-lg transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden border-8 border-gray-900">
                <img
                  landing="lazy"
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 text-xs bg-gray-800/80 text-white px-2 py-1 rounded-md flex items-center gap-1">
                  <FaTag className="text-xs" /> {project.category}
                </span>
              </div>

              {/* Content */}
              <div className="p-2">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-1">
                  {project.title}
                </h2>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-xs px-2 py-1 bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex items-center gap-3">
                  <a
                    href={project.link}
                    target="_blank"
                    className="flex-1 flex items-center justify-center gap-2 px-3 py-1 bg-black dark:bg-white text-white dark:text-black rounded-md text-sm font-medium hover:opacity-80 transition"
                  >
                    <FaExternalLinkSquareAlt /> Live
                  </a>
                  <a
                    href={project.codeLink}
                    target="_blank"
                    className="flex items-center justify-center px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
                  >
                    <FaGithub />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ManyProjects;
