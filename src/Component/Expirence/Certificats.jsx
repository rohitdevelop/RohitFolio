import React, { useState } from "react";
import { X, Award } from "lucide-react";

const ALL_CERTIFICATE = [
  {
    id: 1,
    title: "GeeksforGeeks",
    description: "Certificate of Internship",
    image: "https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?w=800&h=600&fit=crop",
  },
  {
    id: 2,
    title: "RD GROUP",
    description: "Certificate of Internship",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&h=600&fit=crop",
  },
  {
    id: 3,
    title: "ENGLISH SPEAKING",
    description: "English Speaking Course",
    image: "https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?w=800&h=600&fit=crop",
  },
];

const Certificats = () => {
  const [activeImg, setActiveImg] = useState(null);

  return (
    <div className="w-full py-10 px-4 ">
      {/* Header */}
      <div className="max-w-6xl mx-auto mb-12 text-center">
        <div className="flex items-center justify-center gap-2 mb-3">
          <Award className="text-amber-500" size={32} />
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            My Certificates
          </h2>
        </div>
        <p className="text-gray-600">Professional achievements and credentials</p>
      </div>

      {/* Certificates Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {ALL_CERTIFICATE.map((cert) => (
          <div
            key={cert.id}
            className="group relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
          >
            {/* Image Container */}
            <div className="relative aspect-[4/3] overflow-hidden bg-gray-200">
              <img
                src={cert.image}
                alt={cert.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* View Button Overlay */}
              <button
                onClick={() => setActiveImg(cert)}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-amber-500 hover:bg-amber-600 text-white px-6 py-3 rounded-full font-semibold shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-90 group-hover:scale-100"
              >
                View Certificate
              </button>
            </div>

            {/* Content */}
            <div className="p-5">
              <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-amber-600 transition-colors">
                {cert.title}
              </h3>
              <p className="text-gray-600 text-sm flex items-center gap-2">
                <Award size={16} className="text-amber-500" />
                {cert.description}
              </p>
            </div>

            {/* Decorative Border */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
          </div>
        ))}
      </div>

      {/* Full Screen Modal */}
      {activeImg && (
        <div 
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 animate-fadeIn"
          onClick={() => setActiveImg(null)}
        >
          {/* Close Button */}
          <button
            onClick={() => setActiveImg(null)}
            className="absolute top-4 right-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white rounded-full p-3 transition-all duration-300 hover:rotate-90 z-10"
            aria-label="Close"
          >
            <X size={24} />
          </button>

          {/* Certificate Details */}
          <div className="absolute top-4 left-4 text-white z-10">
            <h3 className="text-2xl font-bold mb-1">{activeImg.title}</h3>
            <p className="text-gray-300">{activeImg.description}</p>
          </div>

          {/* Image */}
          <div 
            className="max-w-5xl max-h-[85vh] overflow-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={activeImg.image}
              alt={activeImg.title}
              className="w-full h-auto rounded-lg shadow-2xl"
            />
          </div>

          {/* Helper Text */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-gray-400 text-sm">
            Click anywhere to close
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </div>
  );
};

export default Certificats;