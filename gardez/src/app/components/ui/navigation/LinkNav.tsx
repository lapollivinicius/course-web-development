"use client";

import { usePathname } from "next/dist/client/components/navigation";
import Link from "next/link";

type linkProps = {
  conteinerLink?: string;
  contentLink?: string;
};

// list items menu
type menuItems = { page: string; link: string; current: boolean };

// Menu Text Bar
export default function LinkNav({ conteinerLink, contentLink }: linkProps) {
  
  const pathName = usePathname()

  const menu: menuItems[] = [
    { page: "about us", link: "/about", current: pathName === "/about" },
    { page: "services", link: "/services", current: pathName === "/services" },
    { page: "contact", link: "/contact", current: pathName === "/contact" },
    { page: "remote", link: "/remote", current: pathName === "/remote" },
  ];

  return (
    <div className={conteinerLink}>
      {menu.map((e) => {
        return (
          <Link
            className={contentLink + (e.current ? " text-gray-500 " : "")}
            key={e.page}
            href={e.link}
          >
            {e.page}
          </Link>
        );
      })}
    </div>
  );
}
