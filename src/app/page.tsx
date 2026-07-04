import Buttons from "./components/Buttons";
import Buttons3 from "./components/Buttons3";
import Buttons2 from "./components/Buttons2";
import About from "./components/home/About";
import Contact from "./components/home/Contact";
import HomeBanner from "./components/home/HomeBanner";
import Projects from "./components/home/Projects";
import Skills from "./components/home/Skills";
import Buttons4 from "./components/Buttons4";
import Services from "./components/home/Services";
import ScrollIndicator from "./components/ui/ScrollIndicator";

export default function Home() {
  return (
    <div className="no-scrollbar">
      <ScrollIndicator />
      <HomeBanner />
      <Projects />
      <Skills />
      <About />
      <Services />
      <Contact />
    </div>
  );
}