"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { Navbar } from "./Navbar";
import styles from "@/app/components/styles/Header.module.css";

type menuProps = {
  conteinerNav?: string;
  conteinerLink?: string;
  contentLink?: string;
  menuDisplay?: string;
};

// Menu Button
export function MenuIcon({
  conteinerNav,
  conteinerLink,
  contentLink,
  menuDisplay,
}: menuProps) {

  const [open, setOpen] = useState<boolean>(false);
  const prevOverflow = useRef<string>("");

  useEffect(() => {

    if (typeof document === "undefined") return;

    if (open) {
      prevOverflow.current = document.body.style.overflow;
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = prevOverflow.current || "";
    }
    return () => {
      document.body.style.overflow = prevOverflow.current || "";
    };
    
  }, [open]);

  return (
    <div className={"flex " + menuDisplay}>
      <button onClick={() => setOpen(!open)}>
        <Image
          src="/svg/menu.svg"
          width={35}
          height={35}
          alt="instagram"
          className={"btn-icon " + (open ? "hidden" : "")}
        />
        <Image
          src="/svg/close.svg"
          width={35}
          height={35}
          alt="instagram"
          className={"btn-icon " + (open ? "" : "hidden")}
        />
      </button>
      <div
        className={styles.menuClosed + (open ? " " + styles.menuOpened : "")}
      >
        <Navbar
          conteinerNav="h-dvh"
          contentLink="p-1 text-2xl flex w-dvh font-bold hover:pointer hover:text-gray-400"
          conteinerLink="flex flex-col mb-5"
        />
      </div>
    </div>
  );
}
