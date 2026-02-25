"use client";

import { useEffect, useState } from "react";
import { Navbar } from "@/app/components/ui/navigation/Navbar";
import { MenuIcon } from "@/app/components/ui/navigation/MenuMobile";
import styles from "@/app/components/styles/Header.module.scss"
import Logo from "@/app/components/ui/LogoGardez";

export default function Header() {
  const [onScroll, setOnScroll] = useState<boolean>(false)

  useEffect(() => {

    function scrolling() {
        setOnScroll(window.scrollY > 100)
    }

    window.addEventListener("scroll", scrolling);
    return () => window.removeEventListener("scroll", scrolling);
  }, []);

  return (
    <header className={styles.headerActive + " " + (onScroll ? styles.headerScroll : "")}>
      <Logo widthLogo={100} heightLogo={50} />
      <Navbar
        conteinerNav="flex items-center max-md:hidden"
        contentLink="p-2 m-1 text-lx hover:pointer hover:text-mauve-500"
      />
      <MenuIcon menuDisplay="md:hidden" />
    </header>
  );
}
