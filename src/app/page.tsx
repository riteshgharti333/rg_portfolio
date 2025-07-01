import About from "./components/home/About";
import Contact from "./components/home/Contact";
import HomeBanner from "./components/home/HomeBanner";
import Projects from "./components/home/Projects";
import Skills from "./components/home/Skills";


export default function Home() {
  return (
   <div className="flex flex-col gap-25">
    <HomeBanner />
    <Projects />
    <Skills />
    <About />

    <Contact />
   </div>
  );
}
