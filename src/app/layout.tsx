import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import { Toaster } from "sonner";
import DarkModeToggle from "./components/ui/DarkModeToggle";
import MouseGradient from "./components/ui/MouseGradient";
import ScrollbarWrapper from "./ScrollbarWrapper";
import BG from "./components/layout/BG";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
});

export const metadata = {
  title: "Ritesh Gharti | Full Stack Developer",
  description:
    "Explore the professional portfolio of Ritesh – a full-stack developer passionate about building modern, scalable web applications using the MERN stack.",
  keywords: [
    "full-stack developer",
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "PostgreSQL",
    "MERN stack",
    "web development",
    "portfolio",
    "Ritesh Gharti",
  ],
  authors: [{ name: "Ritesh Gharti" }],
  creator: "Ritesh Gharti",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://rgdev-portfolio-six.vercel.app",
    siteName: "Ritesh Gharti Portfolio",
    title: "Ritesh Gharti | Full Stack Developer",
    description:
      "Full-stack developer passionate about building modern, scalable web applications using the MERN stack.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ritesh Gharti | Full Stack Developer",
    description:
      "Full-stack developer passionate about building modern, scalable web applications.",
  },
  icons: {
    icon: "/logo.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full" suppressHydrationWarning>
      <head>
        {/* Prevent dark mode flash - runs before page render */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  var systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  
                  if (theme === 'dark' || (!theme && systemDark)) {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                } catch (e) {
                  // Fallback to system preference
                  if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
                    document.documentElement.classList.add('dark');
                  }
                }
              })();
            `,
          }}
        />

        {/* Prevent white flash by setting initial background */}
        <style
          dangerouslySetInnerHTML={{
            __html: `
              html {
                scrollbar-width: none !important;
              }
              html::-webkit-scrollbar {
                width: 0 !important;
                height: 0 !important;
                display: none !important;
              }
              
              /* Set initial background to prevent white flash */
              html body {
                background-color: #0a0a0a;
              }
              html:not(.dark) body {
                background-color: #ffffff;
              }
              
              /* Prevent transitions on initial load */
              .preload * {
                transition: none !important;
                animation: none !important;
              }
            `,
          }}
        />

        {/* Canonical URL */}
        <link rel="canonical" href="https://rgdev-portfolio-six.vercel.app" />

        {/* Preconnect to external resources */}
        <link
          rel="preconnect"
          href="https://cdn.jsdelivr.net"
          crossOrigin="anonymous"
        />

        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
        />
      </head>
      <body
        className={`${poppins.variable} font-sans antialiased h-full relative preload`}
      >
        {/* Script to remove preload class after page loads */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.addEventListener('load', function() {
                document.body.classList.remove('preload');
              });
            `,
          }}
        />

        <Toaster position="top-right" richColors closeButton />
        <div className="fixed inset-0 -z-10 overflow-hidden"></div>
        <div className="relative z-10 min-h-full">
          <BG />
          <MouseGradient />
          <Navbar />
          <ScrollbarWrapper />
          {children}
          <Footer />
          <DarkModeToggle />
        </div>
      </body>
    </html>
  );
}
