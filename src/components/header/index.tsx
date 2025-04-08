import Link from "next/link";
import { MenuItems } from "./mock-data";
import { Cpu, Github, Linkedin } from "lucide-react";
import { MobileMenu } from "./mobile-menu";

export const Header = () => {
  return (
    <header className="fixed top-0 w-full z-50 shadow-lg">
      <div className="container">
        <nav className="w-full flex items-center justify-between lg:justify-start py-5">
          <Link href="/">
            <Cpu color="white" />
          </Link>

          <ul className="hidden lg:flex gap-5 ml-10">
            {MenuItems.map((item) => (
              <li
                className="text-white font-bold transition-opacity duration-300 hover:opacity-50"
                key={item.id}
              >
                <Link href={item.url}>{item.name}</Link>
              </li>
            ))}
          </ul>

          <div className="hidden lg:flex items-center gap-5 ml-auto">
            <Link href="https://github.com/EcsedeiPedro" target="_blank" rel="noopener noreferrer">
              <Github color="white" />
            </Link>

            <Link href="https://www.linkedin.com/in/ecsedeipedro/" target="_blank" rel="noopener noreferrer">
              <Linkedin color="white" />
            </Link>
          </div>

          <div className="block lg:hidden">
            <MobileMenu />
          </div>  
        </nav>
      </div>
    </header>
  );
};
