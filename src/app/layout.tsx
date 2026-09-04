import type { Metadata } from "next";
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

export const metadata: Metadata = {
  metadataBase: new URL("https://ritesh-gharti-portfolio.vercel.app"),

  title: {
    default: "Ritesh Gharti | Full Stack Engineer",
    template: "%s | Ritesh Gharti",
  },

  description:
    "Ritesh Gharti is a Full Stack Engineer and Software Developer who builds scalable, reliable, and modern software solutions. Explore his professional experience, projects, and approach to designing and developing high-quality web applications.",

  keywords: [
    "Ritesh Gharti",
    "Ritesh Gharti developer",
    "Ritesh Gharti portfolio",
    "Full Stack Engineer",
    "Full Stack Developer",
    "Software Engineer",
    "Software Developer",
    "Web Developer",
    "Web Application Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript Developer",
    "Node.js Developer",
    "Frontend Developer",
    "Backend Developer",
    "Software Development",
    "Web Application Development",
  ],

  authors: [
    {
      name: "Ritesh Gharti",
      url: "https://ritesh-gharti-portfolio.vercel.app",
    },
  ],

  creator: "Ritesh Gharti",

  publisher: "Ritesh Gharti",

  category: "technology",

  alternates: {
    canonical: "https://ritesh-gharti-portfolio.vercel.app",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ritesh-gharti-portfolio.vercel.app",
    siteName: "Ritesh Gharti Portfolio",
    title: "Ritesh Gharti | Full Stack Engineer",
    description:
      "Portfolio of Ritesh Gharti, a Full Stack Engineer and Software Developer focused on building scalable, reliable, and modern software solutions.",
  },

  twitter: {
    card: "summary_large_image",
    title: "Ritesh Gharti | Full Stack Engineer",
    description:
      "Ritesh Gharti is a Full Stack Engineer and Software Developer building scalable, reliable, and modern software solutions.",
  },

  icons: {
    icon: "/logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full" suppressHydrationWarning>
      <head>
        {/* Prevent dark mode flash */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  var systemDark = window.matchMedia(
                    '(prefers-color-scheme: dark)'
                  ).matches;

                  if (theme === 'dark' || (!theme && systemDark)) {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                } catch (e) {
                  if (
                    window.matchMedia(
                      '(prefers-color-scheme: dark)'
                    ).matches
                  ) {
                    document.documentElement.classList.add('dark');
                  }
                }
              })();
            `,
          }}
        />

        {/* Prevent white flash and scrollbar */}
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

              html body {
                background-color: #0a0a0a;
              }

              html:not(.dark) body {
                background-color: #ffffff;
              }

              .preload * {
                transition: none !important;
                animation: none !important;
              }
            `,
          }}
        />

        {/* Preconnect to Devicon CDN */}
        <link
          rel="preconnect"
          href="https://cdn.jsdelivr.net"
          crossOrigin="anonymous"
        />

        {/* Devicon */}
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
        />
      </head>

      <body
        className={`${poppins.variable} font-sans antialiased h-full relative preload`}
      >
        {/* Remove preload class after page loads */}
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

        <div className="fixed inset-0 -z-10 overflow-hidden" />

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
