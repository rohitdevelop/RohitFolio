import React, { useState } from "react";
import { FaEnvelope, FaPhone, FaUser } from "react-icons/fa";
import Footer from "./Footer";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [emailError, setEmailError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setEmailError(""); // Reset previous errors

    const formDataToSend = new FormData();
    formDataToSend.append("access_key", "39ff4455-6a0e-4185-aa98-2a05d270c025"); // Replace with your actual key
    formDataToSend.append("name", formData.name);
    formDataToSend.append("email", formData.email);
    formDataToSend.append("phone", formData.phone);
    formDataToSend.append("message", formData.message);

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setEmailError("Please enter a valid email ❌");
      return;
    }

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formDataToSend,
    });

    const result = await response.json();

    if (result.success) {
      setStatus("Message sent successfully! ✅");
      alert("Your message has been sent successfully! ✅");
      setFormData({ name: "", email: "", phone: "", message: "" }); // Clear form
    } else {
      setStatus("Something went wrong! ❌");
    }
  };

  return (
    <>
      <div id="contact" className="bg-white">
        <h1 className="text-cyan-500 pt-7 text-center text-3xl sm:text-4xl md:text-5xl font-bold">
          Contact <span className="text-black">Me</span>
        </h1>
        <div className="flex items-center justify-center w-full px-5 py-12 text-center">
          <div className="bg-gray-100 w-full max-w-4xl rounded-3xl py-9 px-6 shadow-lg flex flex-col md:flex-row items-center gap-10">
            
            {/* Profile Image */}
            <div className="w-full md:w-1/3 hidden md:flex justify-center">
              <img
                src="https://img.freepik.com/free-vector/hacker-operating-laptop-cartoon-icon-illustration-technology-icon-concept-isolated-flat-cartoon-style_138676-2387.jpg?w=360"
                alt="Cartoon"
                className="w-72 h-72 rounded-lg shadow-md object-cover transition-all duration-300 hover:border-4 hover:border-cyan-400"
              />
            </div>

            {/* Contact Form */}
            <div className="w-full md:w-2/3 p-6">
              <div className="text-left mb-6">
                <h3 className="text-2xl text-orange-500 font-bold mb-2">
                  Get In Touch
                </h3>
                <p className="text-black">
                  Feel free to reach out if you'd like to collaborate. You are just a few clicks away!
                </p>
              </div>

              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <input type="hidden" name="access_key" value="YOUR_WEB3FORMS_ACCESS_KEY" />

                <div className="flex items-center bg-gray-200 p-3 rounded">
                  <FaUser className="text-gray-500 mr-3" />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    required
                    className="w-full bg-transparent outline-none text-gray-800"
                  />
                </div>

                <div className="flex items-center bg-gray-200 p-3 rounded">
                  <FaEnvelope className="text-gray-500 mr-3" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    required
                    className="w-full bg-transparent outline-none text-gray-800"
                  />
                </div>
                {emailError && <p className="text-red-500 text-sm">{emailError}</p>}

                <div className="flex items-center bg-gray-200 p-3 rounded">
                  <FaPhone className="text-gray-500 mr-3" />
                  <input
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Your Phone"
                    required
                    className="w-full bg-transparent outline-none text-gray-800"
                  />
                </div>

                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  required
                  className="w-full p-3 rounded bg-gray-200 text-gray-800 outline-none"
                  rows="4"
                ></textarea>

                <button
                  type="submit"
                  className="w-full md:w-auto bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-all"
                >
                  Send Message
                </button>
              </form>

              {/* Status Message */}
              {status && <p className="mt-4 text-black">{status}</p>}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
