const img1 =
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg";
const img2 =
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg";
const img3 =
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg";
const img4 =
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg";

const img7 =
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/materialui/materialui-original.svg";
const img9 =
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg";

const img14 =
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg";
const img15 =
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongoose/mongoose-original.svg";
const img16 =
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg";
const img17 =
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg";

const img19 =
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original-wordmark.svg";

const img25 =
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/reactrouter/reactrouter-original.svg";
const img26 =
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/swiper/swiper-original.svg";

const img27 =
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/framermotion/framermotion-original.svg";

const img28 =
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/googlecloud/googlecloud-plain.svg";

const img29 =
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg";

const img22 =
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg";

const img30 =
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original.svg";

const img31 =
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg";
const img18 =
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg";

const img32 =
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitest/vitest-original.svg";

import projectImg1 from "../assets/images/projectImgs/Abhimanyu-Holiday.jpeg";
import projectImg3 from "../assets/images/projectImgs/BS-Printe.jpeg";
import projectImg5 from "../assets/images/projectImgs/Codefeas.jpeg";
import projectImg6 from "../assets/images/projectImgs/Affordable-Taxi-Car-Rental-Services-Book-Now.jpeg";
import projectImg7 from "../assets/images/projectImgs/MediCare--Hospital-Management-System-Healthcare-Platform.jpeg";
import projectImg8 from "../assets/images/projectImgs/invoice.png";
import projectImg9 from "../assets/images/projectImgs/Star-Marketing-Top-Ranked-SEO-Digital-Marketing-Web-Software-App-Development-Star-Marketin.jpeg";
import projectImg11 from "../assets/images/projectImgs/International-Academy-of-Design-Premier-Design-Professional-Education-in-India-International-Academy-of-Design.jpeg";
import projectImg12 from "../assets/images/projectImgs/TK-Production-Film-Best-Photography-Cinematography-Services-TK-Production-Fil.jpeg";
import projectImg13 from "../assets/images/projectImgs/51855740-09e0-45c3-912b-ccd41a0b650d-1024572.jpeg";

import projectImg14 from "../assets/images/projectImgs/AI-Vault-Discover-200-Curated-AI-Tools-Director.jpeg";
import projectImg15 from "../assets/images/projectImgs/Cherry-Diary-Travel-Journa.jpeg";
import projectImg16 from "../assets/images/projectImgs/FitterCall-Free-Online-Fitness-Health-Calculator.jpeg";

import projectImg17 from "../assets/images/projectImgs/Twipra-Technology-Web-Development-Digital-Agenc.jpeg";

import projectImg18 from "../assets/images/projectImgs/style-ai-albe-vercel-ap.jpeg";
import projectImg19 from "../assets/images/projectImgs/Invoice-Ready-Manage-Your-Invoices-Easil.jpeg";

export const homeProjectData = [
  {
    slug: "medi-care",
    title: "Medi Care",
    img: projectImg7,
    description:
      "Full-stack hospital management platform with RBAC security, high-performance caching, and scalable React data architecture.",
    techStack: [
      "Typescript",
      "React.js",
      "Express.js",
      "Node.js",
      "PostgreSQL",
      "Prisma",
      "Supabase",
      "Redux",
      "Tailwind CSS",
      "AWS S3",
    ],
  },
  {
    slug: "international-academy-of-design",
    title: "International Academy of Design",
    img: projectImg11,
    description:
      "Full-stack college website with dynamic content control, admin dashboard, and Cloudinary image optimization.",
    techStack: [
      "React.js",
      "Express.js",
      "Node.js",
      "MongoDB",
      "mongoose",
      "Sass",
      "Cloudinary",
    ],
  },
  {
    slug: "star-marketing",
    title: "Star Marketing",
    img: projectImg9,
    description:
      "Digital agency platform with admin dashboard, JWT auth, and SEO optimization using MERN stack.",
    techStack: [
      "React.js",
      "Express.js",
      "Node.js",
      "MongoDB",
      "mongoose",
      "Sass",
      "Tailwind CSS",
      "Cloudinary",
    ],
  },
];

export const projectData = [
  {
    slug: "medi-care",
    bannerImage: projectImg7,
    title: "Medi Care",

    description: [
      "A **scalable hospital management web application** built using a **modern full-stack architecture** with **TypeScript**, **Express.js**, **Prisma ORM**, and **PostgreSQL**, designed to handle **secure healthcare workflows** and large-scale data operations efficiently.",

      "Implements **secure RBAC-based authentication** with **JWT access/refresh tokens**, enabling administrators to control user provisioning and permissions across roles such as **doctors**, **nurses**, and **staff** within the healthcare system.",

      "Features a **high-performance data layer** with **multi-layer caching**, **cursor-based pagination**, and **optimized database queries**, while the **React + React Query frontend** provides **real-time data synchronization**, responsive UI, and centralized API error handling.",
    ],

    techStack: [
      { img: img3, name: "React.js" },
      { img: img19, name: "Express.js" },
      { img: img4, name: "Node.js" },
      { img: img17, name: "PostgreSQL" },
      { img: img30, name: "Prisma" },
      { img: img29, name: "Supabase" },
      { img: img7, name: "Redux" },
      { img: img9, name: "Tailwind Css" },
      { img: img31, name: "AWS S3" },
    ],

    features: [
      "**Full-stack hospital management platform** built with **React**, **TypeScript**, **Express.js**, **Prisma ORM**, and **PostgreSQL**, designed to manage **patients, admissions, doctors, billing, and hospital operations** securely and efficiently.",

      "**Monorepo architecture** with shared **Zod validation schemas**, enabling **cross-layer type safety** between frontend forms and backend APIs while eliminating duplicated validation logic.",

      "**Secure authentication and RBAC system** using **JWT access/refresh tokens**, allowing administrators to provision staff accounts, control permissions, and revoke access dynamically.",

      "**High-performance backend data layer** with **multi-layer caching (memory + Redis)**, **cursor-based pagination**, and optimized database queries to support large hospital datasets.",

      "**Advanced search and filtering system** powered by **PostgreSQL indexing and query optimization**, enabling fast lookup across patients, admissions, and healthcare records.",

      "**React Query data architecture** for **automatic caching, background refetching, and mutation handling**, ensuring consistent real-time UI updates without manual refresh.",

      "**Centralized API communication layer** using **Axios interceptors** for consistent error normalization, authentication handling, and reliable API requests.",

      "**Dynamic hospital data tables** built with **TanStack Table**, supporting **sorting, filtering, and efficient pagination** for managing large datasets.",

      "**Form handling and validation system** using **React Hook Form + Zod**, providing strong client-side validation and improved user input reliability.",

      "**Modular frontend architecture** with reusable hooks, API layers, and feature-based structure to maintain scalability and clean code organization.",

      "**Production deployment setup** using **Vercel (frontend)** and **Render (backend)** with environment configuration and secure API communication.",
    ],

    impact: [
      "**Improved operational efficiency** in clinical workflows through a **centralized dashboard** where staff can seamlessly manage patients, appointments, departments, and medical records.",

      "**Enhanced data accuracy and integrity** using **Zod-based validation** across all forms, ensuring clean, validated data at both frontend and backend layers.",

      "**Faster decision-making** supported by **interactive data visualizations** (via ApexCharts), enabling hospitals to analyze patient trends, appointment volume, and department performance in real-time.",

      "**Real-time updates and auto-syncing** with **React Query** eliminate manual refreshes and keep patient data and appointment statuses always up-to-date, improving user satisfaction and response time.",

      "**Role-based security** using **JWT authentication and RBAC** provides safe access levels for admins, doctors, and staff — protecting sensitive medical data from unauthorized use.",

      "**Cross-platform deployment pipeline** using **Vercel and Render** with CI/CD ensures a **production-ready and maintainable environment**, minimizing downtime and deployment friction.",

      "**Increased developer productivity** via a **monorepo setup** with **shared type-safe schemas**, reducing bugs and duplication in API validation and improving code maintainability.",

      "**Optimized performance** on low-end systems through **lazy loading**, **code-splitting**, and compressed assets, ensuring smooth usage even with large hospital datasets.",

      "**Highly scalable system architecture** with **Prisma + PostgreSQL** backend and **modular Redux state management**, ready to support multi-department clinics and growing hospital networks.",

      "**User-friendly experience** through a **minimal yet responsive UI**, helping staff navigate quickly and perform tasks efficiently across both desktop and mobile devices.",
    ],

    challenges: [
      "Designing a **monorepo architecture with shared Zod schemas** across frontend and backend, ensuring **cross-layer type safety** while avoiding duplicated validation logic and maintaining consistent API contracts.",

      "Implementing a **secure RBAC authentication system** with **JWT access/refresh tokens**, handling admin-driven user provisioning, permission enforcement, and runtime access revocation across multiple staff roles.",

      "Building a **high-performance data retrieval layer** with **multi-layer caching and cursor-based pagination**, optimizing queries and reducing database load while maintaining data consistency across large hospital datasets.",

      "Managing **complex frontend server-state synchronization** using **React Query**, including cache invalidation, mutation handling, and consistent UI updates across multiple interconnected modules.",

      "Handling **deployment and environment configuration** for a full-stack monorepo application across **Vercel and Render**, ensuring reliable builds, environment isolation, and secure API communication.",
    ],

    isFullStack: true,

    fullStackCodeLink: [
      {
        name: "Project Code",
        codeLink: "https://github.com/riteshgharti333/hospital_management_app",
      },
    ],

    fullStackLiveLink: [
      {
        name: "Live Demo",
        liveLink: "https://hospital-management-app-nine.vercel.app",
      },
    ],
  },
  {
    slug: "international-academy-of-design",
    bannerImage: projectImg11,
    title: "International Academy of Design",
    description: [
      "A **full-stack college website** built to showcase institutional offerings with a strong emphasis on **performance**, **simplicity**, and **dynamic content control** — featuring a **minimalist and responsive UI** that ensures a seamless experience across all devices.",
      "Equipped with a secure **admin dashboard** that allows authorized users to **manage over 90% of the site's content**, including **images**, **course banners**, **department details**, and more — enabling non-developers to maintain and update content with ease.",
      "Integrated with **Cloudinary** for image storage and optimization, automatically **compressing image sizes by 70–80%** without quality loss, significantly improving **load speed**, **user experience**, and **overall site performance**.",
    ],

    techStack: [
      { img: img3, name: "React.js" },
      { img: img19, name: "Express.js" },
      { img: img4, name: "Node.js" },
      { img: img14, name: "MongoDB" },
      { img: img15, name: "mongoose" },
      { img: img1, name: "Sass" },
      { img: img28, name: "Cloudinary" },
    ],

    features: [
      "**90% dynamic content management** enabled via a **secure and easy-to-use admin dashboard**, allowing non-technical users to update course banners, departments, staff details, and more without coding knowledge.",

      "**Certificate generation module** that allows students to **view and download certificates** by entering their **enrollment ID**, with certificates rendered dynamically from stored data in real time.",

      "**Marksheet creation and download feature** where admins can dynamically **generate, preview, and print marksheets**, with client-side buffer rendering to **avoid unnecessary backend data storage**.",

      "**Drag-and-drop functionality** implemented in sections like staff, mentors, and galleries, giving clients full control to **reorder items visually**, improving user experience and admin efficiency.",

      "**Image cropping feature** embedded in the dashboard, allowing users to **adjust images to exact dimensions before upload**, removing excess whitespace and keeping visuals uniform.",

      "**Cloudinary and Multer integration** with custom algorithms to **compress images by 70–80%** without quality loss, ensuring **lightweight pages and fast load times**.",

      "**Form management system** where students can **submit forms easily**, and the system sends **automated confirmation emails via NodeMailer**, ensuring **100% delivery efficiency** to both admin and student inboxes.",

      "**Secure authentication flow** using **JWT tokens**, **cookie-based sessions**, and **hashed passwords**, along with the ability for admins to **safely update their credentials** from within the platform.",

      "**React Query integration** to provide **automated data refetching**, live updates, and **loading indicators** — enhancing the real-time feel and boosting student engagement.",

      "**Dynamic course routing system** allowing for **SEO-friendly, clean URLs**, enabling students to explore departments and courses without full-page reloads.",

      "**Lazy loading and image optimization** throughout the site, paired with **automatically generated SEO meta tags and sitemaps** to improve **search engine rankings** and performance.",

      "**Minimalist and responsive UI design** based on client feedback, prioritizing **simplicity, clarity**, and fast navigation — achieving a **100% client satisfaction rate**.",

      "**cPanel deployment with custom `.htaccess` rules** to **switch seamlessly** between user and admin views, offering flexible control over frontend and backend access paths.",

      "**Reusable component structure** applied throughout the codebase to follow the **DRY principle**, supporting long-term **scalability, modularity**, and **easy maintenance**.",
    ],

    impact: [
      "**Successfully scaled to handle 1000+ student records**, including certificates, marksheets, and form submissions — all managed through a secure backend system.",

      "**Improved student engagement** by allowing them to **access certificates, marksheets, and course info directly online**, creating a modern and student-friendly experience.",

      "**Enabled non-technical staff to manage 90% of the content** — including banners, departments, and staff info — through an easy-to-use dashboard, making the platform **future-proof and self-manageable**.",

      "**Helped the college boost its online presence** and **social credibility** by transforming the website into a full-featured web application that’s **fast, mobile-friendly, and SEO-optimized**.",

      "**Enhanced visibility in search engines** through **clean URLs**, dynamic routing, and **auto-generated SEO meta tags**, helping more students and parents discover the institution online.",

      "**Improved administrative workflows** with features like **drag-and-drop ordering**, **image cropping**, and **form automation with email confirmations**, reducing manual work and saving time.",

      "**Boosted the institution’s professionalism and digital presence** with a clean, responsive UI and real-time updates, positioning the college as a forward-thinking education provider.",
    ],

    challenges: [
      "Implementing a **real-time PDF generation system** for certificates and marksheets that **renders client-side** using dynamic data — ensuring **minimal backend storage**, enhanced security, and faster generation without compromising layout fidelity.",

      "Optimizing media uploads using **custom image compression algorithms** integrated with **Cloudinary and Multer**, achieving up to **80% reduction in image size** while preserving visual quality — critical for **performance on low-bandwidth devices**.",

      "Designing and integrating **drag-and-drop functionality** for staff, mentors, and gallery sections — requiring **tight synchronization between UI state and backend persistence** to ensure smooth user experience and accurate data ordering.",

      "Developing a **secure and intuitive admin dashboard** that enables **non-technical users** to manage over 90% of site content dynamically, while enforcing role-based access, input validation, and seamless UX flow.",

      "Ensuring **SEO-friendly routing and dynamic metadata rendering** across course and department pages using a **custom dynamic route generator**, balancing **performance, discoverability, and usability**.",
    ],

    isFullStack: true,

    fullStackCodeLink: [
      {
        name: "Project Code",
        codeLink: "https://github.com/orgs/INAD-ORG/repositories",
      },
    ],

    fullStackLiveLink: [
      {
        name: "Live Demo",
        liveLink: "https://project-6-eta.vercel.app",
      },
    ],
  },

  {
    slug: "star-marketing",
    bannerImage: projectImg9,
    title: "Star Marketing",
    description: [
      "A **full-stack digital agency platform** developed using the **MERN stack (MongoDB, Express, React, Node.js)**, offering professional services in **marketing**, **web development**, and **UI/UX design** — built with a focus on **performance**, **clean design**, and **business scalability**.",
      "Includes a secure, feature-rich **admin dashboard** where clients can **manage dynamic content** such as **images**, **news updates**, **service listings**, and more — powered by **JWT-based authentication** to ensure robust data protection and access control.",
      "Designed with **Tailwind CSS** for a **fully responsive**, **modern UI**, and enhanced with **image optimization**, **advanced SEO practices**, and add over **30+ sitemaps** to boost **search engine visibility** and improve digital outreach.",
    ],

    techStack: [
      { img: img3, name: "React.js" },
      { img: img19, name: "Express.js" },
      { img: img4, name: "Node.js" },
      { img: img14, name: "MongoDB" },
      { img: img15, name: "mongoose" },
      { img: img1, name: "Sass" },
      { img: img9, name: "Tailwind Css" },
      { img: img28, name: "Cloudinary" },
    ],

    features: [
      "**Full-stack digital agency platform** built using the **MERN stack (MongoDB, Express, React, Node.js)** to offer services like **marketing**, **web development**, and **UI/UX design**, crafted for **scalability, performance, and clean aesthetics**.",

      "**Secure and dynamic admin dashboard** enabling clients to **manage real-time content** such as **images**, **reviews**, **brand cards**, **service sections**, and **reviews updates** — all without technical involvement.",

      "**Media storage powered by Cloudinary**, ensuring **fast, optimized, and secure image hosting**.",

      "**Integrated React Table for content management**, allowing admins to **easily manage data-heavy sections** like service lists, user reviews, and image assets with sorting, filtering, and pagination support.",

      "**Robust authentication system using JWT tokens**, offering **secure login** and **protected routes** to prevent unauthorized access to admin functionalities.",

      "**Backend structured using best practices**, with clear separation of concerns, modular route handling, validation layers, and clean API design to ensure **maintainability and long-term scalability**.",

      "**Responsive, mobile-first UI** crafted using **Tailwind CSS**, delivering a **modern and consistent user experience** across devices and screen sizes.",

      "**Advanced SEO strategy implemented**, including **structured content**, **meta management**, and integration of **30+ sitemaps** to maximize **search engine visibility** and organic reach.",

      "**Image optimization techniques** such as **lazy loading**, **WebP conversion**, and **responsive sizing** to ensure high performance across all networks and devices.",

      "**Clean, professional frontend architecture** with reusable components and DRY principles to support **fast development, scalability, and easy maintenance**.",
    ],

    impact: [
      "**Improved client engagement** through a **modern, responsive UI** built with Tailwind CSS, delivering a consistent experience across all screen sizes and devices.",

      "**Enhanced content control** via a **dynamic, secure admin dashboard**, allowing non-technical users to **manage images, reviews, services, and news updates** in real-time without developer support.",

      "**Boosted organic traffic** with an **advanced SEO strategy**, including **meta-tag optimization**, **structured content**, and **30+ auto-generated sitemaps**, resulting in **100% SEO Lighthouse scores** and improved Google rankings.",

      "**Faster website performance** with **lazy-loaded images**, **WebP optimization**, and **Cloudinary integration**, reducing load times even on slow networks and boosting Core Web Vitals scores.",

      "**Streamlined service discovery** by offering **dedicated service pages** for each digital solution (marketing, development, UI/UX), giving users clarity and helping convert traffic into leads.",

      "**Secure data protection** ensured by a **JWT-based authentication system**, protecting all admin routes and sensitive operations from unauthorized access.",

      "**Efficient content management** powered by **React Table**, allowing admins to sort, filter, and paginate through large datasets like reviews, brand cards, and image assets with ease.",

      "**Automated lead capture and storage** using **Nodemailer integration**, allowing form submissions and inquiries to be **stored and managed directly** from the admin dashboard.",

      "**Scalable backend architecture** following industry-standard patterns like **modular routing**, **input validation**, and **clear separation of concerns**, making the system **easy to expand and maintain**.",

      "**Elevated brand credibility** through a **clean, professional design** paired with **secure infrastructure**, positioning the agency as a premium, trustworthy provider in the digital services space.",
    ],

    challenges: [
      "Developing a **flexible and secure content management system** that allows non-technical users to **dynamically update images, reviews, services, and brand elements** through the admin dashboard — without compromising data integrity or performance.",

      "Designing and maintaining a **scalable Mongoose schema architecture** to handle **diverse content types** (e.g. services, images, cards, reviews), while keeping the backend **modular, validated, and easy to expand**.",

      "Implementing **real-time content integration** between the frontend and backend, ensuring updates reflected instantly while maintaining **data consistency**, **auth protection**, and **Cloudinary media sync**.",
    ],

    isFullStack: true,

    fullStackCodeLink: [
      {
        name: "Project Code",
        codeLink: "https://github.com/orgs/Star-Marketing-ORG/repositories",
      },
    ],

    fullStackLiveLink: [
      {
        name: "Live Demo",
        liveLink:
          "https://star-marketing-site-3az877j8u-riteshgharti333s-projects.vercel.app/",
      },
    ],
  },

  {
    slug: "invoice-ready",
    bannerImage: projectImg19,
    title: "Invoice Ready",

    description: [
      "A **full-stack invoice and quotation management system** built for freelancers, agencies, and small teams who need a **self-hosted billing solution** with enterprise-grade features.",

      "Built as a **TypeScript monorepo** with **React + Vite frontend**, **Express + Prisma backend**, and **shared Zod validation schemas**, delivering a type-safe and scalable billing platform.",
    ],

    techStack: [
      { img: img22, name: "TypeScript" },
      { img: img3, name: "React.js" },
      { img: img19, name: "Express.js" },
      { img: img4, name: "Node.js" },
      { img: img17, name: "PostgreSQL" },
      { img: img30, name: "Prisma" },
      { img: img9, name: "Tailwind Css" },
      { img: img31, name: "AWS S3" },
      { img: img32, name: "Vitest" },

    ],

    features: [
      "**Complete billing workflow** with **invoice CRUD, quotation management, customer portal, service catalog, and payment tracking** — all in one unified dashboard.",

      "**Automated PDF generation and delivery** using **PDFKit** with **30-minute caching system**. Send invoices and quotations via **email** and **WhatsApp** with one click.",

      "**Smart notification scheduler** that runs daily background checks for **due reminders** and **overdue alerts**, with **multi-channel delivery** through email and WhatsApp Graph API.",

      "**Role-based access control** with **JWT authentication** using **HTTP-only cookies** and **Authorization header fallback**. **Admin** and **User** roles for secure operations.",

      "**Revenue analytics dashboard** with **ApexCharts** visualization for **total revenue, outstanding payments, invoice status distribution, and payment method breakdown**.",

      "**Auto-overdue detection** that automatically updates invoice statuses based on due dates, eliminating manual tracking and ensuring accurate financial records.",

      "**Quote-to-invoice conversion** with one-click workflow — approved quotations carry over all line items automatically, reducing double data entry.",

      "**Type-safe architecture** with **shared Zod schemas** across frontend and backend, ensuring **58+ validated API endpoints** with consistent data contracts.",

      "**Advanced search and filtering** across **10 Prisma models** with **cmdk command palette** (Ctrl+K) for instant navigation and quick actions.",

      "**Self-hosted deployment** with **npm workspaces monorepo**, supporting **17+ frontend routes** and complete customization for your business needs.",
    ],

    liveLink: "https://invoice-ready-lemon.vercel.app",
  },

  {
    slug: "tk-production-film",
    bannerImage: projectImg12,
    title: "TK Production Film",
    description: [
      "A **full-stack wedding agency platform** built using the **MERN stack (MongoDB, Express, React, Node.js)**, designed to showcase services like **wedding shoots**, **pre-wedding sessions**, **birthday events**, and more — crafted with a focus on **elegant visuals** and **user-centric design**.",
      "Features a powerful **admin dashboard** that enables the team to **manage website content dynamically**, including **photo albums**, **banners**, **service galleries**, and, ensuring the platform remains fresh and engaging.",
      "Optimized with **best SEO practices**, responsive layouts, and fast load times to improve **search visibility** and deliver a **high-performing user experience** across devices.",
    ],

    techStack: [
      { img: img3, name: "React.js" },
      { img: img19, name: "Express.js" },
      { img: img4, name: "Node.js" },
      { img: img14, name: "MongoDB" },
      { img: img15, name: "mongoose" },

      { img: img1, name: "Sass" },

      { img: img28, name: "Cloudinary" },
      { img: img26, name: "Swiper" },
    ],

    features: [
      "**Elegant and immersive wedding showcase** platform built using the **MERN stack**, offering services like **wedding shoots**, **pre-wedding sessions**, **birthday events**, and more through a beautifully crafted and emotional visual experience.",

      "**Full-stack admin dashboard** that empowers the agency to **dynamically manage content** such as **photo albums**, **video sections**, **banners**, **services**, **team profiles**, and more — all through a clean, intuitive UI.",

      "**Drag-and-drop video section** in the admin panel allowing the team to **easily arrange event videos** with visual precision and flexibility.",

      "**Secure media storage with Cloudinary**, providing **optimized image**, **access control**, and **responsive scaling** to ensure performance and visual fidelity on all devices.",

      "**Powerful data tables built using ag-grid-react**, enabling admins to **view and manage tabular data effortlessly**, with support for bulk actions and inline controls.",

      "**Authentication system implemented with JWT tokens**, enabling **secure user login, protected routes**, and **role-based access**, ensuring the platform is safe and scalable.",

      "**Secure password update feature**, allowing authenticated users to **change their password safely** from within their dashboard, using **encrypted token verification and validation flows**.",

      "**Modern cinematic UI/UX design**, blending premium visuals, well-structured typography, and spacious layouts to create a **luxurious, high-end event branding experience**.",

      "**Interactive media galleries** with **fullscreen viewing**, **smooth transitions**, and **engaging scroll effects** for showcasing both images and videos beautifully.",

      "**Fully responsive layout** ensuring an **optimized user experience** across all devices — smartphones, tablets, and desktops — with fast loading and flawless rendering.",

      "**SEO-friendly structure and optimized performance** including lazy-loading, clean content structure, and lightweight frontend assets, helping improve **search rankings and discoverability**.",

      "**Modular, reusable components** following the **DRY principle**, allowing easy feature expansion and long-term maintainability of both frontend and backend systems.",
    ],

    impact: [
      "**Stronger brand identity and emotional appeal** delivered through a **visually immersive, cinematic UI**, helping attract more clients for wedding, pre-wedding, and event services.",

      "**Seamless content management** enabled by a **full-featured admin dashboard**, allowing the agency to **dynamically update galleries, banners, and services** — reducing reliance on developers and increasing operational agility.",

      "**Improved customer experience** through **interactive fullscreen galleries**, making media exploration engaging and memorable for visitors.",

      "**Business scalability** supported by a **modular, component-based codebase** that follows **DRY principles**, allowing for fast future development and easy maintenance of both frontend and backend.",

      "**Secure and professional platform foundation** established with **JWT-based authentication and encrypted password flows — ensuring data safety and admin control.",

      "**Efficient admin workflows** using **ag-grid tables** and **drag-and-drop video organization**, streamlining media management for the internal team and improving operational efficiency.",

      "**Expanded customer reach** through **SEO-friendly architecture**, optimized images, structured markup, and lightweight assets — helping the site rank higher and attract more organic traffic.",

      "**Fully responsive design** ensures a **consistent and flawless experience** on smartphones, tablets, and desktops — improving user satisfaction and boosting engagement.",

      "**Increased conversions and trust** by combining a **luxury design aesthetic**, **clear service presentation**, and **modern technology**, creating a premium experience that resonates with high-value clients.",
    ],

    challenges: [
      "Translating the client’s vision into a **modern, cinematic UI** with **premium visuals and smooth animations**, requiring careful balance between **aesthetic depth**, **performance**, and **user experience across devices**.",

      "Implementing a **fully dynamic content management system** that allows the admin to **upload, update, and organize media-rich sections** — such as banners, albums, services, and videos — without technical intervention.",

      "Designing and integrating **drag-and-drop functionality** for media blocks, enabling intuitive video ordering and image grouping, while preserving backend data consistency.",

      "Maintaining **responsive and consistent design fidelity** across all visual content — including high-resolution galleries, embedded videos, and hero banners — ensuring they scale flawlessly without visual degradation.",

      "Developing a **secure and user-friendly admin dashboard** capable of handling **complex CRUD operations**.",
    ],

    isFullStack: true,

    fullStackCodeLink: [
      {
        name: "Frontend Code",
        codeLink:
          "https://github.com/riteshgharti333/tk_production_film_frontend",
      },
      {
        name: "Backend Code",
        codeLink:
          "https://github.com/riteshgharti333/tk_production_film_backend",
      },
      {
        name: "Admin Dashboard Code",
        codeLink: "https://github.com/riteshgharti333/tk_production_film_admin",
      },
    ],

    fullStackLiveLink: [
      {
        name: "Live Demo",
        liveLink: "https://project3-new-frontend.vercel.app",
      },
    ],
  },

  {
    slug: "twipra-technologies",
    bannerImage: projectImg17,
    title: "Twipra Technologies",

    description: [
      "A **leading IT service company** based in Bangladesh, providing **web development, app development, AI solutions, cloud services, digital marketing, graphics design, and server management** to businesses and enterprises.",

      "Built with a **modern full-stack architecture** using **Next.js**, **TypeScript**, **Node.js**, and **Express.js**, delivering high-performance, scalable, and secure digital solutions for clients across diverse industries.",
    ],

    techStack: [
      { img: img18, name: "Next.js" },
      { img: img19, name: "Express.js" },
      { img: img4, name: "Node.js" },
      { img: img22, name: "TypeScript" },
      { img: img9, name: "Tailwind CSS" },
    ],

    features: [
      "**Best-in-class design** with **90+ scores on Google PageSpeed Insights** - achieving **100 Accessibility, 100 SEO, 100 Best Practices, and 92 Performance** for optimal user experience.",

      "**Advanced company admin dashboard** built to manage **employee details, company data and projects** with a secure and intuitive interface.",

      "**Full-service technology company** providing end-to-end **web and app development**, **AI-powered solutions**, **cloud services**, **digital marketing**, **graphics design**, and **server management** for businesses of all sizes.",

      "**Secure authentication and data protection** using **Cookies, and encryption protocols**, ensuring client data privacy and security.",

      "**Scalable backend infrastructure** with **Node.js, Express.js, and PostgreSQL**, designed to handle high traffic loads and complex business logic.",

      "**CI/CD deployment pipeline** with automated testing, staging environments, and production deployments for rapid and reliable delivery.",
    ],

    liveLink: "http://twipratech.com",
  },

  {
    slug: "codefeast",
    bannerImage: projectImg5,
    title: "Codefeast",

    description: [
      "Contributed as a **frontend developer** to an **ed-tech web platform**, collaborating with senior engineers to implement key features that enhanced user experience, reliability, and admin efficiency.",
      "Integrated a **secure payment system using Instamojo**, ensuring **seamless frontend-backend communication** and improving overall **transactional reliability** for course purchases and subscriptions.",
      "Built a robust **internal admin dashboard** for course and content management, and developed over **20+ reusable React components**, significantly boosting **development speed**, **code maintainability**, and **UI consistency**.",
    ],

    techStack: [
      { img: img3, name: "React.js" },
      { img: img1, name: "Sass" },
      { img: img19, name: "Express.js" },
      { img: img4, name: "Node.js" },
    ],

    features: [
      "**Instamojo payment gateway integration** on the frontend, enabling **secure, real-time transactions** for course purchases and subscriptions — with smooth **frontend-backend communication** for status handling and reliability.",

      "**Developed a modular internal admin dashboard UI** for managing **courses**, **users**, and **content** — streamlining daily operations for admins and content managers.",

      "**Built over 20+ reusable React components** using **component-driven development**, significantly improving **UI consistency**, **code maintainability**, and **development speed** across multiple pages and modules.",

      "**Responsive frontend design** implemented with best practices to ensure **cross-device usability**, improving engagement across both desktop and mobile users.",

      "**Contributed to feature delivery in a team environment**, aligning with senior developers and product designers to meet milestones on time and improve platform usability.",
    ],

    impact: [
      "**Enabled revenue generation** by integrating a **secure Instamojo payment system**, supporting real-time transactions for course enrollments with improved reliability and user trust.",

      "**Improved platform scalability and speed of delivery** by building over **20+ reusable React components**, allowing faster rollout of new features and maintaining consistent UI across modules.",

      "**Optimized user accessibility and engagement** with a **fully responsive design**, ensuring seamless course browsing and interaction on both mobile and desktop devices.",

      "**Streamlined backend operations** with a clean, modular **admin dashboard**, empowering staff to efficiently manage users, courses, and content without technical support.",

      "**Contributed to collaborative feature development** by aligning with senior developers and designers in a team environment, helping meet deadlines and improve product usability.",

      "**Strengthened the platform’s reliability and UX** through **smooth frontend-backend communication**, especially during sensitive workflows like payment processing and user enrollment.",

      "**Established a foundation for long-term maintainability** using **component-driven development** and best practices, reducing technical debt and simplifying future enhancements.",
    ],

    challenges: [
      "Integrating the **Instamojo payment gateway** with **real-time status tracking**, requiring secure API communication, error handling for failed transactions, and ensuring consistent **frontend-backend sync** during the checkout process.",

      "Developing a **modular admin dashboard** with **20+ reusable React components**, which required enforcing consistent UI logic, managing shared state across components, and maintaining scalability without introducing code duplication.",
    ],
  },

  {
    slug: "trade-dad",
    bannerImage: projectImg13,
    title: "Trade Dad",

    description: [
      "Worked as a **backend developer** on a **real-time trading application**, leveraging the **Upstox SDK** to integrate **live market data**, **trade execution**, and **account access** with secure API handling and event-based architecture.",
      "Implemented robust **authentication flows** including **signup**, **login**, **password update**, and **JWT-based session management**, ensuring secure access and data privacy across all user operations.",
      "Integrated **WebSockets using Upstox’s real-time feed** to stream **live stock market data** to connected clients, and designed a system to **persist selective metrics (LTP, volume, etc.) into the database every 5 minutes** — optimizing **backend performance**, **data storage**, and enabling **historical analysis**.",
    ],

    techStack: [
      { img: img19, name: "Express.js" },
      { img: img4, name: "Node.js" },
      { img: img14, name: "MongoDB" },
      { img: img15, name: "mongoose" },
    ],

    features: [
      "**Real-time market data integration** using the **Upstox SDK** and **WebSocket feeds**, enabling users to view **live stock prices**, **volumes**, and **trade activity** with minimal latency.",

      "**Secure authentication system** with **JWT-based session handling**, supporting **signup**, **login**, and **password update flows**, built to protect user data and platform access.",

      "**Selective data persistence architecture** that stores key metrics like **LTP**, **LTQ**, and **volume** every 5 minutes — balancing **performance** and **historical analytics** capability.",

      "**Event-driven backend architecture** designed for high-frequency data updates and client broadcasts, ensuring **scalable**, **low-lag delivery** of live financial data.",
    ],

    impact: [
      "**Enabled real-time trading insights** by integrating **Upstox WebSocket feeds** and designing an **event-driven backend** that broadcasts **live market data** with minimal latency to all connected clients.",

      "**Balanced system performance and analytics** by implementing a **selective data persistence layer**, storing key trading metrics (like **LTP**, **LTQ**, and **volume**) every 5 minutes — enabling **historical analysis** without overloading the database.",
    ],

    challenges: [
      "Handling **high-frequency real-time data streams** from the Upstox WebSocket feed while maintaining **low-latency delivery** to all connected clients — requiring an **event-driven architecture** and efficient memory management.",

      "Designing a **selective data persistence strategy** that stores critical metrics like **LTP**, **LTQ**, and **volume** at fixed intervals — balancing **database load** with the need for **accurate historical analytics**.",
    ],
  },

  {
    slug: "abhimanyu-holidays",
    bannerImage: projectImg1,
    title: "Abhimanyu Holidays",
    description: [
      "A **modern travel website** built for **Abhimanyu Holidays**, a Jaipur-based tourism company specializing in **One Day Tours** across Rajasthan — offering quick, comfortable, and affordable ways to explore destinations like **Jaipur**, **Pushkar**, **Ajmer**, and more.",
      "Developed using **React**, **Tailwind CSS**, the platform features a **visually engaging**, **mobile-responsive**, and **high-performance UI**, optimized for all screen sizes and user types.",
      "Includes a **dedicated contact component** allowing users to **easily inquire about tours and packages**, with a strong emphasis on **clarity**, **trust-building**, and **seamless user interaction** through a clean and intuitive design.",
    ],

    techStack: [
      { img: img3, name: "React.js" },
      { img: img9, name: "Tailwind CSS" },
      { img: img2, name: "CSS3" },

      { img: img27, name: "Framer Motion" },

      { img: img25, name: "React Router" },
    ],

    features: [
      "**Visually rich destination showcase** for cities like **Jaipur**, **Pushkar**, and **Ajmer**, designed with a focus on **clarity, beauty, and local relevance** to engage users instantly.",

      "**Built-in form integration via FormSubmit** enabling users to **send inquiries or messages without any backend**, streamlining the booking process and improving lead generation,",

      "**Framer Motion and React Intersection Observer** used for **smooth scroll-triggered animations**, adding subtle interactivity and enhancing page engagement.",

      "**Modular and reusable component architecture** following the **DRY (Don’t Repeat Yourself) principle**, allowing for rapid scalability and future-proof development.",
      "Includes a **dedicated blog section** where users can **explore informative travel articles** and destination guides, along with a **contact component** that enables direct inquiries — all designed to ensure **clarity**, **trust-building**, and a **seamless user experience**.",

      "**120+ static pages** implemented with **no impact on performance**, thanks to **code-splitting**, **lazy loading**, and optimized resource management.",

      "**Clean and consistent typography system** for **easy readability across age groups and devices**, ensuring that content is accessible and visually appealing.",

      "**Fully mobile-responsive layout** designed using **Tailwind CSS**, ensuring a seamless experience on smartphones, tablets, and large screens.",

      "**SEO-focused content strategy** implemented with structured headings, keyword optimization, and clean markup to help the site **rank well on Google** and drive organic traffic.",

      "**Dedicated contact component** with a clean, intuitive layout that builds **user trust** and encourages interaction for tour and travel inquiries.",

      "**High-performance UI** optimized to ensure **fast load times** even on low-end devices.",
    ],
    impact: [
      "**Improved user engagement** through a **modern, visually rich design**, encouraging visitors to explore tour packages with ease and stay longer on the site.",

      "**Enhanced business growth** by making it simple for users to **submit inquiries instantly** through a no-backend **FormSubmit integration**, driving more leads without friction.",

      "**Boosted SEO performance** using a **well-structured content strategy** and **optimized images**, helping the site rank higher on Google and attract organic traffic.",

      "**Faster page performance** achieved via and efficient resource handling — even with 120+ static pages — delivering a smooth experience on any device.",

      "**Mobile-first, responsive layout** ensures seamless usability across smartphones, tablets, and desktops, catering to a wide range of travelers and increasing accessibility.",
      "**Stronger trust and credibility** built through a **dedicated contact section**, **clean typography**, and an overall **minimal, user-first layout**, improving user satisfaction and actions.",

      "**Scalable and maintainable architecture** enabled by **modular components** following the **DRY principle**, supporting future growth and effortless content updates.",

      "**Increased session duration and interaction** through **Framer Motion animations** and **scroll-triggered effects**, enhancing browsing experience without overwhelming the user.",
    ],

    challenges: [
      "Structuring and maintaining **120+ static pages** while ensuring the site remained **fast and responsive**, which required **careful planning**, **manual content management**, and strict adherence to **clean component architecture**.",

      "Ensuring **consistent design and layout** across all pages using a **modular component system**, which helped reduce duplication and simplify updates without relying on automated tools like code-splitting.",

      "Balancing **rich visuals and animations** with performance, ensuring **scroll-triggered effects** enhanced engagement without introducing layout shifts or lag, even across a large number of static pages.",
    ],

    githubLink: "https://github.com/riteshgharti333/Abhimanyu-Holidays",
    liveLink: "https://project-8-rho.vercel.app/",
  },
  {
    slug: "global-india-travel",
    bannerImage: projectImg6,
    title: "Global India Travels",
    description: [
      "A **comprehensive tour and travel booking platform** built from scratch using **React**, offering a wide range of services like **taxi booking**, **outstation travel**, **guided tours**, **same-day packages**, and **tempo/bus rentals** — tailored for both **domestic and international travelers**.",
      "Designed with a focus on **premium UI**, **modern visuals**, and **fast performance**, delivering a **delightful user experience** optimized for **speed**, **clarity**, and **mobile responsiveness**.",
      "Successfully **deployed on CPanel hosting**, ensuring **production stability**, **secure asset delivery**, and **real-world accessibility** without relying on cloud platforms like Vercel or Netlify.",
    ],

    techStack: [
      { img: img3, name: "React.js" },
      { img: img2, name: "CSS3" },
      { img: img1, name: "Sass" },
      { img: img25, name: "React Router" },
      { img: img26, name: "Swiper" },
    ],
    features: [
      "**Captivating destination showcase** powered by **Swiper-based carousels**, offering a seamless way to explore popular services and scenic highlights.",

      "**AOS-powered scroll animations** create an **interactive and immersive user experience**, keeping visitors engaged as they browse through services and destinations.",

      "**Modular and reusable components** crafted to follow the **DRY (Don’t Repeat Yourself) principle**, allowing for **faster development**, **cleaner code**, and **easier future maintenance**.",

      "**Full-service travel platform** offering **local taxi bookings**, **outstation trips**, **tempo traveller rentals**, **same-day tours**, and **professional tour guides** — all clearly categorized for easy access.",

      "**Performance-first image handling** with **WebP formats**, **lazy loading**, and **compressed assets** to ensure **fast load times and smooth browsing** even on low bandwidth.",

      "**Mobile-first and fully responsive design** delivering a consistent and optimized experience across all device types and screen sizes.",

      "**FormSubmit integration** for quick user inquiries, enabling customers to **send messages directly to your inbox** without account creation or backend overhead.",

      "**Well-structured service pages** built with dynamic rendering to **highlight offerings** like vehicle options, pricing tiers, travel durations, and destination info in an organized layout.",

      "**Clear call-to-actions** throughout the site to help users **book, inquire, or contact easily**, improving engagement and conversion rates.",

      "**Informative, user-focused content** designed to help travelers make confident decisions, with clear breakdowns of itineraries, service coverage, and tour benefits.",
    ],

    impact: [
      "**Boosted customer engagement** through **visually rich carousels** and **scroll-triggered animations**, creating a memorable browsing experience that retains users longer.",

      "**Improved lead generation** via **clearly placed call-to-actions** and **FormSubmit-based inquiry system**, making it effortless for users to book, ask, or connect instantly.",

      "**Accelerated booking decisions** by presenting **service details, pricing, and options** in a well-structured layout, reducing friction in the user journey.",

      "**Seamless mobile experience** ensured by a **mobile-first, fully responsive design**, making the platform accessible and intuitive across all screen sizes.",

      "**Faster site performance** with **lazy-loaded WebP images**, **optimized assets**, and clean code, resulting in **shorter load times** and improved user satisfaction.",

      "**Business growth and visibility** powered by **Google Analytics** and **Search Console integration**, allowing clients to **monitor traffic**, **track engagement**, and **optimize for SEO**.",

      "**Better decision-making** for the client through **real-time performance insights**, **search query tracking**, and visibility into **popular pages and user behavior**.",

      "**Increased operational efficiency** by using **modular components** and following the **DRY principle**, enabling quick updates, scalability, and long-term maintainability.",

      "**Professional online presence** crafted through a **simple , minimalist UI** and user-first content, establishing trust with both domestic and international travelers.",

      "**Expanded market reach and conversions** as the platform helps attract, engage, and convert users through a clear structure, strong visuals, and accessible interactions.",
    ],
    challenges: [
      "Architecting a **scalable routing system** to manage **multiple service pages**, ensuring smooth navigation and route handling across destinations, bookings, and categories.",

      "Designing a **component-based architecture** to keep UI consistent and **content management efficient**, especially when handling **repetitive content blocks** like components, images, and services.",

      "Maintaining **content clarity** across diverse services — from taxi bookings to guided tours — while ensuring **a unified and cohesive design language**.",

      "Optimizing **SEO and performance** for a multi-page layout with, **structured metadata**, and **responsive design**, especially to ensure discoverability and fast user experience.",

      "Balancing **visual aesthetics and user accessibility** — delivering an **immersive scroll experience** without sacrificing readability or speed on lower-end devices.",
    ],

    githubLink: "https://github.com/riteshgharti333/Global-India-Travel",
    liveLink: "https://project-5-jet.vercel.app",
  },

  {
    slug: "bs-printers",
    bannerImage: projectImg3,
    title: "BS Printers",
    description: [
      "A **modern, visually refined printing platform** built to showcase a curated range of customizable products like **posters**, **t-shirts**, and other printables — with a strong focus on **minimalist design**, **clean layout**, and an **intuitive user journey**.",
      "Crafted with a **mobile-first**, **fully responsive**, and **accessibility-focused** architecture, delivering a **seamless experience** across all devices — even for **non-technical users** or those with limited digital literacy.",
      "Includes **interactive product previews**, **scalable layout grids**, and a UI system optimized for **clarity**, **visual storytelling**, and **high-conversion product discovery**.",
    ],
    techStack: [
      { img: img3, name: "React.js" },
      { img: img2, name: "CSS3" },
      { img: img1, name: "Sass" },
      { img: img25, name: "React Router" },
    ],
    features: [
      "**Visually engaging product showcase** using **interactive Swiper carousels**, allowing users to browse printing items like posters, t-shirts, banners, and more with ease.",

      "**Minimalist and premium layout** focused on **clean presentation**, highlighting the quality and variety of print products without overwhelming the user.",

      "**Dedicated product sections** organized by category to help users **easily discover and view** the specific printing services they’re interested in.",

      "**Fully responsive and mobile-friendly design** that ensures a **smooth, consistent experience** on all screen sizes — from smartphones to large desktops.",

      "**High-impact visuals** and typography optimized for **readability and engagement**, making the content accessible to users of all age groups.",
    ],

    impact: [
      "**Improved product visibility** with **immersive full-screen previews**, helping customers better visualize designs before purchase",
      "**Boosted user interaction** through a **clean, distraction-free layout** that emphasizes product presentation",
      "**Strengthened brand perception** with a **minimalist and premium UI**, reflecting professionalism and design focus",
      "**Enhanced customer trust** through **crisp imagery**, **accessible navigation**, and a **responsive interface** across all devices",
      "**Accelerated business growth** by streamlining the product discovery experience and reducing user drop-off",
    ],

    challenges: [
      "Crafting a **visually minimal yet engaging UI** that appeals to both **modern users** and **non-technical audiences**, ensuring ease of navigation for all age groups.",
      "Designing a **scalable and structured product categorization system** to accommodate a wide range of printing products like **posters, t-shirts, banners**, and more — while maintaining a clean layout.",
      "Ensuring **consistent performance and design fidelity** across **diverse screen sizes and devices**, from mobile phones to large desktop monitors.",
      "Balancing **aesthetic minimalism** with **functional clarity** — making sure each product is clearly represented without overwhelming the user.",
    ],

    githubLink: "https://github.com/riteshgharti333/bs-printers",
    liveLink: "https://project-2-riteshgharti333s-projects.vercel.app",
  },

  {
    slug: "fittercall",
    bannerImage: projectImg16,
    title: "FitterCall",

    description: [
      "A **comprehensive health and fitness platform** that provides **all-in-one calculator tools** for tracking and optimizing personal health metrics, including **BMI, BMR, Body Fat Percentage, TDEE, Ideal Weight, Macro Nutrients, Waist-to-Hip Ratio, and Water Intake**.",

      "Built with **Next.js**, **TypeScript**, and **Tailwind CSS**, delivering a **fast, responsive, and user-friendly interface** for fitness enthusiasts and health-conscious individuals to monitor their fitness journey.",
    ],

    techStack: [
      { img: img18, name: "Next.js" },
      { img: img22, name: "TypeScript" },
      { img: img9, name: "Tailwind CSS" },
    ],

    features: [
      "**BMI Calculator** - Calculate your Body Mass Index to determine if you're underweight, normal, overweight, or obese with instant results and health recommendations.",

      "**BMR Calculator** - Estimate your Basal Metabolic Rate to understand how many calories your body burns at rest, essential for weight management planning.",

      "**Body Fat Percentage Calculator** - Determine your body fat vs. lean mass ratio for better fitness tracking and body composition analysis.",

      "**TDEE Calculator** - Find out your Total Daily Energy Expenditure based on activity level to plan calorie intake for weight loss, gain, or maintenance.",

      "**Ideal Weight Calculator** - Discover your ideal weight based on height, age, and gender with healthy weight range recommendations.",

      "**Macro Nutrient Calculator** - Calculate optimal protein, carbs, and fat intake percentages for your specific diet and fitness goals.",

      "**Waist-to-Hip Ratio Calculator** - Measure fat distribution patterns to understand health risks associated with body shape and obesity.",

      "**Water Intake Calculator** - Get personalized daily water consumption recommendations for optimal hydration based on weight, activity, and climate.",

      "**Modern, responsive UI** with clean design and smooth animations, ensuring seamless experience across desktop, tablet, and mobile devices.",

      "**Instant calculations with visual feedback** - Results displayed with color-coded indicators and progress bars for easy interpretation of health metrics.",
    ],
    // githubLink: "https://github.com/riteshgharti333/bs-printers",
    liveLink: "https://fitter-call.vercel.app",
  },
  {
    slug: "chery-diary",
    bannerImage: projectImg15,
    title: "Chery Diary",

    description: [
      "A **blog web application** designed for sharing **stories, thoughts, and personal experiences** in a clean and engaging platform.",

      "Built with **Next.js**, **TypeScript**, and **Tailwind CSS**, delivering a **fast, SEO-friendly, and responsive** blogging experience for content creators and readers.",
    ],

    techStack: [
      { img: img18, name: "Next.js" },
      { img: img22, name: "TypeScript" },
      { img: img9, name: "Tailwind CSS" },
    ],

    features: [
      "**Beautiful blog interface** with a clean, minimal design focused on content readability and user experience.",

      "**Blog post management** - Create, edit, and publish blog posts with rich text formatting and media embedding.",

      "**Category and tag system** for organizing content and improving discoverability of posts.",

      "**Search functionality** to quickly find specific posts by title, content, or tags.",

      "**Responsive design** ensuring seamless reading experience across desktop, tablet, and mobile devices.",

      "**SEO optimized** with meta tags, Open Graph images, and structured data for better search engine visibility.",

      "**Fast page loads** with Next.js SSG and ISR for optimal performance and user experience.",
    ],
    liveLink: "https://blog-doc-eight.vercel.app",
  },
  {
    slug: "ai-fashion-assistant",
    bannerImage: projectImg18,
    title: "AI Fashion Assistant",

    description: [
      "An **AI-powered fashion styling platform** that generates **personalized outfit recommendations** across multiple styles including **Casual Everyday, Streetwear, Minimal, Smart Casual, Aesthetic, and Party wear**.",

      "Built with **Next.js**, **TypeScript**, and **Tailwind CSS**, delivering a **modern, interactive, and visually appealing** fashion discovery experience powered by AI.",
    ],

    techStack: [
      { img: img18, name: "Next.js" },
      { img: img22, name: "TypeScript" },
      { img: img9, name: "Tailwind CSS" },
    ],

    features: [
      "**AI-powered outfit generation** - Get personalized fashion recommendations based on style preferences and occasions.",

      "**6 style categories** - Casual Everyday, Streetwear, Minimal/Clean, Smart Casual/Office, Aesthetic/Trendy, and Party/Night Out.",

      "**Interactive style explorer** - Browse and discover outfits with detailed descriptions and styling tips.",

      "**AI prompt-based suggestions** - Generate outfits using natural language prompts like 'Suggest comfortable casual outfits for everyday wear'.",

      "**Modern, visually-rich UI** with beautiful imagery and smooth animations for an immersive fashion experience.",

      "**Responsive design** optimized for all devices, making fashion inspiration accessible anywhere.",
    ],

    liveLink: "https://style-ai-albe.vercel.app",
  },
  {
    slug: "ai-vault",
    bannerImage: projectImg14,
    title: "AI Vault",

    description: [
      "A **comprehensive AI tools collection** that curates and organizes **hundreds of AI tools** in one platform for easy access, discovery, and comparison.",

      "Built with **Next.js**, **TypeScript**, and **Tailwind CSS**, delivering a **fast, searchable, and organized** directory of AI-powered tools and resources.",
    ],

    techStack: [
      { img: img18, name: "Next.js" },
      { img: img22, name: "TypeScript" },
      { img: img9, name: "Tailwind CSS" },
    ],

    features: [
      "**Curated collection of AI tools** - Discover hundreds of AI tools across multiple categories including text, image, video, audio, and analytics.",

      "**Advanced search and filtering** - Quickly find tools by category, use case, pricing model, or popularity.",

      "**Detailed tool profiles** with descriptions, features, pricing, use cases, and direct links to each tool.",

      "**Category-based browsing** - Explore tools organized by functionality like content creation, design, development, marketing, and more.",

      "**User ratings and reviews** - Community-driven feedback to help users choose the best AI tools.",

      "**Regular updates** with new AI tools and technologies added continuously to keep the collectio1n current.",

      "**Clean, organized interface** with intuitive navigation for seamless tool discovery and research.",
    ],
    liveLink: "https://ai-vault-git-main-riteshgharti333s-projects.vercel.app/",
  },
];

export const projectSmData = [
  {
    slug: "medi-care",
    title: "Medi Care",
    bannerImage: projectImg7,
    desc: "Full-stack hospital management platform with RBAC security, high-performance caching, and scalable React data architecture.",
    techStack: [
      "Typescript",
      "React.js",
      "Express.js",
      "Node.js",
      "PostgreSQL",
      "Prisma",
      "Supabase",
      "Redux",
      "Tailwind CSS",
      "AWS S3",
    ],
  },
  {
    slug: "international-academy-of-design",
    title: "International Academy of Design",
    bannerImage: projectImg11,
    desc: "Full-stack college website with admin dashboard and dynamic content control",
    techStack: [
      "React.js",
      "Express.js",
      "Node.js",
      "MongoDB",
      "mongoose",
      "Sass",
      "Cloudinary",
    ],
  },
  {
    slug: "star-marketing",
    title: "Star Marketing",
    bannerImage: projectImg9,
    desc: "MERN stack digital agency platform with content management",
    techStack: [
      "React.js",
      "Express.js",
      "Node.js",
      "MongoDB",
      "mongoose",
      "Sass",
      "Tailwind CSS",
      "Cloudinary",
    ],
  },

  {
    slug: "invoice-ready",
    title: "Invoice Ready",
    bannerImage: projectImg19,
    desc: "Full-stack billing platform with automated PDF generation, email & WhatsApp notifications, role-based access, and real-time revenue analytics dashboard.",
    techStack: [
      "TypeScript",
      "React.js",
      "Vite",
      "Express.js",
      "Node.js",
      "PostgreSQL",
      "Prisma",
      "Zustand",
      "Tailwind CSS",
      "Vitest",
    ],
  },

  {
    slug: "twipra-technologies",
    title: "Twipra Technologies",
    bannerImage: projectImg17,
    desc: "Leading service company in Bangladesh providing web, app, AI, digital marketing, editing, and server solutions.",
    techStack: [
      "Next.js",
      "Tailwind CSS",
      "TypeScript",
      "Node.js",
      "Express.js",
    ],
  },
  {
    slug: "tk-production-film",
    title: "TK Production Film",
    bannerImage: projectImg12,
    desc: "Wedding agency platform with dynamic content management",
    techStack: [
      "React.js",
      "Express.js",
      "Node.js",
      "MongoDB",
      "mongoose",
      "Sass",
      "Cloudinary",
      "Swiper",
    ],
  },
  {
    slug: "abhimanyu-holidays",
    title: "Abhimanyu Holidays",
    bannerImage: projectImg1,
    desc: "Travel website for Rajasthan tours with responsive design",
    techStack: [
      "React.js",
      "Tailwind CSS",
      "CSS3",
      "Framer Motion",
      "React Router",
    ],
  },
  {
    slug: "global-india-travel",
    title: "Global India Travels",
    bannerImage: projectImg6,
    desc: "Comprehensive travel booking platform with multiple services",
    techStack: ["React.js", "CSS3", "Sass", "React Router", "Swiper"],
  },

  {
    slug: "codefeast",
    title: "Codefeast",
    bannerImage: projectImg5,
    desc: "Ed-tech platform with payment integration and admin dashboard",
    techStack: ["React.js", "Sass", "Node.js", "Express.js"],
  },
  {
    slug: "trade-dad",
    title: "Trade Dad",
    bannerImage: projectImg13,
    desc: "Real-time trading app backend with Upstox SDK integration",
    techStack: ["Express.js", "Node.js", "MongoDB", "mongoose"],
  },
  {
    slug: "fittercall",
    title: "FitterCall",
    bannerImage: projectImg16,
    desc: "Comprehensive health and fitness platform providing all-in-one calculators including BMI, BMR, Body Fat Percentage, TDEE, Ideal Weight, Macro Nutrients, Waist-to-Hip Ratio, and Water Intake calculators.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    slug: "chery-diary",
    title: "Chery Diary",
    bannerImage: projectImg15,
    desc: "Blog web application for sharing stories, thoughts, and personal experiences.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS"],
  },

  {
    slug: "ai-fashion-assistant",
    title: "AI Fashion Assistant",
    bannerImage: projectImg18,
    desc: "AI-powered fashion styling platform that generates personalized outfit recommendations across Casual Everyday, Streetwear, Minimal, Smart Casual, Aesthetic, and Party wear styles.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    slug: "ai-vault",
    title: "AI Vault",
    bannerImage: projectImg14,
    desc: "Collection of many AI tools curated in one platform for easy access and discovery.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS"],
  },

  {
    slug: "bs-printers",
    title: "BS Printers",
    bannerImage: projectImg3,
    desc: "Modern printing platform with product showcase",
    techStack: ["React.js", "CSS3", "Sass", "React Router"],
  },
];
