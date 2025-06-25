import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "./components/layout/Navbar";
import ParticleBackground from "./components/layout/DotGrid";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
});

export const metadata = {
  title: "Advanced AI Portfolio",
  description: "Modern bold portfolio design using Poppins.",
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
        {/* DotGrid Background - fixed to viewport */}
        <div className="fixed inset-0 -z-10 overflow-hidden">
          <ParticleBackground
          
          />
        </div>

        {/* Content */}
        <div className="relative z-10 min-h-full">
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}
