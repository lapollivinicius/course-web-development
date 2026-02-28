"use client";

import { useEffect, useState } from "react";
import { Navbar } from "@/app/components/ui/navigation/Navbar";
import { MenuIcon } from "@/app/components/ui/navigation/MenuMobile";
import styles from "@/app/components/styles/Header.module.css";
import Logo from "@/app/components/ui/LogoGardez";

export default function Header() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    let lastScroll = window.scrollY;

    const onScroll = () => {
      const current = window.scrollY;

      if (current > lastScroll && current > 50) {
        setHidden(true);
      } else {
        setHidden(false);
      }

      lastScroll = current;
    };

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={styles.headerActive + " " + (hidden ? "-translate-y-full" : "translate-y-0")}
    >
      <Logo widthLogo={100} heightLogo={50} />
      <Navbar
        conteinerNav="flex items-center max-md:hidden"
        contentLink="p-2 m-1 text-lx hover:pointer text-gray-500 hover:text-mauve-500"
      />
      <MenuIcon menuDisplay="md:hidden" />
    </header>
  );
}
