"use client";

import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { FiSend, FiUser, FiMail, FiMessageSquare } from "react-icons/fi";
import { FaCheck, FaSpinner } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const formRef = useRef<HTMLFormElement>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    // Simulate API call
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setStatus("idle"), 3000);
    } catch (error) {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
    }
  };

  return (
    <section  className="relative mb-20 overflow-hidden">
      {/* Background elements */}
      <div  id="contact" className="absolute  inset-0 overflow-hidden opacity-10">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.1 }}
            transition={{ duration: 1, delay: i * 0.2 }}
            className="absolute rounded-full bg-green-500"
            style={{
              width: Math.random() * 300 + 100,
              height: Math.random() * 300 + 100,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              filter: "blur(60px)",
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, type: "spring" }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-10"
        >
          <motion.span
            className="text-sm font-semibold tracking-widest text-green-400 uppercase inline-block"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Get In Touch
          </motion.span>
          <motion.h2
          
            className="mt-4 text-4xl md:text-5xl font-bold text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Contact{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600">
              Me
            </span>
          </motion.h2>
          <motion.div
            className="mt-6 h-1 w-24 bg-gradient-to-r from-green-400 to-emerald-600 mx-auto rounded-full"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.4, duration: 0.8, type: "spring" }}
          />
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <form
            ref={formRef}
            
            onSubmit={handleSubmit}
            className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl shadow-xl px-8 py-10 space-y-6 relative"
          >
            {/* Name */}
            <div className="relative">
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="peer w-full bg-transparent border border-gray-600 rounded-lg px-4 pt-6 pb-2 text-white placeholder-transparent focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Your Name"
              />
              <label
                htmlFor="name"
                className="absolute left-4 top-2 text-gray-400 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-sm peer-focus:text-green-400"
              >
                Your Name
              </label>
            </div>

            {/* Email */}
            <div className="relative">
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="peer w-full bg-transparent border border-gray-600 rounded-lg px-4 pt-6 pb-2 text-white placeholder-transparent focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Email Address"
              />
              <label
                htmlFor="email"
                className="absolute left-4 top-2 text-gray-400 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-sm peer-focus:text-green-400"
              >
                Email Address
              </label>
            </div>

            {/* Message */}
            <div className="relative">
              <textarea
                name="message"
                id="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                required
                className="peer w-full bg-transparent border border-gray-600 rounded-lg px-4 pt-6 pb-2 text-white placeholder-transparent focus:outline-none focus:ring-2 focus:ring-green-500 resize-none"
                placeholder="Your Message"
              />
              <label
                htmlFor="message"
                className="absolute left-4 top-2 text-gray-400 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-sm peer-focus:text-green-400"
              >
                Your Message
              </label>
            </div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              disabled={status === "submitting"}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              className={`w-full py-4 rounded-lg text-white font-medium flex items-center justify-center gap-2 transition-all ${
                status === "success"
                  ? "bg-green-600"
                  : status === "error"
                  ? "bg-red-600"
                  : "bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-400 hover:to-emerald-500"
              }`}
            >
              {status === "submitting" ? (
                <>
                  <FaSpinner className="animate-spin" />
                  Sending...
                </>
              ) : status === "success" ? (
                <>
                  <FaCheck />
                  Sent Successfully
                </>
              ) : status === "error" ? (
                <>Something went wrong</>
              ) : (
                <>
                  <FiSend />
                  Send Message
                </>
              )}
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
