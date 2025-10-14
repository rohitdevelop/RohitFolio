"use client";
import React, { useState } from "react";
import Navbar from "../navbar/NavbarMain";
import { motion } from "framer-motion";
import { FaCode, FaExternalLinkSquareAlt, FaTag, FaGithub, FaFilter } from "react-icons/fa";

const ALL_PROJECTS = [
  {
    id: 1,
    title: "Portfolio Website",
    category: "HTML/CSS/JS",
    description: "A responsive portfolio using HTML, CSS & JavaScript.",
    link: "#",
    codeLink: "#",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop",
    tags: ["Responsive", "Animations", "Modern UI"],
  },
  {
    id: 2,
    title: "Todo App",
    category: "React",
    description: "React-based Todo app with CRUD functionality and local storage.",
    link: "#",
    codeLink: "#",
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&h=500&fit=crop",
    tags: ["React", "Hooks", "CRUD"],
  },
  {
    id: 3,
    title: "Weather Dashboard",
    category: "React",
    description: "Real-time weather app using API integration and geolocation.",
    link: "#",
    codeLink: "#",
    image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&h=500&fit=crop",
    tags: ["API", "Real-time", "Clean UI"],
  },
  {
    id: 4,
    title: "Task Manager",
    category: "React",
    description: "Advanced task management system built in React with filtering, categorization, and priority features.",
    link: "https://yourtaskmanager.com",
    codeLink: "https://github.com/rohitdevelop/task-manager",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=500&fit=crop",
    tags: ["State Management", "Filtering", "Priority System"]
  },
  {
    id: 5,
    title: "Full-Stack Blog Platform",
    category: "Next.js + TS",
    description: "Full-stack blog with Server-Side Rendering (SSR), authentication, markdown support, and CMS integration.",
    link: "https://yourblog.com",
    codeLink: "https://github.com/rohitdevelop/nextjs-blog",
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&h=500&fit=crop",
    tags: ["SSR", "TypeScript", "Authentication"]
  },
  {
    id: 6,
    title: "Dashboard Analytics",
    category: "Next.js + TS",
    description: "Business analytics dashboard with dynamic charts, real-time data visualization, and export functionality.",
    link: "https://yourdashboard.com",
    codeLink: "https://github.com/rohitdevelop/analytics-dashboard",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop",
    tags: ["Data Visualization", "Charts", "Real-time"]
  },
  {
    id: 7,
    title: "E-commerce Website",
    category: "Next.js + TS",
    description: "A fully typed Next.js e-commerce platform featuring shopping cart, payment integration, and order management.",
    link: "https://yourecommerce.com",
    codeLink: "https://github.com/rohitdevelop/ecommerce-site",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=500&fit=crop",
    tags: ["E-commerce", "Payment", "TypeScript"]
  },
  {
    id: 8,
    title: "Scalable REST API Server",
    category: "Node.js + Express",
    description: "Robust and scalable REST API with JWT authentication, MongoDB integration, and comprehensive error handling.",
    link: "https://yourapi.com",
    codeLink: "https://github.com/rohitdevelop/rest-api-server",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=500&fit=crop",
    tags: ["REST API", "JWT", "MongoDB"]
  },
  {
    id: 9,
    title: "Real-time Chat",
    category: "Socket.io",
    description: "Real-time messaging application utilizing WebSocket technology for instant communication with typing indicators.",
    link: "https://yourchat.com",
    codeLink: "https://github.com/rohitdevelop/realtime-chat",
    image: "https://images.unsplash.com/photo-1611606063065-ee7946f0787a?w=800&h=500&fit=crop",
    tags: ["WebSocket", "Real-time", "Chat"]
  },
];

const ManyProjects = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "HTML/CSS/JS", "React", "Next.js + TS", "Backend"];

  const filteredProjects =
    selectedCategory === "All"
      ? ALL_PROJECTS
      : ALL_PROJECTS.filter((p) => p.category === selectedCategory);

  return (
    <>
  
      
    <Navbar />
    <div className="min-h-screen bg-gradient-to-tr md:from-cyan-900 md:via-black md:to-orange-950 transition-colors duration-500 pt-10">
      {/* Header */}
      <div className="text-center pt-24 pb-10 px-4">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-4">
          Featured Projects
        </h1>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Explore my latest web development projects — from frontend UI to backend systems.
        </p>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap justify-center gap-3 mb-12 px-4">
        <FaFilter className="text-gray-500 dark:text-gray-300 mt-1" />
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-full border text-sm font-medium transition-all duration-300
              ${
                selectedCategory === category
                  ? "bg-gray-900 text-white dark:bg-white dark:text-black"
                  : "bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
              }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6 pb-20">
        {filteredProjects.map((project) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300"
          >
            {/* Image */}
            <div className="relative h-48 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
              />
              <span className="absolute top-3 left-3 text-xs bg-gray-800/80 text-white px-2 py-1 rounded-md flex items-center gap-1">
                <FaTag className="text-xs" /> {project.category}
              </span>
            </div>

            {/* Content */}
            <div className="p-5">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
                {project.title}
              </h2>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">
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
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-black dark:bg-white text-white dark:text-black rounded-md text-sm font-medium hover:opacity-80 transition"
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
