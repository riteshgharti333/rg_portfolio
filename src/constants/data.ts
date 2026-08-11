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
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg";

const img20 =
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg";

const img21 =
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg";
const img22 =
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg";
const img23 =
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg";

const img24 =
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg";

const img25 =
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original.svg";

const img26 =
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/googlecloud/googlecloud-plain.svg";

const img27 =
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitest/vitest-original.svg";

const img28 =
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg";

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
  img24,
  img25,
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

/////////////

export const skills = {
  languages: [
    { name: "C++", icon: img20 },
    { name: "JavaScript", icon: img21 },
    { name: "TypeScript", icon: img22 },
    { name: "HTML5", icon: img23 },
    { name: "CSS3", icon: img2 },
    { name: "Sass", icon: img1 },
  ],
  frameworks: [
    { name: "React.js", icon: img3 },
    { name: "Next.js", icon: img18 },
    { name: "Node.js", icon: img4 },
    { name: "Express.js", icon: img19 },
    { name: "Redux", icon: img7 },
    { name: "Material UI", icon: img8 },
    { name: "Tailwind CSS", icon: img9 },
  ],
  tools: [
    { name: "Git", icon: img10 },
    { name: "GitHub", icon: img11 },
    { name: "VS Code", icon: img12 },
    { name: "Postman", icon: img13 },
    { name: "NPM", icon: img6 },
    { name: "Nodemon", icon: img5 },
    { name: "Vitest", icon: img27 },
  ],
  databases: [
    { name: "Supabase", icon: img28 },
    { name: "MongoDB", icon: img14 },
    { name: "Mongoose", icon: img15 },
    { name: "Firebase", icon: img16 },
    { name: "AWS S3", icon: img24 },
    { name: "PostgreSQL", icon: img17 },
    { name: "Cloudinary", icon: img26 },
    { name: "Prisma", icon: img25 },
  ],
};

////////////

export const experiences = [
  {
    role: "Full Stack Developer",
    company: "Star Marketing",
    duration: "Jan 2025 – Sep 2025",
    points: [
      "Delivered **9+ web applications independently**, including **full-stack**, **frontend**, and **industry-specific** solutions across **healthcare, education, marketing, printing, taxi, and wedding** domains.",
      "Engineered **performance optimizations** using **Redis caching**, **lazy loading**, and **image compression**, significantly improving application speed and user experience.",
      "Streamlined deployments with **CI/CD (GitHub Actions)** across **Vercel**, **Render**, and **cPanel**, ensuring reliable and efficient release workflows.",
      "Maintained **90% client satisfaction** across all live deployments through **iterative feedback**, **agile development**, and high-quality delivery.",
      "Contributed to an estimated **40–50% revenue growth** by delivering **scalable**, **client-focused** web solutions with rapid turnaround times.",
    ],
  },
  {
    role: "Full Stack Developer Intern",
    company: "Future Finders",
    duration: "Jan 2024 – Jul 2024",
    points: [
      "Built a **full-stack MERN** app with secure **JWT authentication**, **cookie sessions**, and protected **backend routes**.",
      "Integrated **TanStack Query** for API handling, enabling **30–40% faster data flow** with **smart caching**.",
      "Designed **responsive**, **high-performance UIs** using **React.js** and **SCSS**, with seamless **frontend–backend integration**.",
    ],
  },
  {
    role: "Software Development Engineer Intern",
    company: "Codefeast",
    duration: "Sep 2023 – Nov 2023",
    points: [
      "Integrated the **Instamojo payment system** on the backend, ensuring **reliable transaction flow** and seamless communication between the **frontend** and **payment gateway**.",
      "Built a **responsive admin dashboard** for **course management** using **React.js** and **modular architecture**.",
      "Engineered **20+ reusable components** and integrated **REST APIs** to streamline updates and improve **maintainability**.",
    ],
  },
  {
    role: "Frontend Developer",
    company: "Udagosh Welfare Society",
    duration: "March 2023 - May 2023",
    points: [
      "Developed responsive and user-friendly web interfaces using **React.js**, **JavaScript**, and **CSS**.",
      "Built **reusable UI components** and optimized application structure to improve code **maintainability** and **scalability**.",
      "Collaborated with the **design team** to ensure high-quality **user experience (UX)** and pixel-perfect implementation.",
      "Applied **responsive design principles** to ensure seamless performance across **mobile**, **tablet**, and **desktop** devices.",
    ],
  },
];
