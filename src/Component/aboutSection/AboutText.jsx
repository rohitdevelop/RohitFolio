import React from "react";

const AboutText = () => {
  return (
    <div className="w-full max-w-2xl text-center md:text-left">
      <h1 className="text-cyan-400 text-4xl md:text-5xl font-bold mb-6">
        About Me
      </h1>
      <p className="text-white text-sm md:text-base leading-relaxed mb-6">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora numquam
        nihil nemo dicta unde mollitia reprehenderit deleniti corporis. Minima
        non ratione dignissimos iusto accusamus voluptatum, recusandae impedit,
        dolorum et iste.
      </p>
      <button className="px-6 py-2 text-white rounded-full shadow-md border-2 border-cyan-400 bg-transparent transition duration-300 hover:bg-cyan-400 hover:text-black hover:shadow-lg">
  My Projects
</button>
    </div>
  );
};

export default AboutText;
