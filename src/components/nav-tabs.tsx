"use client";

import { Section } from "@/data/section-order";
import { useEffect, useState } from "react";

export function NavTabs() {
  const [activeSection, setActiveSection] = useState<Section>(Section.AboutMe);

  // Function to scroll to section
  const scrollToSection = (sectionId: string) => {
    // Handle education section separately since it's not in the Section enum
    const elementId = sectionId === "Education" ? "education" : sectionId;
    const element = document.getElementById(elementId);
    if (element) {
      const offset = 32; // Reduced from 96 to 32 pixels
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  // Update active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = Object.values(Section);
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100) {
            setActiveSection(section as Section);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="border-b border-zinc-200 pb-4">
      <div className="flex flex-wrap gap-x-6 gap-y-2">
        {Object.values(Section).map((section) => (
          <button
            key={section}
            onClick={() => scrollToSection(section)}
            className={`text-sm whitespace-nowrap ${
              activeSection === section
                ? "text-zinc-900 font-medium"
                : "text-zinc-500 hover:text-zinc-900"
            } transition-colors`}
          >
            {section.replace(/([A-Z])/g, " $1").trim()}
          </button>
        ))}
      </div>
    </nav>
  );
} 