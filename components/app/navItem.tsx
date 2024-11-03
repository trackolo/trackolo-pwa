import { FC, cloneElement } from "react";
import { NavSection } from "@customTypes/home";
import Link from "next/link";

interface PropType extends NavSection {
  isActive?: boolean;
}

const NavItem: FC<PropType> = ({ icon, name, linkTo, isActive }) => {
  return (
    <li>
      <Link
        href={`#${linkTo}`}
        className={`flex flex-col items-center ${
          isActive ? "text-primary" : ""
        }`}
      >
        {cloneElement(icon as React.ReactElement, { className: "h-6 w-6" })}
        <span className="text-sm">{name}</span>
      </Link>
    </li>
  );
};

export default NavItem;
