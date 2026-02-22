import Logo from "../ui/LogoGardez";
import IconNav from "../ui/navigation/IconNav";
import LinkNav from "../ui/navigation/LinkNav";
import Newsletter from "../ui/Newsletter";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="flex flex-col">
        <Logo widthLogo={200} heightLogo={100} />
        <p className="font-bold text-xl mt-8 mb-[-5]">MAP SITE</p>
        <LinkNav
          conteinerLink="flex flex-row ml-[-4]"
          contentLink="p-1 hover:text-gray-400"
        />
        <IconNav containerIcon="ml-[-10] mt-3"/>
      </div>

      <Newsletter />

      <div className="absolute bottom-0 text-center bg-gray-300 w-dvw p-1 text-sm text-gray-600">
        created by lapollivinicius | 
        <Link className="font-semibold hover:underline ml-1" href={"https://github.com/lapollivinicius"}>github</Link>
      </div>
    </footer>
  );
}
