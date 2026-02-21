import Link from "next/link";

type menuProps = {
  conteinerNav?: string;
  conteinerText?: string;
  contentText?: string;
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
export default function TextBar({ conteinerText, contentText }: menuProps) {
  return (
    <div className={conteinerText}>
      {menu.map((e) => {
        return (
          <Link className={contentText} key={e.page} href={e.link}>
            {e.page}
          </Link>
        );
      })}
    </div>
  );
}