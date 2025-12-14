import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowUp } from "react-icons/fa";

const ScrollToTop = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.button
          onClick={scrollTop}
          initial={{ opacity: 0, y: -2000, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -2000, scale: 0.9 }}
          transition={{
            duration: 1,
            ease: [0.22, 1, 0.36, 1], // smooth ease-out
          }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="fixed bottom-6 right-6 z-50
                     bg-orange-500 text-white 
                     p-4 rounded-full shadow-xl
                     hover:bg-orange-600 
                     transition-colors"
        >
          <FaArrowUp />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;
