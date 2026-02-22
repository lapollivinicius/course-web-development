import Link from "next/link";

type linkProps = {
  conteinerLink?: string;
  contentLink?: string;
};

// list items menu
type menuItems = { page: string; link: string };
export const menu: menuItems[] = [
  { page: "about us", link: "/about" },
  { page: "services", link: "/services" },
  { page: "consulting", link: "/consulting" },
  { page: "contact", link: "/contact" },
  { page: "remote", link: "/remote" },
];

// Menu Text Bar
export default function LinkNav({ conteinerLink, contentLink }: linkProps) {
  return (
    <div className={conteinerLink}>
      {menu.map((e) => {
        return (
          <Link className={contentLink} key={e.page} href={e.link}>
            {e.page}
          </Link>
        );
      })}
    </div>
  );
}