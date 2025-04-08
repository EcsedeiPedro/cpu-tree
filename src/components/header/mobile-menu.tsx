"use client";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { DialogTitle } from "@radix-ui/react-dialog";
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
        <SheetTrigger className="flex items-center" onClick={() => handleMobileMenu()}>
          <Menu color="white" />
        </SheetTrigger>

        <SheetContent>
          <SheetHeader>
            <DialogTitle />
            <SheetDescription className="px-5 mt-10">
              <ul className="flex flex-col gap-10">
                {MenuItems.map((item) => (
                  <li key={item.id}>
                    <Link className="text-xl font-medium text-black" href={item.url}>
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
};
