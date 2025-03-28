import React from "react";
import { useNavigate } from "react-router-dom";
import resume from "./ROHIT.pdf"; // Ensure the path is correct

const Resume = () => {
  const navigate = useNavigate();

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = resume;
    link.download = "Rohit_Singh_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handlePrint = () => {
    window.open(resume, "_blank");
  };

  return (
    <div className="flex flex-col items-center h-screen w-full p-4 bg-gray-900 text-white">
      {/* Navbar */}
      <div className="w-full flex justify-between items-center p-4 bg-black text-cyan-500 shadow-md">
        <button onClick={() => navigate("/")} className="text-lg font-semibold">
          ⬅ Home
        </button>
        <div>
          <button
            onClick={handleDownload}
            className="mx-2 px-4 py-2 bg-orange-600 hover:bg-orange-700 text-white rounded-md"
          >
            Download
          </button>
          <button
            onClick={handlePrint}
            className="px-4 py-2 bg-gray-700 hover:bg-gray-800 text-white rounded-md"
          >
            Print
          </button>
        </div>
      </div>

      {/* PDF Viewer with mobile support */}
      <div className="flex justify-center items-center w-full h-full">
        <object
          data={resume}
          type="application/pdf"
          className="w-full h-[90vh] border-2 border-red-500 rounded-lg shadow-lg"
        >
          <p className="text-center text-gray-300">
            Your browser does not support PDFs. {" "}
            <a href={resume} className="text-red-400" download>
              Download the PDF
            </a>{" "}
            instead.
          </p>
        </object>
      </div>
    </div>
  );
};

export default Resume;