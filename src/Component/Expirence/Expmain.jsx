import React from "react";

import Exptext from "./Exptext";

const Expmain = () => {
  const Education = [
    { title: "MERN Stack Development", date: "2024", type: "Tool/Technology" },
    { title: "React & Tailwind Projects", date: "2024-2025", type: "Tool/Technology" },
    { title: "BCA", date: "2023-Present", type: "Education" },
    { title: "MERN Stack Certificate", date: "2024", type: "Certificate" },
  ];
  
  const Technology = [
    { title: "Advanced JavaScript", date: "2024", type: "Tool/Technology" },
    { title: "Node.js & Express", date: "2024", type: "Tool/Technology" },
    { title: "MongoDB Database", date: "2023-2024", type: "Education" },
    { title: "Full Stack Developer", date: "2024", type: "Certificate" },
  ];

  return (
    <div 
      id="expirence"
      className="min-h-screen w-full bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 md:bg-gradient-to-tr md:from-cyan-900 md:via-black md:to-orange-950 transition-all duration-300 py-12 px-4 md:px-8">
      
      <Exptext />
 
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">

          {/* Education Timeline */}
          <div className="space-y-4">
            <h3 className="text-2xl md:text-3xl font-bold text-cyan-400 mb-8 text-center lg:text-left">
              🎓 Education & Certificates
            </h3>
            <div className="relative border-l-2 border-cyan-500 ml-4 pl-8">
              {Education.map((exp, index) => (
                <div key={index} className="mb-10 relative group">
                  {/* Animated Dot */}
                  <span className="absolute -left-[2.4rem] top-2 w-5 h-5 bg-orange-500 rounded-full border-4 border-gray-950 group-hover:scale-125 group-hover:bg-cyan-400 transition-all duration-300 shadow-lg group-hover:shadow-cyan-500/50"></span>

                  {/* Card */}
                  <div className="relative overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl hover:shadow-cyan-500/30 transition-all duration-300 border border-gray-700 group-hover:border-cyan-500/40">
                    <span className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
                    <div className="relative">
                      <p className="text-cyan-400 font-semibold text-sm mb-2">{exp.date}</p>
                      <h4 className="text-white font-bold text-xl md:text-2xl mb-2 group-hover:text-cyan-300 transition-colors duration-300">
                        {exp.title}
                      </h4>
                      <span className="inline-block bg-orange-500/20 text-orange-400 px-3 py-1 rounded-full text-sm font-medium border border-orange-500/30">
                        {exp.type}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Technology Timeline */}
          <div className="space-y-4">
            <h3 className="text-2xl md:text-3xl font-bold text-orange-400 mb-8 text-center lg:text-left">
              💻 Skills & Technology
            </h3>
            <div className="relative border-l-2 border-orange-500 ml-4 pl-8">
              {Technology.map((exp, index) => (
                <div key={index} className="mb-10 relative group">
                  {/* Animated Dot */}
                  <span className="absolute -left-[2.4rem] top-2 w-5 h-5 bg-cyan-500 rounded-full border-4 border-gray-950 group-hover:scale-125 group-hover:bg-orange-400 transition-all duration-300 shadow-lg group-hover:shadow-orange-500/50"></span>

                  {/* Card */}
                  <div className="relative overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl hover:shadow-orange-500/30 transition-all duration-300 border border-gray-700 group-hover:border-orange-500/40">
                    <span className="absolute inset-0 bg-gradient-to-r from-transparent via-orange-500/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
                    <div className="relative">
                      <p className="text-orange-400 font-semibold text-sm mb-2">{exp.date}</p>
                      <h4 className="text-white font-bold text-xl md:text-2xl mb-2 group-hover:text-orange-300 transition-colors duration-300">
                        {exp.title}
                      </h4>
                      <span className="inline-block bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full text-sm font-medium border border-cyan-500/30">
                        {exp.type}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Expmain;