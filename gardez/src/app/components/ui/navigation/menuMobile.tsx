"use client"

import { useState } from "react";
import Image from "next/image";
import Navbar from "./navbar";

type menuProps = {
  conteinerNav?: string;
  conteinerText?: string;
  contentText?: string;
  menuDisplay?: string
};

// Menu Button
export function MenuIcon({conteinerNav, conteinerText, contentText, menuDisplay }: menuProps) {

  const [open, setOpen] = useState<boolean>(false) 

  return (
    <div className={"flex " + menuDisplay}>
      <button onClick={() => setOpen(!open)} >
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
        className={"fixed top-20 left-500 w-dvh h-dvh bg-white p-10 transition-all duration-500 ease" + (open ? " menu-opened" : "")}
      >
        <Navbar
          conteinerNav="h-dvh"
          contentText="p-1 text-2xl flex w-dvh font-bold hover:pointer hover:text-gray-400"
          conteinerText="flex flex-col mb-5"
        />
      </div>
    </div>
  );
}