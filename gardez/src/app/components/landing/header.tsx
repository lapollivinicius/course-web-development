"use client";

import { useRef, useEffect } from "react";
import Logo from "@/app/components/ui/LogoGardez";
import { Navbar } from "@/app/components/ui/navigation/Navbar";
import { MenuIcon } from "@/app/components/ui/navigation/MenuMobile";
import styles from "@/app/components/styles/Header.module.scss"

export default function Header() {
  const headerElement = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function onScroll() {
      if (window.scrollY > 100) {
        headerElement.current?.classList.remove(styles.headerActive);
        headerElement.current?.classList.add(styles.headerScroll);
      } else {
        headerElement.current?.classList.remove(styles.headerScroll);
        headerElement.current?.classList.add(styles.headerActive);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header ref={headerElement} className={"z-10 " + styles.headerActive}>
      <Logo widthLogo={100} heightLogo={50} />
      <Navbar
        conteinerNav="flex items-center max-md:hidden"
        contentLink="p-2 m-1 text-lx hover:pointer hover:text-mauve-500"
      />
      <MenuIcon menuDisplay="md:hidden" />
    </header>
  );
}
