import React, { useEffect, useRef, useState } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

const Timeline = ({ data }) => {
  const timelineRef = useRef(null);
  const containerRef = useRef(null);
  const [lineHeight, setLineHeight] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const updateHeight = () => {
      if (timelineRef.current) {
        const rect = timelineRef.current.getBoundingClientRect();
        setLineHeight(rect.height);
      }
      setIsMobile(window.innerWidth < 768);
    };

    updateHeight();
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, [data]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const heightTransform = useTransform(
    scrollYProgress,
    [0, 1],
    [0, isMobile ? lineHeight * 1.15 : lineHeight * 0.95]
  );
  const opacityTransform = useTransform(scrollYProgress, [0, 0.3], [0.2, 1]);

  return (
    <div
      ref={containerRef}
      className="relative max-w-6xl mx-auto pb-32 px-4 sm:px-6 md:px-10"
    >
      <div ref={timelineRef} className="relative">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row items-start md:items-center pt-10 sm:pt-12 md:pt-24 gap-4 sm:gap-5 md:gap-12"
          >
            {/* Timeline Dot + Title */}
            <div className="sticky z-10 top-28 self-start md:w-1/3 flex items-center">
              <div className="relative w-10 h-10 flex items-center justify-center">
                <div className="absolute w-10 h-10 rounded-full bg-white dark:bg-black shadow-md z-10" />
                <div className="h-3 w-3 rounded-full bg-gradient-to-tr from-purple-500 to-blue-500 z-20 border-2 border-white dark:border-black" />
              </div>
              <h3 className="hidden md:block text-xl md:text-2xl lg:text-3xl font-semibold text-neutral-700 dark:text-neutral-300 pl-6 md:pl-10">
                {item.title}
              </h3>
            </div>

            {/* Mobile Title + Content */}
            <div className="md:w-2/3 w-full px-1 sm:px-2 pl-12 md:pl-0">
              <h3 className="md:hidden block text-lg sm:text-xl text-cyan-600 mb-1">
                {item.title}
              </h3>
              <div className="text-sm sm:text-base text-neutral-800 dark:text-neutral-200 leading-relaxed">
                {item.content}
              </div>
            </div>
          </div>
        ))}

        {/* Animated Vertical Line */}
        <div
          className="absolute left-[33px] sm:left-[43px] md:left-[66px] top-0 w-[2px] overflow-hidden
          bg-gradient-to-b from-transparent via-neutral-200 dark:via-neutral-700 to-transparent
          [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
          style={{ height: `${lineHeight}px` }}
        >
          <motion.div
            style={{ height: heightTransform, opacity: opacityTransform }}
            className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-b from-cyan-500 via-orange-500 to-transparent rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Timeline;
