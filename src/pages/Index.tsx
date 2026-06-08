import useScrollReveal from "@/hooks/useScrollReveal";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import DevlogSection from "@/components/DevlogSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  const containerRef = useScrollReveal();

  return (
    <div className="scanlines pixel-grid min-h-screen" ref={containerRef}>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <DevlogSection />
      <ContactSection />
    </div>
  );
};

export default Index;
