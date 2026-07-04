"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { FiSend } from "react-icons/fi";
import { FaCheck, FaSpinner } from "react-icons/fa";
import { toast } from "sonner";
import CornerBrackets from "../ui/CornerBrackets";
import TextAnimation from "../TextAni/TextAnimation";

const Contact = () => {
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      const form = e.currentTarget;
      const formData = new FormData(form);

      await fetch("https://formsubmit.co/ajax/riteshgharti333@gmail.com", {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: formData,
      });

      form.reset();
      setStatus("success");
      toast.success("Message sent successfully!");
    } catch (error) {
      setStatus("error");
      console.log(error);
      toast.error("Failed to send message!");
    } finally {
      setTimeout(() => setStatus("idle"), 3000);
    }
  };

  return (
    <section
      id="contact"
      className="relative py-24 bg-[var(--background)] overflow-hidden"
    >
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <TextAnimation subtitle="GET IN TOUCH" line1="CONTACT" line2="ME" />

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <form
            onSubmit={handleSubmit}
            className="bg-[var(--background)] border border-[var(--border)] hover:border-[var(--primary)]/30 transition-all duration-500 hover:shadow-2xl hover:shadow-[var(--primary)]/5 p-10 relative group"
          >
            {/* Corner brackets */}
            <CornerBrackets variant="default" />

            <div className="space-y-6">
              {/* Name Field */}
              <div className="relative">
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  className="peer w-full bg-transparent border border-[var(--border)] px-4 pt-6 pb-2 text-[var(--foreground)] placeholder-transparent focus:outline-none focus:border-[var(--primary)] transition-colors duration-300"
                  placeholder="Your Name"
                />
                <label
                  htmlFor="name"
                  className="absolute left-4 top-2 text-[var(--muted-foreground)] text-xs font-bold uppercase tracking-wider transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs peer-focus:text-[var(--primary)]"
                >
                  Your Name
                </label>
              </div>

              {/* Email Field */}
              <div className="relative">
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  className="peer w-full bg-transparent border border-[var(--border)] px-4 pt-6 pb-2 text-[var(--foreground)] placeholder-transparent focus:outline-none focus:border-[var(--accent)] transition-colors duration-300"
                  placeholder="Email Address"
                />
                <label
                  htmlFor="email"
                  className="absolute left-4 top-2 text-[var(--muted-foreground)] text-xs font-bold uppercase tracking-wider transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs peer-focus:text-[var(--accent)]"
                >
                  Email Address
                </label>
              </div>

              {/* Message Field */}
              <div className="relative">
                <textarea
                  name="message"
                  id="message"
                  rows={5}
                  required
                  className="peer w-full bg-transparent border border-[var(--border)] px-4 pt-6 pb-2 text-[var(--foreground)] placeholder-transparent focus:outline-none focus:border-[var(--primary)] transition-colors duration-300 resize-none"
                  placeholder="Your Message"
                />
                <label
                  htmlFor="message"
                  className="absolute left-4 top-2 text-[var(--muted-foreground)] text-xs font-bold uppercase tracking-wider transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs peer-focus:text-[var(--primary)]"
                >
                  Your Message
                </label>
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={status === "submitting"}
                whileTap={{ scale: 0.98 }}
                className={`relative w-full py-4 font-bold uppercase tracking-wider text-sm flex items-center justify-center overflow-hidden ${
                  status === "success"
                    ? "bg-[var(--accent)] text-white"
                    : status === "error"
                      ? "bg-[var(--accent)] text-white"
                      : "bg-[var(--primary)] text-white hover:bg-[var(--accent)]"
                }`}
              >
                <span className="relative z-10 block h-[1.2em] overflow-hidden w-full">
                  {/* Default text */}
                  <span className="absolute inset-0 flex items-center justify-center gap-2 transition-transform duration-300 group-hover:-translate-y-full">
                    {status === "submitting" ? (
                      <>
                        <FaSpinner className="animate-spin" />
                        Sending...
                      </>
                    ) : status === "success" ? (
                      <>
                        <FaCheck />
                        Sent
                      </>
                    ) : status === "error" ? (
                      <>Failed to send</>
                    ) : (
                      <>
                        <FiSend />
                        Send Message
                      </>
                    )}
                  </span>

                  {/* Hover text - slides up from bottom */}
                  <span className="absolute inset-0 flex items-center justify-center gap-2 transition-transform duration-300 translate-y-full group-hover:translate-y-0">
                    {status === "submitting" ? (
                      <>
                        <FaSpinner className="animate-spin" />
                        Sending...
                      </>
                    ) : status === "success" ? (
                      <>
                        <FaCheck />
                        Sent ✓
                      </>
                    ) : status === "error" ? (
                      <>Try Again</>
                    ) : (
                      <>
                        <FiSend />
                        Send Now
                      </>
                    )}
                  </span>
                </span>
              </motion.button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
