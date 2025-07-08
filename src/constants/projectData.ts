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

const img30 =
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original.svg";

import projectImg1 from "../assets/images/projectImgs/abhimanyu.jpeg";
import projectImg2 from "../assets/images/projectImgs/bk.jpeg";
import projectImg3 from "../assets/images/projectImgs/bsprinter.jpeg";
import projectImg4 from "../assets/images/projectImgs/building.jpeg";
import projectImg5 from "../assets/images/projectImgs/codefeast.jpeg";
import projectImg6 from "../assets/images/projectImgs/global.jpeg";
import projectImg7 from "../assets/images/projectImgs/hospital.jpeg";
import projectImg8 from "../assets/images/projectImgs/invoice.jpeg";
import projectImg9 from "../assets/images/projectImgs/star.jpeg";
import projectImg10 from "../assets/images/projectImgs/streamer.jpeg";
import projectImg11 from "../assets/images/projectImgs/thenad.jpeg";
import projectImg12 from "../assets/images/projectImgs/tk.jpeg";

import projectImg13 from "../assets/images/projectImgs/trade.jpg";

import projectImg14 from "../assets/images/projectImgs/thinker.png";

export const homeProjectData = [
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
    slug: "star-marketing-invoice",
    title: "Star Marketing Invoice",
    img: projectImg8,
    description:
      "MERN stack invoice management system for businesses with PDF generation and financial reporting.",
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
  {
    slug: "streamer",
    title: "Streamer",
    img: projectImg10,
    description:
      "Movie streaming platform with Stripe subscriptions, Firebase storage, and role-based admin dashboard.",
    techStack: [
      "React.js",
      "Express.js",
      "Node.js",
      "MongoDB",
      "mongoose",
      "Sass",
      "Redux",
      "Firebase",
    ],
  },
  {
    slug: "tk-production-film",
    title: "TK Production Film",
    img: projectImg12,
    description:
      "Wedding agency platform with dynamic galleries, drag-and-drop admin, and Cloudinary media storage.",
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
    slug: "hospital-management",
    title: "Hospital Management",
    img: projectImg7,
    description:
      "Ongoing hospital management system with TypeScript backend, Prisma ORM, and React Query.",
    techStack: [
      "React.js",
      "Express.js",
      "Node.js",
      "PostgreSQL",
      "Prisma",
      "Supabase",
      "Redux",
      "Tailwind CSS",
      "Cloudinary",
    ],
  },
];

export const projectData = [
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
        name: "Frontend Code",
        codeLink: "https://github.com/riteshgharti333/Collage_project_frontend",
      },
      {
        name: "Backend Code",
        codeLink: "https://github.com/riteshgharti333/Collage_project_backend",
      },
      {
        name: "Admin Dasboard Code",
        codeLink: "https://github.com/riteshgharti333/Collage-project-admin",
      },
    ],

    fullStackLiveLink: [
      {
        name: "Frontend Live Demo",
        liveLink: "https://inad.in",
      },
      {
        name: "Admin Live Demo",
        liveLink: "https://project6-admin.vercel.app",
      },
    ],
  },

  {
    slug: "star-marketing-invoice",
    bannerImage: projectImg8,
    title: "Star Marketing Invoice",
    description: [
      "**Star Marketing Invoice** is a **full-stack invoice management platform** built using the **MERN stack (MongoDB, Express, React, Node.js)**, designed for **small to medium businesses** to handle their **complete billing workflow** — from **product management** to **invoice generation** and **report tracking**.",
      "The platform is **fully responsive**, enabling users to manage their invoicing system across all devices with ease. Businesses can **create, store, and manage invoices**, track **billing history**, and monitor **company-wide financial reports** in real time.",
      "Built with a focus on **clean UI**, **robust functionality**, and **scalability**, the system empowers clients to streamline their **daily operations**, reduce manual effort, and gain **data-driven insights** into business performance.",
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
      "**Full-stack invoice management system** built using the **MERN stack**, designed for **small and medium-sized businesses** to manage the **entire billing lifecycle** from **product handling** to **invoice tracking** and **financial reporting**.",

      "**Dynamic PDF invoice generation** that allows businesses to **create downloadable, shareable invoices** with **real-time data insertion**, including client details, itemized billing, tax calculations, and total summaries.",

      "**One-click invoice delivery**, enabling users to **send PDF invoices via email directly from the platform**, streamlining communication and payment cycles with clients.",

      "**Centralized billing dashboard** where users can **view, filter, and manage all invoices**, monitor outstanding payments, and track **billing history** efficiently.",

      "**Advanced React Table integration** for displaying and managing invoices, clients, products, and transaction history — with features like **sorting**, **filtering**, and **inline actions** for a seamless data experience.",

      "**Optimized financial logic using custom algorithms** to handle complex **mathematical conditions**, such as multi-level tax, discounts, and subtotals — ensuring **accurate billing and calculations** every time.",

      "**Robust search and filter functionality** allowing users to quickly find invoices, products, or clients using **multi-field keyword search, date ranges, and custom filters**.",

      "**Fully responsive and user-friendly design** focused on **clarity, speed, and ease of use**, making it accessible for non-technical users on both desktop and mobile devices.",

      "**Scalable and clean architecture** with reusable components, modular structure, and DRY code practices to support **future enhancements** and **easy maintenance**.",

      "**Real-time reporting and analytics section** offering businesses **insights into sales, revenues, and billing performance**, helping in informed decision-making and financial planning.",
    ],

    impact: [
      "**Streamlined billing workflows** for small and medium businesses through a **centralized invoicing platform**, reducing manual tasks and improving financial accuracy.",

      "**Faster client communication** with **one-click PDF invoice delivery via email**, helping businesses **get paid quicker** and maintain a consistent payment cycle.",

      "**Improved financial clarity and control** via a **real-time dashboard** that tracks invoices, outstanding payments, and billing history in one unified interface.",

      "**Professional-grade PDF invoices** with **dynamic, real-time data** provide a **shareable, client-ready format** for seamless business operations.",

      "**Accurate billing calculations** achieved using **custom financial algorithms** that handle **multi-level tax, discounts, and subtotal logic**, ensuring error-free invoicing.",

      "**Increased operational efficiency** via **robust search and filter tools**, enabling users to quickly locate invoices, clients, or products using advanced multi-field criteria.",

      "**Empowered decision-making** through a **dedicated analytics section**, giving businesses insights into **sales performance**, **revenue trends**, and overall billing health.",

      "**Greater accessibility** through a **fully responsive, user-friendly UI** that supports smooth invoice management on desktop, tablet, or mobile — ideal for business owners on the move.",

      "**Scalability and long-term maintainability** enabled by a **modular architecture** and **DRY component structure**, supporting new features and future growth without refactoring.",

      "**Reduced learning curve for teams** through a **clean, intuitive interface** built specifically for **non-technical users**, ensuring adoption across various roles in the business.",
    ],

    challenges: [
      "Architecting a **robust and flexible invoice generation engine** capable of handling **complex billing logic** including multi-level tax calculations, dynamic discounts, subtotals, and real-time total updates — all while maintaining financial accuracy.",

      "Designing a **modular Mongoose schema** for entities like invoices, clients, products, and transactions to support **scalable data relationships**, **advanced search filters**, and **real-time financial analytics**.",

      "Implementing **PDF generation and automated email delivery** with real-time data binding, requiring precise formatting, dynamic styling, and **secure one-click delivery flows** to ensure professional communication and timely payments.",

      "Balancing **performance and interactivity** in the dashboard by integrating **real-time data updates**, **intuitive visualizations**, and **responsive UI components** that support seamless access across desktop and mobile devices.",
    ],

    isFullStack: true,

    fullStackCodeLink: [
      {
        name: "Frontend Code",
        codeLink: "https://github.com/riteshgharti333/star_marketing_invoice",
      },
      {
        name: "Backend Code",
        codeLink:
          "https://github.com/riteshgharti333/star_marketing_invoice_backend",
      },
    ],

    fullStackLiveLink: [
      {
        name: "Frontend Live Demo",
        liveLink: "https://project-7-theta.vercel.app",
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
        name: "Frontend Code",
        codeLink: "https://github.com/riteshgharti333/star_marketing_frontend",
      },
      {
        name: "Backend Code",
        codeLink: "https://github.com/riteshgharti333/star_marketing_backend",
      },
      {
        name: "Admin Dasboard Code",
        codeLink: "https://github.com/riteshgharti333/star_marketing_admin",
      },
    ],

    fullStackLiveLink: [
      {
        name: "Frontend Live Demo",
        liveLink: "https://wingstarnarketing.com",
      },
      {
        name: "Admin Live Demo",
        liveLink: "https://project9-admin.vercel.app",
      },
    ],
  },

  {
    slug: "streamer",
    bannerImage: projectImg10,
    title: "Streamer",

    description: [
      "A **full-stack movie streaming platform** with an integrated **admin dashboard**, built using the **MERN stack**, **Redux Toolkit**, **Firebase**, and **Material UI (MUI)** — designed to manage over **1,000+ dynamic content entries** with seamless **real-time updates** and **role-based access control (RBAC)**.",
      "Features include **subscription billing with Stripe**, **dynamic chart visualizations**, and **skeleton loaders** to improve **perceived performance by 30%**, enhancing the user experience during data fetching and rendering.",
      "Deployed via **CI/CD pipelines** to **Vercel** and **Render** with **zero-downtime updates**, ensuring a **production-ready**, **scalable**, and **high-performance deployment workflow**.",
    ],

    techStack: [
      { img: img3, name: "React.js" },
      { img: img19, name: "Express.js" },
      { img: img4, name: "Node.js" },
      { img: img14, name: "MongoDB" },
      { img: img15, name: "mongoose" },
      { img: img1, name: "Sass" },
      { img: img7, name: "Redux" },
      { img: img16, name: "Firebase" },
    ],

    features: [
      "**Full-stack movie streaming platform** built using the **MERN stack**, **Firebase**, **Redux Toolkit**, and **Material UI (MUI)** — developed to manage **1,000+ dynamic movie entries** with seamless performance and scalability.",

      "**Admin dashboard with role-based access control (RBAC)** to manage **movies**, **users**, **subscriptions**, **categories**, and **media** — featuring dynamic CRUD operations and real-time updates.",

      "**Stripe-based subscription billing system** integrated for **secure payments**, **automated billing cycles**, and **tier-based content access** — empowering revenue generation and access control.",

      "**Global state management using Redux Toolkit**, streamlining **auth handling**, **UI states**, **user sessions**, and **admin actions** across the entire app with optimized reducers and slices.",

      "**Real-time analytics and platform metrics** powered by **Chart.js**, including **total revenue**, **user engagement**, **content views**, and **subscription insights** — all accessible via the admin panel.",

      "**Full-featured authentication flow** including **JWT-secured login**, **signup**, **forgot password**, **password update**, **profile management**, and **Firebase session handling** for persistent user access.",

      "**Search functionality and multi-category support**, allowing users to **filter movies** by **genre**, **keywords**, and **tags** for faster discovery and browsing.",

      "**Media storage integration with Firebase**, enabling **high-quality video/image uploads**, real-time database sync, and optimized delivery via CDN with secure access controls.",

      "**Skeleton loaders and lazy loading strategies** implemented using **MUI** to **improve perceived performance by 30%**, ensuring smooth data transitions and rendering.",

      "**Responsive Material UI-based admin and user dashboards**, designed for **clarity**, **usability**, and **mobile accessibility**, ensuring a premium user experience for both content managers and viewers.",

      "**CI/CD pipelines configured with Vercel (frontend) and Render (backend)** for **zero-downtime deployments**, automatic environment builds, and seamless production workflows.",
    ],

    impact: [
      "**Enabled scalable content delivery** by managing over **1,000+ dynamic movie entries**, allowing the platform to support growing libraries without performance drops.",

      "**Boosted monetization** through **secure Stripe-based subscription billing**, enabling recurring revenue and controlled access to premium content tiers.",

      "**Empowered content teams** with a **role-based admin dashboard**, streamlining daily tasks like movie uploads, category management, and subscription tracking — all in real time.",

      "**Enhanced user retention** by offering a **personalized and smooth content browsing experience**, supported by filters, category tagging, and instant search capabilities.",

      "**Increased trust and user security** with a **robust authentication system** (JWT + Firebase sessions), ensuring secure logins, persistent sessions, and recovery features.",

      "**Improved platform decisions** with **real-time analytics dashboards**, allowing admins to monitor revenue, user engagement, and viewership trends for content planning.",

      "**Accelerated UI responsiveness** with **skeleton loaders** and **lazy loading**, reducing bounce rates and increasing engagement on slow or unstable connections.",

      "**Delivered a consistent cross-device experience** through **fully responsive user and admin panels** built with Material UI — optimized for mobile, tablet, and desktop views.",

      "**Reduced deployment friction** and **ensured high uptime** with a fully automated **CI/CD workflow** across Vercel and Render, allowing smooth feature rollouts and safe production updates.",

      "**Optimized global state management** using Redux Toolkit, maintaining stable app behavior and performance as user sessions and content interactions scale.",
    ],

    challenges: [
      "Integrating a **subscription-based payment system using Stripe**, requiring secure handling of webhooks, tier-based access logic, and syncing billing events with user roles in real time.",

      "Building a **robust role-based admin system** that allowed fine-grained control over movies, users, and subscriptions — while enforcing strict **access permissions and data isolation** across roles.",

      "Managing and rendering **1,000+ media-heavy movie entries** with efficient pagination, lazy loading, and optimized Firebase storage access — without compromising app performance.",

      "Designing a **real-time analytics dashboard** using Chart.js, including dynamic data visualization for revenue, engagement, and platform metrics — all while maintaining responsive UI and backend performance.",

      "Ensuring **secure and persistent authentication** using a hybrid approach with **JWT tokens and Firebase session handling**, requiring tight coordination between frontend, backend, and third-party auth layers.",

      "Deploying the project via **CI/CD pipelines across Vercel and Render**, handling environment-specific builds and secrets for frontend-backend communication, while ensuring zero-downtime rollouts.",

      "Creating a **scalable category and tagging system** for movies with dynamic filters and search — requiring optimized MongoDB queries and frontend state synchronization for fast UX.",

      "Maintaining **consistent and accessible UI design** across both user and admin panels using Material UI, while customizing components to match mobile-first design needs without bloating performance.",
    ],

    isFullStack: true,

    fullStackCodeLink: [
      {
        name: "Frontend Code",
        codeLink: "https://github.com/riteshgharti333/streamer_frontend",
      },
      {
        name: "Backend Code",
        codeLink: "https://github.com/riteshgharti333/streamer_backend",
      },
      {
        name: "Admin Dasboard Code",
        codeLink: "https://github.com/riteshgharti333/streamer_admin_dashboard",
      },
    ],

    fullStackLiveLink: [
      {
        name: "Frontend Live Demo",
        liveLink: "https://streamer-frontend.vercel.app",
      },
      {
        name: "Admin Live Demo",
        liveLink: "https://streamer-admin-dashboard.vercel.app",
      },
    ],
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
        name: "Admin Dasboard Code",
        codeLink: "https://github.com/riteshgharti333/tk_production_film_admin",
      },
    ],

    fullStackLiveLink: [
      {
        name: "Frontend Live Demo",
        liveLink: "https://project3-new-frontend.vercel.app",
      },
      {
        name: "Admin Live Demo",
        liveLink: "https://project-3-admin-xr5l.vercel.app",
      },
    ],
  },

  {
    slug: "hospital-management",
    bannerImage: projectImg7,
    title: "Hospital Management (Ongoing)",

    description: [
      "A **robust hospital management web application** built using a **modern full-stack architecture**, featuring a **TypeScript-powered backend** with **Express.js**, **Prisma ORM**, and **PostgreSQL** — designed to handle **advanced healthcare data workflows** securely and efficiently.",
      "The frontend is developed using **React** with **Tailwind CSS**, offering a **clean**, **fully responsive**, and **user-friendly UI**, tailored for administrative staff and healthcare professionals to manage **patients**, **appointments**, **departments**, and **medical records**.",
      "Utilizes **React Query** for **automatic and optimized data fetching**, enabling real-time updates and reducing manual reloads — resulting in a **smooth, high-performance experience** across all user interactions.",
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
      { img: img28, name: "Cloudinary" },
    ],

    features: [
      "**Full-stack hospital management system** designed for clinics and hospitals, built using **React**, **TypeScript**, **Express.js**, **Prisma ORM**, and **PostgreSQL** — engineered for **security, scalability, and clinical efficiency**.",

      "**Advanced monorepo architecture** using workspaces and module aliasing, enabling **shared Zod schemas** between the backend (TypeScript) and frontend (JavaScript) for **type-safe form validation and API communication**.",

      "**Zod-based schema validation** across all form submissions (patients, appointments, departments) to enforce **strong runtime and compile-time validation**, improving data quality and developer safety.",

      "**JWT-based authentication system** with **role-based access control (RBAC)** for admins, doctors, and staff — including support for **secure login**, **password update flows**, and **profile management**.",

      "**Global state management with Redux Toolkit**, handling authentication state, user sessions, and shared application state with **modular, scalable reducers**.",

      "**Real-time data fetching and caching** using **React Query**, enabling **automatic background updates**, **retry mechanisms**, and **no manual refresh** during patient or appointment updates.",

      "**Responsive admin dashboard UI** with **Tailwind CSS**, tailored for both desktop and mobile use, allowing healthcare staff to manage **patient data**, **appointment bookings**, **department lists**, and **medical records** seamlessly.",

      "**Dynamic content tables** built with **TanStack Table (React Table)**, providing advanced features like **column filtering**, **sorting**, **pagination**, and **editable rows** for managing large hospital datasets efficiently.",

      "**Interactive chart visualizations** using **React ApexCharts** to provide **insightful reports** like patient flow, appointment stats, and department activity — helping hospitals make **data-driven decisions**.",

      "**Optimized loading and performance techniques** including **lazy loading**, **code-splitting**, and **image optimization**, ensuring smooth UX even on low bandwidth and large datasets.",

      "**Cross-platform deployment configured** using **Vercel (frontend)** and **Render (backend)** with automatic CI/CD, environment management, and health checks for production-readiness.",

      "**Minimal yet clean UI/UX** to support rapid access and readability, designed around hospital workflows and optimized for **staff productivity and clinical accuracy**.",
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
      "Architecting an **advanced monorepo structure** using Yarn workspaces and module aliasing to enable **shared Zod validation schemas** across frontend and backend — ensuring **type safety**, reduced duplication, and aligned API contracts.",

      "Overcoming deployment hurdles caused by **monorepo limitations on platforms like Render and Vercel**, which required **custom build scripts**, **environment isolation**, and workspace-specific configuration to deploy the backend (Express/Prisma) and frontend (React/Next) separately and reliably.",

      "Maintaining **consistent runtime validation** with Zod across both sides of the application — ensuring that **form inputs, database operations, and API requests** were type-safe, synchronized, and easily extendable without breaking validation flow.",
    ],

    isFullStack: true,

    fullStackCodeLink: [
      {
        name: "Frontend Code",
        codeLink: "https://github.com/riteshgharti333/hospital_management_app",
      },
      {
        name: "Backend Code",
        codeLink: "https://github.com/riteshgharti333/hospital_management_app",
      },
    ],

    fullStackLiveLink: [
      {
        name: "Frontend Live Demo",
        liveLink: "https://hospital-management-app-nine.vercel.app",
      },
    ],
  },

  {
    slug: "thinker",
    bannerImage: projectImg14,
    title: "Thinker",

    description: [
      "A **full-stack blog application** designed for **multi-user content publishing**, allowing users to **create, update, and manage blog posts** through complete **CRUD functionality** — built with a focus on **responsive design**, **clean architecture**, and **engaging UX**.",
      "Implemented **RESTful APIs** for user and blog management with **JWT-based authentication**, supporting **secure signup**, **login**, and **password recovery**, ensuring **data privacy** and smooth session handling across the platform.",
      "Developed over **15+ reusable React components and pages**, integrated **Cloudinary** for efficient image handling, and deployed the **backend on Render** for a stable and scalable production setup.",
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
      "**Full-featured multi-user blog platform** built with the **MERN stack**, enabling users to **create, read, update, and delete (CRUD)** blog posts in a dynamic, real-time environment.",

      "**Protected content ownership logic** ensures that **only the original author** can **edit or delete their own posts**, safeguarding against unauthorized modifications and preserving data integrity.",

      "**JWT-based authentication system** for secure **signup**, **login**, and **password recovery**, enabling persistent, protected sessions with token-based access control.",

      "**RESTful API structure** for managing **users**, **blogs**, and **media**, using modular routes, proper HTTP methods, and scalable design patterns.",

      "**Cloudinary integration** for image upload and optimization, enabling **high-performance media handling** with automatic compression and delivery via CDN.",

      "**Mobile-first responsive design** crafted with **React** and **Tailwind CSS**, ensuring **seamless usability** across desktops, tablets, and mobile devices.",

      "**Build reusable components and pages** following **DRY principles**, allowing for easy expansion, maintainability, and reduced code duplication.",

      "**Real-time dashboard updates** allow users to **edit, delete, or preview** their own blog posts instantly, with intuitive feedback and UI animations.",

      "**Backend deployed on Render**, providing **production-level performance**, auto-scaling, and high availability for user traffic.",
    ],

    impact: [
      "**Empowered individual content creators** with a secure and intuitive platform to **manage their blogs independently**, helping foster user ownership and creativity.",

      "**Enhanced user experience across all devices** through a **mobile-first responsive UI**, increasing engagement and reducing bounce rates on smartphones and tablets.",

      "**Streamlined content publishing workflows** with real-time dashboard updates and feedback mechanisms, allowing creators to **edit or preview posts instantly** without delay.",

      "**Reduced maintenance overhead** and accelerated development using a **component-driven architecture**, enabling easy scaling and feature rollouts.",

      "**Delivered stable, production-ready performance** using Render’s backend hosting, ensuring **reliability under real traffic** without compromising on speed.",

      "**Strengthened security posture** across the platform through **JWT-based session control** and structured API routes, guarding against unauthorized access and common vulnerabilities.",

      "**Supported long-term scalability** with a modular **RESTful backend**, laying the groundwork for future feature integrations like comments, likes, and content categories.",

      "**Created a developer-friendly codebase** following **best practices (DRY, modular routing, separation of concerns)**, simplifying collaboration, debugging, and onboarding.",
    ],

    challenges: [
      "Designing a **JWT-based authentication system** that supports secure login, signup, and password recovery — while ensuring **persistent sessions**, token expiration handling, and protection against unauthorized access to user-specific routes.",

      "Building a **responsive, real-time blog dashboard** that updates post actions (edit, delete) instantly — requiring efficient state management, conditional rendering, and smooth UX feedback without reloading the page.",
    ],

    isFullStack: true,

    fullStackCodeLink: [
      {
        name: "Frontend Code",
        codeLink: "https://github.com/riteshgharti333/thinker_frontend",
      },
      {
        name: "Backend Code",
        codeLink: "https://github.com/riteshgharti333/thinker_backend",
      },
    ],

    fullStackLiveLink: [
      {
        name: "Frontend Live Demo",
        liveLink: "https://thinker-frontend-4jyh.vercel.app",
      },
    ],
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

    githubLink: "https://github.com/riteshgharti333/Trade-Dad-App-Backend",
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
    liveLink: "https://abhimanyuholidays.com",
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
    liveLink: "https://globalindiatravels.com",
  },

  {
    slug: "bk-welfare-society",
    bannerImage: projectImg2,
    title: "BK Welfare Society",
    description: [
      "A **community-centric platform** designed to showcase **individual achievements** and **social contributions**, focused on **accessibility**, **clarity**, and **visual storytelling**.",
      "Built with a **mobile-first approach**, ensuring **high readability**, **responsive design**, and **inclusive user experience** across all demographics, including **non-tech-savvy users**.",
    ],
    techStack: [
      { img: img3, name: "React.js" },
      { img: img2, name: "CSS3" },
      { img: img1, name: "Sass" },
      { img: img25, name: "React Router" },
    ],
    features: [
      "**Dynamic achievement showcase** using a custom-built image carousel",
      "**Dedicated content sections** for Employment, Youth Initiatives, and Government Schemes",
      "**Accessibility-first typography** for **legibility across age groups**",
      "**Fully responsive layout** adapting to **all screen sizes and devices**",
      "**Smooth client-side routing** using React Router with structured navigation",
    ],
    impact: [
      "**Increased public engagement** through impactful visual storytelling",
      "**Enhanced accessibility** for elderly users with **clear typography** and **scalable layouts**",
      "**Consistent cross-device experience** tested on **20+ screen resolutions**",
      "**Faster information discovery** via **clean layout** and **content hierarchy**",
    ],
    challenges: [
      "Designing a **modern yet accessible UI** for **elderly and non-technical audiences**",
      "Creating a **minimal yet informative content structure** with clear visual hierarchy",
      "Maintaining **visual consistency and performance** across varied device types",
    ],
    githubLink: "https://github.com/riteshgharti333/BK-Welfare-Society",
    liveLink: "https://www.bkwelfaresociety.com",
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
    liveLink: "https://bsprinters.co.in",
  },

  {
    slug: "kilaniya-construction",
    bannerImage: projectImg4,
    title: "Kilaniya Building Construction & Design (Incomplete)",
    description: [
      "A **clean, content-focused platform** showcasing architectural projects and construction services — emphasizing **structural clarity**, **material authenticity**, and **project transparency** through minimalist design.",
      "Currently in progress — focusing on **core functionality** for project displays while maintaining **load speed** and **accessibility** as top priorities.",
    ],
    techStack: [
      { img: img3, name: "React.js" },
      { img: img2, name: "CSS3" },
      { img: img1, name: "Sass" },
      { img: img25, name: "React Router" },
    ],
    features: [
      "**Project showcase** with **grid-based layouts** highlighting construction phases from foundation to finishing",
      "**Service categorization** for residential/commercial/renovation work with **minimalist filtering**",
    ],
    impact: [
      "**Improved client comprehension** of complex builds through **structured visual storytelling**",
      "**Streamlined project updates** using **lightweight** content modules",
    ],
    challenges: [
      "Balancing **technical construction details** with **client-friendly presentation**",
    ],
    githubLink:
      "https://github.com/riteshgharti333/Kilaniya-Building-Construction-Design",
    liveLink: "https://project4-five-ashen.vercel.app",
  },
];

export const projectSmData = [
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
    slug: "star-marketing-invoice",
    title: "Star Marketing Invoice",
    bannerImage: projectImg8,
    desc: "MERN stack invoice management platform for small businesses",
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
    slug: "streamer",
    title: "Streamer",
    bannerImage: projectImg10,
    desc: "Full-stack movie platform with Stripe subscriptions and admin dashboard",
    techStack: [
      "React.js",
      "Express.js",
      "Node.js",
      "MongoDB",
      "mongoose",
      "Sass",
      "Redux",
      "Firebase",
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
    slug: "hospital-management",
    title: "Hospital Management",
    bannerImage: projectImg7,
    desc: "Ongoing hospital management system with TypeScript backend",
    techStack: [
      "React.js",
      "Express.js",
      "Node.js",
      "PostgreSQL",
      "Prisma",
      "Supabase",
      "Redux",
      "Tailwind CSS",
    ],
  },
  {
    slug: "thinker",
    title: "Thinker",
    bannerImage: projectImg14,
    desc: "Full-stack blog application with JWT authentication",
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
    slug: "codefeast",
    title: "Codefeast",
    bannerImage: projectImg5,
    desc: "Ed-tech platform with payment integration and admin dashboard",
    techStack: ["React.js", "Sass"],
  },
  {
    slug: "trade-dad",
    title: "Trade Dad",
    bannerImage: projectImg13,
    desc: "Real-time trading app backend with Upstox SDK integration",
    techStack: ["Express.js", "Node.js", "MongoDB", "mongoose"],
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
    slug: "bk-welfare-society",
    title: "BK Welfare Society",
    bannerImage: projectImg2,
    desc: "Community platform showcasing achievements and initiatives",
    techStack: ["React.js", "CSS3", "Sass", "React Router"],
  },
  {
    slug: "bs-printers",
    title: "BS Printers",
    bannerImage: projectImg3,
    desc: "Modern printing platform with product showcase",
    techStack: ["React.js", "CSS3", "Sass", "React Router"],
  },
  {
    slug: "kilaniya-construction",
    title: "Kilaniya Building Construction & Design",
    bannerImage: projectImg4,
    desc: "In-progress construction company website",
    techStack: ["React.js", "CSS3", "Sass", "React Router"],
  },
];
