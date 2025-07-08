const img1 =
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg";
const img2 =
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg";
const img3 =
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg";
const img4 =
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg";
const img5 =
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodemon/nodemon-original.svg";
const img6 =
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/npm/npm-original-wordmark.svg";
const img7 =
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg";
const img8 =
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/materialui/materialui-original.svg";
const img9 =
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg";
const img10 =
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg";
const img11 =
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg";
const img12 =
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg";
const img13 =
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg";
const img14 =
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg";
const img15 =
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongoose/mongoose-original.svg";
const img16 =
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg";
const img17 =
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg";
const img18 =
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg";
const img19 =
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original-wordmark.svg";

const img20 =
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg";

const img21 =
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg";
const img22 =
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg";
const img23 =
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg";

export const homeIcons1: string[] = [
  img23, // HTML
  img2, // CSS
  img1, // SASS
  img21, // JavaScript
  img22, // TypeScript
  img20, // C++
  img4,
  img14,
];

export const homeIcons2: string[] = [
  img3, // React
  img7, // Redux
  img18, // Next.js
  img8, // Material UI
  img9, // Tailwind CSS
];

export const homeIcons3: string[] = [
  img5, // Nodemon
  img6, // NPM
  img19, // Express
  // MongoDB
  img15, // Mongoose
  img16, // Firebase
  img17, // PostgreSQL
  img10, // Git
  img11, // GitHub
  img12, // VS Code
  img13, // Postman
];

///////////////////

import img from "../assets/images/download.jpg";

export const projects = [
  {
    title: "E-Commerce Platform",
    image: img,
    desc: "A full-featured online store with cart, checkout, and payment integration.",
    tech: ["React", "Node.js", "MongoDB", "Stripe"],
    liveLink: "#",
    codeLink: "#",
    slug: "netflix-clone",
  },
  {
    title: "Task Management App",
    image: img,
    desc: "Productivity application with drag-and-drop task organization and team collaboration.",
    tech: ["Next.js", "TypeScript", "Firebase", "Tailwind"],
    liveLink: "#",
    codeLink: "#",
  },
  {
    title: "Social Media Dashboard",
    image: img,
    desc: "Analytics dashboard for tracking social media metrics and engagement.",
    tech: ["React", "D3.js", "Express", "PostgreSQL"],
    liveLink: "#",
    codeLink: "#",
  },
  {
    title: "AI Image Generator",
    image: img,
    desc: "Web app that generates custom images using AI based on text prompts.",
    tech: ["Next.js", "OpenAI", "Cloudinary", "Tailwind"],
    liveLink: "#",
    codeLink: "#",
  },
  {
    title: "Fitness Tracker",
    image: img,
    desc: "Mobile-first application for tracking workouts and nutrition with progress charts.",
    tech: ["React Native", "GraphQL", "MongoDB", "Expo"],
    liveLink: "#",
    codeLink: "#",
  },
  {
    title: "Real Estate Portal",
    image: img,
    desc: "Property listing platform with advanced filters and virtual tours.",
    tech: ["Next.js", "Mapbox", "Node.js", "PostgreSQL"],
    liveLink: "#",
    codeLink: "#",
  },
];

/////////////

export const skills = {
  languages: [
    {
      name: "C++",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg",
    },
    {
      name: "JavaScript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
    },
    {
      name: "TypeScript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
    },
    {
      name: "HTML5",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
    },
    {
      name: "CSS3",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
    },
    {
      name: "Sass",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg",
    },
  ],
  frameworks: [
    {
      name: "React.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
    },
    {
      name: "Next.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
    },
    {
      name: "Node.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg",
    },
    {
      name: "Express.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original-wordmark.svg",
    },
    {
      name: "Redux",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg",
    },
    {
      name: "Material UI",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/materialui/materialui-original.svg",
    },
    {
      name: "Tailwind CSS",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
    },
  ],
  tools: [
    {
      name: "Git",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
    },
    {
      name: "GitHub",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
    },
    {
      name: "VS Code",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg",
    },
    {
      name: "Postman",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg",
    },
    {
      name: "NPM",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/npm/npm-original-wordmark.svg",
    },
    {
      name: "Nodemon",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodemon/nodemon-original.svg",
    },
  ],
  databases: [
    {
      name: "MongoDB",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
    },
    {
      name: "Mongoose",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongoose/mongoose-original.svg",
    },
    {
      name: "Firebase",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg",
    },
    {
      name: "PostgreSQL",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
    },
    {
      name: "Cloudinary",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/googlecloud/googlecloud-plain.svg",
    },
    {
      name: "Prisma",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original.svg",
    },
  ],
};

////////////

export const experiences = [
  {
    role: "Full Stack Developer",
    company: "Star Marketing",
    duration: "Jan 2025 – Present",
    points: [
      "Built and delivered **9+** production-grade web applications using **modern technologies**, with a strong focus on **SEO**, **performance**, **responsive UI**, and end-to-end ownership—consistently achieving **100%** client satisfaction.",
      "Implemented **CI/CD workflows** using **GitHub Actions** and deployed projects seamlessly to platforms such as **Vercel**, **Render**, and **cPanel**, ensuring smooth and zero-downtime production releases.",
      "Collaborated closely with clients, delivered projects on schedule, and efficiently incorporated feedback to ensure high-quality, **cross-platform** user experiences.",
    ],
  },
  {
    role: "Full Stack Developer Intern",
    company: "Future Finders",
    duration: "Jan 2024 – Jul 2024",
    points: [
      "Gained hands-on experience in developing robust web applications using the **MERN stack**. Merged **RESTful APIs**, implemented secure **user authentication**, and managed **MongoDB** databases to ensure optimal data integrity and performance.",
      "Improved user experience through iterative design improvements, conducting, and analyzing. Enhanced intuitive and responsive interfaces using **React**, **SCSS**, and various **design libraries**, ensuring accessibility for all users.",
    ],
  },
  {
    role: "Software Development Engineer Intern",
    company: "Codefeast",
    duration: "Sep 2023 – Oct 2023",
    points: [
      "Integrated a secure **payment system** using **Instamojo** by collaborating with senior developers, ensuring smooth **frontend-backend communication** and enhancing transactional reliability.",
      "Developed an internal **admin dashboard** for course management and built **20+ reusable React components**, improving development speed and maintainability.",
    ],
  },
  {
    role: "Frontend Developer",
    company: "Udagosh Welfare Society",
    duration: "March 2023 - April 2023",
    points: [
      "Developed responsive and user-friendly web interfaces using **React.js**, **JavaScript**, and **CSS**.",
      "Built **reusable UI components** and optimized application structure to improve code **maintainability** and **scalability**.",
      "Collaborated with the **design team** to ensure high-quality **user experience (UX)** and pixel-perfect implementation.",
      "Applied **responsive design principles** to ensure seamless performance across **mobile**, **tablet**, and **desktop** devices.",
    ],
  },
];
