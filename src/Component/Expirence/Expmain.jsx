import React from "react";
import Timeline from "../ui/Timeline";
import Exptext from "./Exptext";

const Expmain = () => {
  const data = [
    {
      title: "June 2023 – Present",
      content: (
        <div className="text-sm sm:text-base text-neutral-700 dark:text-neutral-300 space-y-2">
          <p>Learned HTML, CSS, JavaScript, React, and Tailwind. Built projects like portfolio, blog site, and simple web apps.</p>
          <ul className="list-disc pl-5">
            <li>Made responsive UI with React</li>
            <li>Used Hooks and React Router</li>
          </ul>
        </div>
      ),
    },
    {
      title: "Nov 2023 – Present",
      content: (
        <div className="text-sm sm:text-base text-neutral-700 dark:text-neutral-300 space-y-2">
          <p>Learned backend using Express, Node.js, MongoDB. Created basic REST APIs and deployed them online.</p>
          <ul className="list-disc pl-5">
            <li>Handled user auth with JWT</li>
            <li>Created basic full-stack apps</li>
          </ul>
        </div>
      ),
    },
    {
      title: "Jan 2024 – Present",
      content: (
        <div className="text-sm sm:text-base text-neutral-700 dark:text-neutral-300">
          <p>Started building simple custom UI components like buttons and cards using Tailwind.</p>
        </div>
      ),
    },
    {
      title: "Feb 2024 – Present",
      content: (
        <div className="text-sm sm:text-base text-neutral-700 dark:text-neutral-300 space-y-2">
          <p>Joined GeeksforGeeks as intern. Helped with frontend work and writing learning content.</p>
          <ul className="list-disc pl-5">
            <li>Wrote dev content in Hinglish</li>
            <li>Contributed to small React features</li>
          </ul>
        </div>
      ),
    },
    {
      title: "Mar 2024 – Present",
      content: (
        <div className="text-sm sm:text-base text-neutral-700 dark:text-neutral-300">
          <p>Built MERN projects like quiz app, blog system, jokes app with backend deployment.</p>
        </div>
      ),
    },
    {
      title: "May 2024 – Present",
      content: (
        <div className="text-sm sm:text-base text-neutral-700 dark:text-neutral-300">
          <p>Created blog-style learning site covering basics of web dev for Indian learners using React Router and Tailwind.</p>
        </div>
      ),
    },
  ];

  return (
    <div
      id="expirence"
      className="w-full bg-white dark:bg-neutral-950  md:bg-gradient-to-tr md:from-cyan-900 md:via-black md:to-orange-950 transition-all duration-300"
    >
      <Exptext />
      <div className="w-full overflow-hidden px-4 sm:px-6 md:px-8">
        <Timeline data={data} />
      </div>
    </div>
  );
};

export default Expmain;
