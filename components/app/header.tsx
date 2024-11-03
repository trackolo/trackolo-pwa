"use client";

import { FC, useState, useEffect } from "react";
import NavTop from "@components/app/navTop";
import NavDown from "@components/app/navDown";
import { NavSection } from "@customTypes/home";

interface PropsType {
  sections: NavSection[];
}

const Header: FC<PropsType> = ({ sections }) => {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    console.log("useeffect from header[homepage]");

    const observerOptions = {
      root: null,
      threshold: 1.0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          console.log(entry.target.id);
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    // Observe each section
    sections.forEach(({ linkTo }) => {
      const section = document.getElementById(linkTo);
      if (section) {
        observer.observe(section);
      }
    });

    // Cleanup observer on unmount
    return () => {
      observer.disconnect();
    };
  }, [sections]);

  return (
    <header>
      <NavTop sections={sections} activeSection={activeSection} />
      <NavDown sections={sections} activeSection={activeSection} />
    </header>
  );
};

export default Header;
