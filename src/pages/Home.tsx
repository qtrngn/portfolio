import NavBar from "@/components/NavBar";
import HeroSection from '@/components/Hero';
import Skills from '@/components/Skills'; 
import Experiences from "@/components/Experiences";
import Projects from "@/components/Project";
import Contact from "@/components/Contact";

export default function Home() {
    return(
      <>
      <NavBar />
      <main>
        <HeroSection />
        <Skills />
        <Experiences />
        <Projects />
        <Contact />
      </main>
      </> 
    )
}