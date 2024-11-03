"use client";

import { FC } from "react";
import { NavSection } from "@customTypes/home";
import NavItem from "@components/app/navItem";

interface PropsType {
  sections: NavSection[];
  activeSection: string;
}

const NavDown: FC<PropsType> = ({ sections, activeSection }) => {
  return (
    <nav className="bg-background/95 fixed bottom-0 left-0 w-full cursor-pointer shadow-md shadow-black z-[999] md:hidden">
      <ul className="flex justify-around items-center h-16">
        {sections.map(({ icon, name, linkTo }) => (
          <NavItem
            key={linkTo}
            icon={icon}
            name={name}
            linkTo={linkTo}
            isActive={activeSection === linkTo}
          />
        ))}
      </ul>
    </nav>
  );
};

export default NavDown;
