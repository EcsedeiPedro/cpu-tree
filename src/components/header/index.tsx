import Link from "next/link";
import { MenuItems } from "./mock-data";

export const Header = () => {
  return (
    <header className="bg-black">
      <div className="container">
        <nav className="w-full flex justify-center py-10">
          <ul className="flex gap-5">
            {MenuItems.map((item) => (
              <>
                <li className="text-lg text-white font-bold hover:opacity-50" key={item.id}>
                  <Link href={item.url}>{item.name}</Link>
                </li>
              </>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};
