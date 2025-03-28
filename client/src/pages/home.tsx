import { useEffect, useRef } from "react";
import Navbar from "@/components/layout/navbar";
import MobileMenu from "@/components/layout/mobile-menu";
import Footer from "@/components/layout/footer";
import HeroSection from "@/components/sections/hero-section";
import AboutSection from "@/components/sections/about-section";
import ExperienceSection from "@/components/sections/experience-section";
import PortfolioSection from "@/components/sections/portfolio-section";
import AchievementsSection from "@/components/sections/achievements-section";
import SkillsSection from "@/components/sections/skills-section";
import ContactSection from "@/components/sections/contact-section";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [navbarScrolled, setNavbarScrolled] = useState(false);
  const sectionsRef = useRef<HTMLDivElement[]>([]);

  // Handle scroll effects
  useEffect(() => {
    const handleScroll = () => {
      // Check if navbar should change its style
      if (window.scrollY > 50) {
        setNavbarScrolled(true);
      } else {
        setNavbarScrolled(false);
      }

      // Check which sections are visible
      sectionsRef.current.forEach(section => {
        if (section) {
          const sectionTop = section.getBoundingClientRect().top;
          const windowHeight = window.innerHeight;
          if (sectionTop < windowHeight * 0.75) {
            section.classList.add('visible');
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    // Initial check
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const addToSectionsRef = (el: HTMLDivElement) => {
    if (el && !sectionsRef.current.includes(el)) {
      sectionsRef.current.push(el);
    }
  };

  return (
    <div className="min-h-screen font-sans">
      <Navbar 
        scrolled={navbarScrolled} 
        onMenuToggle={() => setMobileMenuOpen(true)} 
      />
      <MobileMenu 
        isOpen={mobileMenuOpen} 
        onClose={() => setMobileMenuOpen(false)} 
      />
      
      <main>
        <HeroSection />
        <AboutSection ref={addToSectionsRef} />
        <ExperienceSection ref={addToSectionsRef} />
        <PortfolioSection ref={addToSectionsRef} />
        <AchievementsSection ref={addToSectionsRef} />
        <SkillsSection ref={addToSectionsRef} />
        <ContactSection ref={addToSectionsRef} />
      </main>
      
      <Footer />
    </div>
  );
}

import { useState } from "react";
