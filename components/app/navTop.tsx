import { FC } from "react";
import { NavSection } from "@customTypes/home";
import Link from "next/link";
import { MapPin } from "lucide-react";

interface PropsType {
  sections: NavSection[];
  activeSection: string;
}

const NavTop: FC<PropsType> = ({ sections, activeSection }) => {
  return (
    <section className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center px-5">
        <Link href="/land" className="flex items-center space-x-2">
          <MapPin className="h-6 w-6 text-primary" />
          <span className="font-bold text-xl">Trackolo</span>
        </Link>
        <nav className="ml-auto gap-6 hidden md:flex">
          {sections.map(({ name }) => (
            <Link
              key={name}
              href={`#${name.toLowerCase()}`}
              className={`text-md font-medium transition-colors hover:text-primary ${
                activeSection === name.toLowerCase() ? "text-primary" : ""
              }`}
            >
              {name}
            </Link>
          ))}
        </nav>
      </div>
    </section>
  );
};

export default NavTop;
