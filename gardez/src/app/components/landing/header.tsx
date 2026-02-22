"use client";

import { useRef, useEffect } from "react";
import { MenuIcon } from "../ui/navigation/MenuMobile";
import Logo from "../ui/LogoGardez";
import { Navbar } from "../ui/navigation/Navbar";

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
      <Logo widthLogo={100} heightLogo={50} />
      <Navbar
        conteinerNav="flex items-center max-md:hidden"
        contentLink="p-2 m-1 text-lx hover:pointer hover:text-mauve-500"
      />
      <MenuIcon menuDisplay="md:hidden" />
    </header>
  );
}
