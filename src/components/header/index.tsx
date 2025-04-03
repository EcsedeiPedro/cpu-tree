import Link from "next/link";
import { MenuItems } from "./mock-data";
import { Cpu } from "lucide-react";
import { MobileMenu } from "./mobile-menu";

export const Header = () => {
  return (
    <header className="header-blur shadow-lg">
      <div className="container">
        <nav className="w-full flex items-center justify-between py-5">
          <div className="rounded-full p-5 bg-white">
            <Link href="/">
              <Cpu color="black"/>
            </Link>
          </div>

          <ul className="hidden lg:flex gap-5">
            {MenuItems.map((item) => (
              <li
                className="text-lg text-white font-bold hover:opacity-50"
                key={item.id}
              >
                <Link href={item.url}>{item.name}</Link>
              </li>
            ))}
          </ul>

          <MobileMenu />
        </nav>
      </div>
    </header>
  );
};