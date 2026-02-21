"use client";

import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";

// list items menu
type menuItems = { page: string; link: string };
export const menu: menuItems[] = [
  { page: "about us", link: "/about" },
  { page: "services", link: "/services" },
  { page: "consulting", link: "/consulting" },
  { page: "contact", link: "/contact" },
];

// Menu Text Bar
export function TextBar({...props}) {

  return (
    <nav className={props.navTextClass}>
      {menu.map((e, i) => {
        return (
          <Link className={props.auxClass} key={i} href={e.link}>
            {e.page}
          </Link>
        );
      })}
    </nav>
  );
}

// Menu Icons Bar
export function Iconbar({...props}) {
  return (
    <nav className={"flex " + props.auxClass}>
      <Link href={"https://www.instagram.com"}>
        <Image
          src="/svg/instagram.svg"
          width={35}
          height={35}
          alt="instagram"
          className="btn-icon"
        />
      </Link>
      <Link href={"https://www.whatsapp.com"}>
        <Image
          src="/svg/phone.svg"
          width={35}
          height={35}
          alt="phone"
          className="btn-icon"
        />
      </Link>
    </nav>
  );
}

// Navigation bar (Text + Icons) to header
export function Navbar({...props}) {
  return (
    <nav className={props.navClass}>
      <TextBar auxClass={props.textClass} navTextClass={props.navTextClass} />
      <Iconbar auxClass={props.iconClass} />
    </nav>
  );
}



// Menu Button
export function MenuIcon({...props}) {

  const openMenu = useRef<HTMLButtonElement | null>(null)
  const closeMenu = useRef<HTMLButtonElement | null>(null)
  const menuMobile = useRef<HTMLElement | null>(null)

  function handleMenu() {
    openMenu.current?.classList.toggle("hidden")
    closeMenu.current?.classList.toggle("hidden")
    menuMobile.current?.classList.toggle("menu-mobile-activate")
  }

  return (
    <nav className={"flex " + props.auxClass}>
      <button  ref={openMenu} onClick={handleMenu} >
        <Image
          src="/svg/menu.svg"
          width={35}
          height={35}
          alt="instagram"
          className="btn-icon"
        />
      </button>
      <button className="hidden" ref={closeMenu} onClick={handleMenu}>
        <Image
          src="/svg/close.svg"
          width={35}
          height={35}
          alt="phone"
          className="btn-icon"
        />
      </button>

      <nav className="menu-mobile" ref={menuMobile}>
        <Navbar navClass="h-dvh" textClass="p-1 px-14 ml-[-50] text-2xl flex w-dvh font-bold hover:pointer hover:bg-gray-100" navTextClass="flex flex-col mb-5" />
      </nav>

    </nav>
  );
}
