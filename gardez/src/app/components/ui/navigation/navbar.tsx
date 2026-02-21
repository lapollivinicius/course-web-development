import TextBar from "./LinkNav";
import Iconbar from "./IconNav";

type menuProps = {
  conteinerNav?: string;
  conteinerText?: string;
  contentText?: string;
};


// Navigation bar (Text + Icons) to header
export default function Navbar({
  conteinerNav,
  contentText,
  conteinerText,
}: menuProps) {
  return (
    <nav className={conteinerNav}>
      <TextBar contentText={contentText} conteinerText={conteinerText} />
      <Iconbar />
    </nav>
  );
}