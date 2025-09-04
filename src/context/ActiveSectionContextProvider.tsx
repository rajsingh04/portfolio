"use client";
import React from "react";
import { links } from "@/lib/data";
type SectionName = (typeof links)[number]["name"];
type ActiveSectionContextProviderProps = {
  children: React.ReactNode;
};
type ActiveSectionContextType = {
  activeSection: SectionName;
  setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>;
  timeOfLastClick: number;
  setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>;
};
export const ActiveSectionContext =
  React.createContext<ActiveSectionContextType | null>(null);
export default function ActiveSectionContextProvider({
  children,
}: ActiveSectionContextProviderProps) {
  const [activeSection, setActiveSection] = React.useState<SectionName>("Home");
  const [timeOfLastClick, setTimeOfLastClick] = React.useState(0);

  React.useEffect(() => {
    const handleScroll = () => {
      // Only update active section if enough time has passed since last click
      if (Date.now() - timeOfLastClick < 1000) {
        return;
      }

      // Map of section names to their actual IDs in the DOM
      const sectionMap: Record<SectionName, string> = {
        Home: "home",
        About: "about",
        Projects: "projects",
        Skills: "skills",
        Experience: "experience",
        Contact: "contact",
      };

      const scrollY = window.scrollY;

      // Check sections in reverse order (bottom to top)
      for (const [sectionName, sectionId] of Object.entries(
        sectionMap
      ).reverse()) {
        const sectionElement = document.querySelector(
          `#${sectionId}`
        ) as HTMLElement;
        if (sectionElement) {
          const sectionTop = sectionElement.offsetTop - 150; // Offset for header
          if (scrollY >= sectionTop) {
            setActiveSection(sectionName as SectionName);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [timeOfLastClick]);

  return (
    <ActiveSectionContext.Provider
      value={{
        activeSection,
        setActiveSection,
        timeOfLastClick,
        setTimeOfLastClick,
      }}
    >
      {children}
    </ActiveSectionContext.Provider>
  );
}

export function useActiveSection() {
  const context = React.useContext(ActiveSectionContext);
  if (!context) {
    throw new Error(
      "useActiveSection must be used within an ActiveSectionContextProvider"
    );
  }
  return context;
}
