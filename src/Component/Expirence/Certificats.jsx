 import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";

const ALL_CERTIFICATE = [
  {
    id: 1,
    title: "GeeksforGeeks",
    description: "Certificate of Internship",
    image: "https://alison.com/html/site/img/resume-builder/build-a-resume.svg",
  },
  {
    id: 2,
    title: "RD GROUP",
    description: "Certificate of Internship",
    image:
      "https://png.pngtree.com/thumb_back/fh260/background/20240329/pngtree-rows-of-dumbbells-in-the-gym-image_15662386.jpg",
  },
  {
    id: 3,
    title: "ENGLISH SPEAKING",
    description: "English Speaking Course",
    image:
      "https://thumbs.dreamstime.com/b/photographer-taking-photo-close-up-isolated-black-background-professional-photographer-camera-black-background-142935649.jpg",
  },
];

const Certificats = () => {
  const [activeImg, setActiveImg] = useState(null);

  return (
    <div className="w-full min-h-screen flex items-center justify-center px-4">

      {/* GRID */}
      <div className="max-w-6xl w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

        {ALL_CERTIFICATE.map((certificat) => (
          <div
            key={certificat.id}
            className="group bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden transition-all hover:scale-[1.03] hover:shadow-xl"
          >
            {/* IMAGE */}
            <div className="relative h-56 overflow-hidden">
              <img
                src={certificat.image}
                alt={certificat.title}
                className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
              />
            </div>

            {/* CONTENT */}
            <div className="p-6 text-center">
              <h2 className="text-white text-xl font-bold mb-2">
                {certificat.title}
              </h2>
              <p className="text-gray-400 text-sm mb-5">
                {certificat.description}
              </p>

              {/* OPEN BUTTON */}
              <button
                onClick={() => setActiveImg(certificat.image)}
                className="px-6 py-2 rounded-full bg-amber-500 hover:bg-amber-600 text-black font-semibold transition"
              >
                Open
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* FULLSCREEN IMAGE VIEW */}
      {activeImg && (
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50">

          {/* CLOSE BUTTON */}
          <button
            onClick={() => setActiveImg(null)}
            className="absolute top-6 right-6 text-white text-3xl hover:scale-110 transition"
          >
            <FaTimes />
          </button>

          {/* IMAGE */}
          <img
            src={activeImg}
            className="max-w-[90%] max-h-[90%] object-contain rounded-lg shadow-2xl"
            alt="Certificate"
          />
        </div>
      )}

    </div>
  );
};

export default Certificats;
