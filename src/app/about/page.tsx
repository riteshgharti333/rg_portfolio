"use client";
import { motion } from "framer-motion";
import {
  FiGithub,
  FiLinkedin,
  FiMail,
  FiPhone,
  FiDownload,
  FiBriefcase,
  FiCode,
  FiBook,
  FiAward,
} from "react-icons/fi";

const About = () => {
  // Experience data for Design 4
  const experiences = [
    {
      role: "Full Stack Developer",
      company: "Star Marketing",
      duration: "Jan 2025 – Present",
      points: [
        "Built and delivered 9+ production-grade web applications using modern technologies",
        "Implemented CI/CD workflows using GitHub Actions",
        "Collaborated closely with clients to deliver projects on schedule",
      ],
    },
    {
      role: "Software Development Engineer Intern",
      company: "Codefeast",
      duration: "Sep 2023 – Oct 2023",
      points: [
        "Integrated secure payment system using Instamojo",
        "Developed internal admin dashboard for course management",
        "Built 20+ reusable React components",
      ],
    },
    {
      role: "Full Stack Developer Intern",
      company: "Future Finders",
      duration: "Jan 2024 – Jul 2024",
      points: [
        "Built full-stack web apps using MERN stack",
        "Implemented secure authentication and REST APIs",
        "Enhanced UI/UX with responsive React components",
      ],
    },
  ];

  // Technical skills data
  const technicalSkills = {
    Languages: ["C++", "JavaScript", "TypeScript (Basic)", "HTML/CSS"],
    Frameworks: [
      "React.js",
      "Node.js",
      "Express.js",
      "Redux",
      "Material-UI",
      "Tailwind CSS",
    ],
    "Developer Tools": ["Git", "Visual Studio Code", "Postman", "SEO Tools"],
    Database: ["MongoDB", "Firebase", "Cloudinary", "PostgreSQL (Basic)"],
  };

  // Education data
  const education = {
    institution: "Bahra University Solan, H.P, India",
    degree: "BCA (Bachelor of Computer Applications)",
    grade: "CGPA: 8.27/10",
    duration: "Aug 2021 – Jun 2024",
  };

  // Coursework data
  const coursework = [
    "Data Structures & Algorithms",
    "Database Management",
    "Operating Systems",
    "Computer Networks",
  ];

  return (
    <section id="about" className="py-20 ">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Section 1: About Me Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600">
              Me
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-green-400 to-emerald-600 mx-auto rounded-full" />
        </motion.div>

        {/* Section 2: Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl border border-gray-700 hover:border-green-400/30 transition-all duration-300">
            <p className="text-gray-300 text-lg leading-relaxed">
              I'm a passionate full-stack developer with experience building
              modern web applications. My expertise spans JavaScript, React,
              Node.js, and cloud technologies. I specialize in creating
              performant, accessible digital experiences that solve real-world
              problems.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mt-4">
              Currently focused on architecting scalable solutions with
              microservices and serverless technologies. I thrive in
              collaborative environments and enjoy mentoring junior developers.
              My approach combines technical excellence with user-centered
              design principles.
            </p>
          </div>
        </motion.div>

        {/* Section 3: Experience (Design 4) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-2">
            <FiBriefcase className="text-green-400" />
            <span>Professional Experience</span>
          </h3>

          <div className="space-y-10">
            {experiences.map((exp, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="flex gap-6 group"
              >
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-green-400/10 flex items-center justify-center text-green-400 group-hover:bg-green-400/20 transition-colors">
                    <FiBriefcase className="text-xl" />
                  </div>
                  {idx !== experiences.length - 1 && (
                    <div className="flex-1 w-0.5 bg-gray-700 my-2 group-hover:bg-green-400/30 transition-colors"></div>
                  )}
                </div>

                <div className="flex-1">
                  <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
                    <h3 className="text-xl font-bold text-white group-hover:text-green-400 transition-colors">
                      {exp.role}
                    </h3>
                    <span className="text-sm text-gray-400 group-hover:text-white transition-colors">
                      {exp.duration}
                    </span>
                  </div>
                  <p className="text-green-400 mb-4">{exp.company}</p>

                  <ul className="space-y-3">
                    {exp.points.map((point, i) => {
                      const techTerms: string[] =
                        point.match(
                          /GitHub Actions|MERN stack|React components|Instamojo|REST APIs/g
                        ) || [];
                      let parts = [point];
                      techTerms.forEach((term) => {
                        parts = parts.flatMap((part) =>
                          typeof part === "string" ? part.split(term) : part
                        );
                        techTerms.forEach((term, i) => {
                          parts.splice(i * 2 + 1, 0, term);
                        });
                      });

                      return (
                        <motion.li
                          key={i}
                          className="flex"
                          whileHover={{ x: 5 }}
                        >
                          <span className="text-green-400 mr-2 mt-1">•</span>
                          <span className="text-gray-300">
                            {parts.map((part, j) =>
                              techTerms.includes(part) ? (
                                <span
                                  key={j}
                                  className="font-medium text-green-300"
                                >
                                  {part}
                                </span>
                              ) : (
                                part
                              )
                            )}
                          </span>
                        </motion.li>
                      );
                    })}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Section 4: Technical Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-2">
            <FiCode className="text-green-400" />
            <span>Technical Skills</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.entries(technicalSkills).map(([category, skills], idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700 hover:border-green-400/30 transition-all"
              >
                <h4 className="text-lg font-semibold text-white mb-4">
                  {category}
                </h4>
                <ul className="space-y-2">
                  {skills.map((skill, i) => (
                    <li key={i} className="flex items-center">
                      <span className="text-green-400 mr-2">▹</span>
                      <span className="text-gray-300">{skill}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Section 5: Education */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-2">
            <FiBook className="text-green-400" />
            <span>Education</span>
          </h3>

          <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl border border-gray-700 hover:border-green-400/30 transition-all">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
              <div>
                <h4 className="text-xl font-bold text-white">
                  {education.institution}
                </h4>
                <p className="text-green-400">{education.degree}</p>
              </div>
              <div className="text-right">
                <p className="text-white">{education.grade}</p>
                <p className="text-gray-400">{education.duration}</p>
              </div>
            </div>

            <h5 className="text-lg font-semibold text-white mt-6 mb-3 flex items-center gap-2">
              <FiAward className="text-green-400" />
              <span>Relevant Coursework</span>
            </h5>

            <div className="flex flex-wrap gap-3">
              {coursework.map((course, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -3 }}
                  className="px-4 py-2 bg-gray-700/50 rounded-full text-gray-300 hover:bg-green-400/10 hover:text-green-400 transition-all"
                >
                  {course}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Section 6: Contact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            Let's <span className="text-green-400">Connect</span>
          </h3>

          <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl border border-gray-700 hover:border-green-400/30 transition-all max-w-3xl mx-auto">
            {/* Contact Info Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <motion.a
                whileHover={{ y: -3 }}
                href="mailto:youremail@example.com"
                className="p-4 bg-gray-700/50 rounded-lg flex items-center gap-4 hover:bg-gray-700 transition-colors"
              >
                <div className="w-12 h-12 rounded-full bg-green-400/10 flex items-center justify-center text-green-400">
                  <FiMail className="text-xl" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Email</p>
                  <p className="text-white">youremail@example.com</p>
                </div>
              </motion.a>

              <motion.a
                whileHover={{ y: -3 }}
                href="tel:+1234567890"
                className="p-4 bg-gray-700/50 rounded-lg flex items-center gap-4 hover:bg-gray-700 transition-colors"
              >
                <div className="w-12 h-12 rounded-full bg-green-400/10 flex items-center justify-center text-green-400">
                  <FiPhone className="text-xl" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Phone</p>
                  <p className="text-white">+1 (234) 567-8900</p>
                </div>
              </motion.a>
            </div>

            {/* Social Links */}
            <div className="flex justify-center gap-6 mb-8">
              <motion.a
                whileHover={{ y: -5, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://github.com/yourusername"
                target="_blank"
                className="w-12 h-12 rounded-full bg-gray-700 flex items-center justify-center text-white hover:bg-gray-600 transition-colors"
                aria-label="GitHub"
              >
                <FiGithub className="text-xl" />
              </motion.a>

              <motion.a
                whileHover={{ y: -5, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                className="w-12 h-12 rounded-full bg-gray-700 flex items-center justify-center text-white hover:bg-gray-600 transition-colors"
                aria-label="LinkedIn"
              >
                <FiLinkedin className="text-xl" />
              </motion.a>
            </div>

            {/* Clear Download Resume Button */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="text-center"
            >
              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center gap-2 px-6 py-3 bg-green-400/10 hover:bg-green-400/20 border border-green-400/30 text-green-400 rounded-lg transition-all"
              >
                <FiDownload className="text-lg" />
                <span>Download Resume</span>
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
