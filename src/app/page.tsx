import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TechMarquee from "@/components/TechMarquee";
import ValueProps from "@/components/ValueProps";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import AmbientBackground from "@/components/AmbientBackground";
import ScrollProgress from "@/components/ScrollProgress";
import DevStatusBar from "@/components/DevStatusBar";
import CursorFollower from "@/components/CursorFollower";

export default function Home() {
  return (
    <>
      <CursorFollower />
      <AmbientBackground />
      <ScrollProgress />
      <div className="relative z-10">
        <Navbar />
        <main className="pb-10 md:pb-8">
          <Hero />
          <TechMarquee />
          <ValueProps />
          <About />
          <Experience />
          <Projects />
          <Skills />
          <Education />
          <Contact />
        </main>
        <Footer />
        <FloatingCTA />
      </div>
      <DevStatusBar />
    </>
  );
}
