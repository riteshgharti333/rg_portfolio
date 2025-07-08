"use client";
import {
  FiGithub,
  FiLinkedin,
  FiMail,
  FiPhone,
  FiExternalLink,
} from "react-icons/fi";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  githubLink,
  linkedinLink,
  mailLink,
  phoneNo,
} from "@/constants/linksData";

const Footer = () => {

  const FooterLink = ({
    href,
    children,
  }: {
    href: string;
    children: React.ReactNode;
  }) => (
    <Link
      href={href}
      className="block py-2 text-gray-400 hover:text-white hover:translate-x-2 transition-all duration-300"
    >
      <span className="flex items-center gap-2">
        <span className="text-cyan-400 text-xs">›</span>
        {children}
      </span>
    </Link>
  );

  const SocialButton = ({
    icon: Icon,
    href,
    label,
  }: {
    icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    href: string;
    label: string;
  }) => (
    <motion.a
      whileHover={{ y: -3 }}
      whileTap={{ scale: 0.95 }}
      href={href}
      target="_blank"
      className="w-10 h-10 rounded-full bg-gray-800 hover:bg-gray-700 border border-gray-700 flex items-center justify-center text-gray-300 hover:text-white transition-all duration-300"
      aria-label={label}
    >
      <Icon className="text-lg" />
    </motion.a>
  );

  return (
    <footer className="relative bg-gray-950 border-t border-gray-800/50 overflow-hidden">
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row justify-between gap-12 mb-12">
          {/* Navigation */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white mb-4">
              Navigation
            </h3>
            <div className="space-y-2">
              {["Home", "Experience", "About", "Projects"].map((item) => (
                <FooterLink key={item} href={`${item.toLowerCase()}`}>
                  {item}
                </FooterLink>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white mb-4">
              Get in Touch
            </h3>
            <div className="space-y-3">
              <a
                href="mailto:contact@example.com"
                className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors duration-300"
              >
                <FiMail className="text-cyan-400 flex-shrink-0" />
                {mailLink}
              </a>
              <a
                href="tel:+1234567890"
                className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors duration-300"
              >
                <FiPhone className="text-cyan-400 flex-shrink-0" />
                {phoneNo}
              </a>
            </div>
          </div>

          {/* Socials */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white mb-4">Connect</h3>
            <div className="flex gap-3">
              <SocialButton icon={FiGithub} href={githubLink} label="GitHub" />
              <SocialButton
                icon={FiLinkedin}
                href={linkedinLink}
                label="LinkedIn"
              />
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800/50 mb-8"></div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            Built with <span className="text-white font-medium">Next.js</span>,{" "}
            <span className="text-white font-medium">TypeScript</span> &{" "}
            <span className="text-white font-medium">Tailwind CSS</span>
          </p>

          <motion.a
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            href="#contact"
            className="px-5 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded-md font-medium transition-all duration-300 flex items-center gap-2 text-sm"
          >
            Contact Me
            <FiExternalLink className="text-xs" />
          </motion.a>
        </div>
      </div>

      {/* Subtle floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-0.5 h-0.5 bg-cyan-400/10 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -10, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 5 + Math.random() * 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>
    </footer>
  );
};

export default Footer;
