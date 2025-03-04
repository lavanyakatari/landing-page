import React, { useState } from "react";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";
import web from "../../assets/web-page1.jpg";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Sending...");

    emailjs
      .sendForm(
        "service_1oylkfn",
        "template_s2b2fvt",
        e.target as HTMLFormElement,
        "JNrb0w2xoure8cDNU"
      )
      .then(
        (result: { text: string; status: number }) => {
          console.log(result.text);
          setStatus("Message sent successfully!");
          setFormData({ name: "", email: "", message: "" });
          (e.target as HTMLFormElement).reset();
        },
        (error: { text: string; status: number }) => {
          console.log(error.text);
          setStatus("Failed to send message.");
        }
      );
  };

  return (
    <motion.div
      className="relative min-h-screen bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 flex justify-center items-center p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={web}
          alt="web"
          className="w-full h-full object-cover opacity-50"
        />
      </div>
      <motion.div
        className="w-full max-w-lg p-10 bg-white bg-opacity-80 rounded-3xl shadow-2xl backdrop-blur-md"
        initial={{ x: -300 }}
        animate={{ x: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 30 }}
      >
        <h1 className="text-4xl font-extrabold text-center mb-8 text-gray-900">
          Get in Touch
        </h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-gray-900 font-semibold mb-2">
              Name:
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-300"
            />
          </div>
          <div>
            <label className="block text-gray-900 font-semibold mb-2">
              Email:
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-300"
            />
          </div>
          <div>
            <label className="block text-gray-900 font-semibold mb-2">
              Message:
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-300"
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-purple-600 text-white font-bold rounded-full hover:bg-purple-500 transition duration-300"
          >
            Send Message
          </button>
        </form>
        {status && <p className="mt-6 text-center text-gray-900">{status}</p>}
      </motion.div>
    </motion.div>
  );
};

export default Contact;
