import React, { useState } from "react";
import { X, Award } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import  EnglishCertificate from "/information/certificate.png";
import  geegkforgeeksCertificated from "/information/geegkforgeeksIntern.png";
import  Offerlatter from "/information/Offerlatter.png";
const ALL_CERTIFICATE = [
  {
    id: 1,
    title: "GeeksforGeeks",
    description: "Certificate of Internship as a MERN stack developer",
    image:geegkforgeeksCertificated,
  },
  {
    id: 2,
    title: "RD GROUP",
    description: "Certificate of Internship as a Full Stack developer",
    image:Offerlatter,
  },
  {
    id: 3,
    title: "English Speaking",
    description: "English Speaking Course to enhance communication skills",
    image: EnglishCertificate,
  },
];

const Certificates = () => {
  const [activeImg, setActiveImg] = useState(null);

  return (
    <div className="w-full py-10 px-4">
      {/* Header */}
      <div className="max-w-6xl mx-auto mb-12 text-center">
        <div className="flex items-center justify-center gap-2 mb-3">
          <Award className="text-amber-500" size={32} />
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            <span className="text-amber-500">My</span> Certificates
          </h2>
        </div>
      </div>

      {/* Cards */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {ALL_CERTIFICATE.map((cert, i) => (
      <motion.div
  key={cert.id}
  className="group relative cursor-pointer bg-gray-900 backdrop-blur-sm rounded-b-lg overflow-hidden shadow-lg"
  onClick={() => setActiveImg(cert)}
   initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.2 }}
  transition={{ delay: i * 0.15, duration: 0.5 }}
>

            {/* Image */}
            <motion.div className="relative aspect-video overflow-hidden bg-gray-700 border-gray-900 border-8">
              <motion.img
                src={cert.image}
                alt={cert.title}
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.5 }}
              />
            </motion.div>

            {/* Content */}
            <div className="p-2 md:p-5">
              <h3 className="text-xl font-semibold text-white mb-1">
                {cert.title}
              </h3>
              <p className="text-gray-300 text-sm flex items-center gap-2">
                <Award size={16} className="text-amber-500" />
                {cert.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {activeImg && (
          <motion.div
            className="fixed inset-0 bg-transparent/20 backdrop-blur-md z-50 flex items-center justify-center p-4"
            onClick={() => setActiveImg(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Close */}
            <motion.button
              onClick={() => setActiveImg(null)}
              className="absolute top-4 right-4 bg-black hover:bg-cyan-800 text-white rounded-full p-3 z-10"
              whileHover={{ rotate: 90, scale: 1.1 }}
            >
              <X size={24} />
            </motion.button>

            {/* Modal Content */}
            <motion.div
              className="relative max-w-5xl w-full max-h-[90vh] overflow-hidden rounded-xl shadow-2xl"
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.7, opacity: 0 }}
              transition={{ type: "spring", stiffness: 120 }}
            >
              <motion.img
                src={activeImg.image}
                alt={activeImg.title}
                className="w-full h-auto rounded-t-xl object-cover"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Certificates;
