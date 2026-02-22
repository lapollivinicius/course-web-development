import LinkNav from "./LinkNav";
import IconNav from "./IconNav";

type menuProps = {
  conteinerNav?: string;
  conteinerLink?: string;
  contentLink?: string;
};


// Navigation bar (Text + Icons) to header
export function Navbar({
  conteinerNav,
  contentLink,
  conteinerLink,
}: menuProps) {
  return (
    <nav className={conteinerNav}>
      <LinkNav contentLink={contentLink} conteinerLink={conteinerLink} />
      <IconNav />
    </nav>
  );
}