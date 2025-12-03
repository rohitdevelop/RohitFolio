import React, { useState } from "react";
import { X, Award } from "lucide-react";

const ALL_CERTIFICATE = [
  {
    id: 1,
    title: "GeeksforGeeks",
    description: "Certificate of Internship as a MERN stack developer",
    image:
      "https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?w=800&h=600&fit=crop",
  },
  {
    id: 2,
    title: "RD GROUP",
    description: "Certificate of Internship as a Full Stack developer",
    image:
      "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&h=600&fit=crop",
  },
  {
    id: 3,
    title: "English Speaking",
    description: "English Speaking Course to enhance communication skills",
    image:
      "https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?w=800&h=600&fit=crop",
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
           <span className='text-cyan-500'>My</span> Certificates
          </h2>
        </div>
      </div>
 
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {ALL_CERTIFICATE.map((cert) => (
          <div
            key={cert.id}
            className="group relative cursor-pointer bg-gray-800 rounded-b-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform "
            onClick={() => setActiveImg(cert)}
          >
            {/* Image */}
            <div className="relative aspect-video overflow-hidden bg-gray-700 border-gray-800 border-8">
              <img
                src={cert.image}
                alt={cert.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>

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
          </div>
        ))}
      </div>

      {/* Full Screen Modal */}
      {activeImg && (
        <div
          className="fixed inset-0  bg-transparent/20 backdrop-blur-md z-50 flex items-center justify-center p-4"
          onClick={() => setActiveImg(null)}
        >
          {/* Modal Content */}
          {/* Close Button */}
          <button
            onClick={() => setActiveImg(null)}
            className="absolute top-4 right-4 bg-black hover:bg-cyan-800 backdrop-blur-sm text-white rounded-full p-3 transition-all duration-300 hover:rotate-90 z-10"
            aria-label="Close"
          >
            <X size={24} />
          </button>
          <div
            className="relative max-w-5xl w-full max-h-[90vh] overflow-hidden rounded-xl scroll-hi shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Image */}
            <img
              src={activeImg.image}
              alt={activeImg.title}
              className="w-full h-auto rounded-t-xl object-cover"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Certificates;
