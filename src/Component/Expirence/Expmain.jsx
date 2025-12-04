import React from "react";
import { GraduationCap, Code, Laptop, Wrench, Cpu, Server } from "lucide-react";
import { motion } from "framer-motion";
import Certificats from "./Certificats";
const Expmain = () => {
  const Education = [
    {
      title: "Class 10th and 12th (CBSE Board)",
      date: "2022 & 2024",
      icon: <GraduationCap className="w-5 h-5" />,
    },
    {
      title: "BCA - Indira Gandhi Open University (IGNOU)",
      date: "2024 - 2027 (Pursuing)",
      icon: <GraduationCap className="w-5 h-5" />,
    },
    {
      title: "MERN Course - GeeksforGeeks & Sheryians Coding School",
      date: "2024 & 2025",
      icon: <Code className="w-5 h-5" />,
    },
    {
      title: "3 Months Internship as a Full Stack Developer",
      date: "2025",
      icon: <Laptop className="w-5 h-5" />,
    },
  ];

  const Technology = [
    {
      title: "Frontend Mastery",
      tech: "HTML, CSS/SCSS, JavaScript, React, TypeScript, PHP, Python, FramerMotion, GSAP",
      icon: <Code className="w-5 h-5" />,
    },
    {
      title: "Backend & Database",
      tech: "Node.js, RestFull API, System Design, MongoDB, Laravel, MySQL, MicroServices, Authentication",
      icon: <Server className="w-5 h-5" />,
    },
    {
      title: "Tools & Frameworks",
      tech: "TailwindCSS, Git/GitHub, Next.js, Laravel, Express.js, Vercel, Shadcn, Render, Docker, Postman",
      icon: <Wrench className="w-5 h-5" />,
    },
    {
      title: "AI & Development Tools",
      tech: "ChatGPT, Claude AI, Agentic AI, CodeRabbit, WakaTime, LLM",
      icon: <Cpu className="w-5 h-5" />,
    },
  ];

  const TimelineItem = ({ data, accentColor, isEducation }) => {
    return (
      <motion.div
        className="relative pl-16 md:pl-8 pb-8"
        initial={{ opacity: 0, y: -80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="absolute left-5 md:left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b to-gray-400 from-black"></div>

        <div
          className={`absolute left-5 md:left-0 top-2 -translate-x-1/2 w-10 h-10 rounded-full ${accentColor} bg-opacity-20 border-2 flex items-center justify-center`}
        >
          {data.icon}
        </div>

        <div
          className="group relative overflow-hidden bg-gray-800 bg-opacity-50 backdrop-blur-sm p-5 rounded-xl 
               border border-gray-700 transition-all duration-300 
               hover:border-opacity-70 hover:shadow-2xl"
        >
          <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>

          <div className="relative">
            <h4 className="text-white font-semibold text-lg mb-2">
              {data.title}
            </h4>
            <p className={`text-sm text-gray-400`}>
              {isEducation ? data.date : data.tech}
            </p>
          </div>
        </div>
      </motion.div>
    );
  };

  return (
    <div
      id="expirence"
      className="min-h-screen w-full md:bg-gradient-to-tr md:from-cyan-900 md:via-black md:to-orange-950 py-16 px-4"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Education & Experience */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <h3 className="text-3xl md:text-4xl font-bold text-cyan-400">
                <span className='text-white'>Education &</span> Experience
              </h3>
            </div>

            <div className="space-y-0">
              {Education.map((exp, index) => (
                <TimelineItem
                  key={index}
                  data={exp}
                  accentColor="text-cyan-400 border-cyan-400"
                  isEducation={true}
                />
              ))}
            </div>
          </div>

          {/* Technology & Skills */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <h3 className="text-3xl md:text-4xl font-bold text-orange-400">
                <span className='text-white'>Skills & </span>Expertise
              </h3>
            </div>

            <div className="space-y-0">
              {Technology.map((exp, index) => (
                <TimelineItem
                  key={index}
                  data={exp}
                  accentColor="text-orange-400 border-orange-400"
                  isEducation={false}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <Certificats />
    </div>
  );
};

export default Expmain;
