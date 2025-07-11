import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "./components/layout/Navbar";
import ParticleBackground from "./components/layout/DotGrid";
import Footer from "./components/layout/Footer";
import { Toaster } from "sonner";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
});

export const metadata = {
  title: "Ritesh Gharti Portfolio",
  description: "Explore the professional portfolio of Ritesh – a full-stack developer passionate about building modern, scalable web applications using the MERN stack. Showcasing real-world projects, production-ready code, and a deep commitment to clean design and performance.",
  icons: {
    icon: "/logo.svg"
  },
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
        />
      </head>
      <body className={`${poppins.variable} font-sans antialiased h-full relative`}>
        <Toaster position="top-right" richColors closeButton />
        <div className="fixed inset-0 -z-10 overflow-hidden">
          <ParticleBackground />
        </div>
        <div className="relative z-10 min-h-full">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
