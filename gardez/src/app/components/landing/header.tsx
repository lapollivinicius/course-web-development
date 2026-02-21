"use client";

import { useRef, useEffect } from "react";
import Logo from "../ui/logo-gardez";
import { Navbar, MenuIcon } from "../ui/navigation";

export default function Header() {
  const headerElement = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function onScroll() {
      if (window.scrollY > 100) {
        headerElement.current?.classList.remove("header-active");
        headerElement.current?.classList.add("header-scroll");
      } else {
        headerElement.current?.classList.remove("header-scroll");
        headerElement.current?.classList.add("header-active");
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header ref={headerElement} className="header-active">
      <Logo />
      <Navbar
        navClass="flex items-center max-md:hidden"
        textClass="p-2 m-1 text-lx hover:pointer hover:text-mauve-500"
      />
      <MenuIcon auxClass="md:hidden" />
    </header>
  );
}
