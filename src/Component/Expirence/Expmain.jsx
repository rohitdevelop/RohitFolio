import React from "react";
import Timeline from "../ui/Timeline";
import Exptext from "./Exptext";

const Expmain = () => {
  const data = [
    {
      title: "January 2023",
      content: (
        <div className="text-sm sm:text-base text-neutral-700 dark:text-neutral-300 space-y-2">
          <p>
            {" "}
            When I was in 12<sup>th</sup> grade, I started learning the basics
            of computers, including HTML and CSS. That’s where my interest in
            web development began.
          </p>
          <p>
            • Then i created GFG Clone:{" "}
            <a
              href="https://rohitdevelop.github.io/geeksforgeeks/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-500 underline"
            >
              Visit
            </a>
          </p>
          <p>
            • Netflix Clone using Tailwind:{" "}
            <a
              href="https://rohitdevelop.github.io/NETFLIX/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-500 underline"
            >
              Visit
            </a>
          </p>
        </div>
      ),
    },

    {
      title: "Sep 2023",
      content: (
        <div className="text-sm sm:text-base text-neutral-700 dark:text-neutral-300 space-y-2">
          <p>
            After that, I started learning my first programming language —
            JavaScript. It was a great experience understanding its
            functionality and how it works. I also built some small projects to
            practice.
          </p>

          <p>
            • Bubble Game:{" "}
            <a
              href="https://rohitdevelop.github.io/bubble-game/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-500 underline"
            >
              Visit
            </a>
          </p>

          <p>
            • Tic Tac Toe Game:{" "}
            <a
              href="https://rohitdevelop.github.io/Tic-toe-game/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-500 underline"
            >
              Visit
            </a>
          </p>
        </div>
      ),
    },

    {
      title: "feb 2024",
      content: (
        <div className="text-sm sm:text-base text-neutral-700 dark:text-neutral-300">
          <p>
            Now it was time to dive into React — a powerful JavaScript library
            for building user interfaces. Around this time, I also completed my
            12<sup>th</sup> grade and finished my basic computer course.
          </p>

          <p>
            • calculater in react:{" "}
            <a
              href=" https://rohitdevelop.github.io/react-calculater/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-500 underline"
            >
              Visit
            </a>
          </p>

          <p>
            • Jeopardy Game :{" "}
            <a
              href="https://fea-game.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-500 underline"
            >
              Visit
            </a>
          </p>
        </div>
      ),
    },
    {
      title: "dec 2024 ",
      content: (
        <div className="text-sm sm:text-base text-neutral-700 dark:text-neutral-300 space-y-2">
          <p>
            I joined{" "}
            <span className="font-semibold text-green-700">GeeksforGeeks</span>{" "}
            as a student, where I started learning about the MERN Stack
            (MongoDB, Express, React, Node.js). It helped me understand
            full-stack development and improve my practical coding skills.
          </p>

          <img
            src=" /images/geeksforgeeks.jpg"
            alt="MERN Stack"
            className="mt-4 rounded-lg w-24 max-w-md shadow-lg"
          />
        </div>
      ),
    },
  {
  title: "Mar 2025",
  content: (
    <div className="text-sm sm:text-base text-neutral-700 dark:text-neutral-300 space-y-3">
      <p>
        By this time, I had learned how to build complete websites. However, I realized I was missing some backend knowledge. So I focused on improving my backend skills through hands-on coding practice and building projects using the MERN stack.
      </p>
      <p>
        One of the projects I created during this time was a full-stack mini app:
      </p>
      <p>
        • <span className="font-semibold">Jokes App</span>:{" "}
        <a
          href="https://jokes-frontend-gray.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-cyan-500 underline"
        >
          Visit
        </a>
      </p>
    </div>
  ),
},

{
  title: "July 2025",
  content: (
    <div className="text-sm sm:text-base text-neutral-700 dark:text-neutral-300 space-y-2">
      <p>
        After building several projects and completing my MERN stack journey, I now feel confident in my skills — and I’m actively looking for a job or internship in web development.
      </p>
      <p>
        I'm ready to contribute, learn, and grow as a full-stack developer in a professional environment.
      </p>
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
