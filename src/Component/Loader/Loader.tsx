import React, { useEffect, useState } from "react";

export default function Loader({ children }) {
  const words = [
    "Namaste",
    "नमस्ते",
    "नमस्कार",
    "Salut",
    "Hello",
    "Hola",
    "Ciao",
    "Привет",
    "שלום",
    "Sawubona",
  ];

  const [index, setIndex] = useState(0);
  const [done, setDone] = useState(false);
  const [exit, setExit] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 200);

    const timer = setTimeout(() => {
      clearInterval(interval);
      setExit(true); // slide up

      setTimeout(() => {
        setDone(true);
      }, 700); // wait for animation
    }, 2000);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, []);

  if (done) return <>{children}</>;

  return (
    <div
      className={`fixed inset-0 z-[9999] bg-black flex items-center justify-center transition-transform duration-700 ease-in-out
      ${exit ? "-translate-y-full" : "translate-y-0"}`}
    >
      <div className="h-[70px] w-full flex items-center justify-center relative overflow-visible">
        <span
          key={index}
          className="text-white text-4xl md:text-6xl font-bold tracking-wider animate-fade"
        >
          {words[index]}
        </span>
      </div>

      <style>{`
        @keyframes fade {
          0% { opacity: 0; transform: translateY(12px); }
          50% { opacity: 1; transform: translateY(0); }
          100% { opacity: 0; transform: translateY(-12px); }
        }

        .animate-fade {
          animation: fade 0.4s ease-in-out;
        }
      `}</style>
    </div>
  );
}
