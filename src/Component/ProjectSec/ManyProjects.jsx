import React, { useState } from "react";

const JavaScriptprojects = [
  {
    id: 1,
    title: "Portfolio Website",
    category: "HTML/CSS/JS",
    description: "A responsive personal portfolio using HTML, CSS & JavaScript.",
    link: "https://yourportfolio.com",
  },
  {
    id: 2,
    title: "Todo App",
    category: "React",
    description: "A React-based Todo application with CRUD functionality.",
    link: "https://yourtodoapp.com",
  },
  {
    id: 3,
    title: "E-commerce Website",
    category: "Next.js + TypeScript",
    description: "A fully typed Next.js e-commerce website with shopping cart.",
    link: "https://yourecommerce.com",
  },
];

const reactprojects = [
  {
    id: 1,
    title: "Weather Dashboard",
    category: "React",
    description: "Real-time weather app with API integration and interactive UI.",
    link: "https://yourweatherapp.com",
  },
  {
    id: 2,
    title: "Task Manager",
    category: "React",
    description: "Advanced task management system with filters and categories.",
    link: "https://yourtaskmanager.com",
  },
  {
    id: 3,
    title: "Social Media Feed",
    category: "React",
    description: "Instagram-like feed with infinite scroll and likes.",
    link: "https://yoursocialfeed.com",
  },
];

const nextjstypescriptprojects = [
  {
    id: 1,
    title: "Blog Platform",
    category: "Next.js + TypeScript",
    description: "Full-stack blog with SSR, authentication, and CMS integration.",
    link: "https://yourblog.com",
  },
  {
    id: 2,
    title: "Dashboard Analytics",
    category: "Next.js + TypeScript",
    description: "Business analytics dashboard with charts and data visualization.",
    link: "https://yourdashboard.com",
  },
  {
    id: 3,
    title: "E-commerce Website",
    category: "Next.js + TypeScript",
    description: "A fully typed Next.js e-commerce website with shopping cart.",
    link: "https://yourecommerce.com",
  },
];

const backendprojects = [
  {
    id: 1,
    title: "REST API Server",
    category: "Node.js + Express",
    description: "Scalable REST API with authentication and database integration.",
    link: "https://yourapi.com",
  },
  {
    id: 2,
    title: "Real-time Chat",
    category: "Socket.io + MongoDB",
    description: "Real-time messaging application with WebSocket technology.",
    link: "https://yourchat.com",
  },
  {
    id: 3,
    title: "Payment Gateway",
    category: "Node.js + Stripe",
    description: "Secure payment processing system with Stripe integration.",
    link: "https://yourpayment.com",
  },
];

const ManyProjects = () => {
  const [activeTab, setActiveTab] = useState("javascript");

  const tabs = [
    { id: "javascript", label: "HTML/CSS/JS", projects: JavaScriptprojects },
    { id: "react", label: "React", projects: reactprojects },
    { id: "nextjs", label: "Next.js + TS", projects: nextjstypescriptprojects },
    { id: "backend", label: "Backend", projects: backendprojects },
  ];

  const currentProjects = tabs.find(tab => tab.id === activeTab)?.projects || [];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-cyan-900">
      {/* Header Section */}
      <div className="pt-20 pb-12 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-orange-400 mb-4">
            My Projects
          </h1>
          <p className="text-slate-300 text-lg sm:text-xl max-w-2xl mx-auto">
            Explore my diverse portfolio of web development projects
          </p>
        </div>
      </div>

      {/* Tabs Section */}
      <div className="max-w-7xl mx-auto px-4 mb-12">
        <div className="flex flex-wrap justify-center gap-3">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeTab === tab.id
                  ? "bg-gradient-to-r from-cyan-500 to-orange-500 text-white shadow-lg shadow-cyan-500/50 scale-105"
                  : "bg-slate-800 text-slate-300 hover:bg-slate-700 border border-slate-600"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="max-w-7xl mx-auto px-4 pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {currentProjects.map((project, index) => (
            <div
              key={project.id}
              className="group relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-500 transform hover:-translate-y-2 border border-slate-700"
              style={{
                animation: `fadeIn 0.5s ease-out ${index * 0.1}s both`
              }}
            >
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-orange-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Card Content */}
              <div className="relative p-6 flex flex-col h-full">
                {/* Category Badge */}
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-gradient-to-r from-cyan-500 to-orange-500 text-white">
                    {project.category}
                  </span>
                </div>

                {/* Title */}
                <h2 className="text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-orange-400 transition-all duration-300">
                  {project.title}
                </h2>

                {/* Description */}
                <p className="text-slate-400 mb-6 flex-grow leading-relaxed">
                  {project.description}
                </p>

                {/* View Project Button */}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative inline-flex items-center justify-center px-6 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-cyan-600 to-orange-600 hover:from-cyan-500 hover:to-orange-500 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-cyan-500/50 overflow-hidden"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    View Project
                    <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                </a>
              </div>

              {/* Decorative Corner Element */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-cyan-500/20 to-orange-500/20 blur-2xl rounded-full transform translate-x-10 -translate-y-10 group-hover:scale-150 transition-transform duration-500" />
            </div>
          ))}
        </div>

        {/* Empty State */}
        {currentProjects.length === 0 && (
          <div className="text-center py-20">
            <p className="text-slate-400 text-xl">No projects available in this category yet.</p>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default ManyProjects;