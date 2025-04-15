"use client";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { useState } from "react";
import { MenuItems } from "./mock-data";
import Link from "next/link";

export const MobileMenu = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  const handleMobileMenu = () => {
    setIsMobileMenuOpen(true);
  };

  return (
    <div className="relative z-30">
      <Sheet>
        <SheetTrigger
          className="flex items-center"
          onClick={() => handleMobileMenu()}
        >
          <Menu color="white" />
        </SheetTrigger>

        <SheetContent>
          <SheetHeader>
            <div className="mt-12">
              <SheetTitle className="px-5 text-2xl font-bold text-black">
                Menu
              </SheetTitle>

              <div className="px-5 mt-10">
                <ul className="flex flex-col gap-10">
                  {isMobileMenuOpen &&
                    MenuItems.map((item) => (
                      <li key={item.id}>
                        <Link
                          className="text-xl font-medium text-black"
                          href={item.url}
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                </ul>
              </div>
              </div>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
};
