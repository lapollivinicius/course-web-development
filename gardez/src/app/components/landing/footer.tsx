import Logo from "@/app/components/ui/LogoGardez";
import IconNav from "@/app/components/ui/navigation/IconNav";
import LinkNav from "@/app/components/ui/navigation/LinkNav";
import Newsletter from "@/app/components/ui/Newsletter";
import styles from "@/app/components/styles/Footer.module.css"
import Link from "next/link";

export default function Footer() {
  return (
    <footer className={styles.footer}>
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

      <div className="absolute left-0 bottom-0 text-center bg-gray-300 w-dvw p-1 text-sm text-gray-600">
        created by lapollivinicius | 
        <Link className="font-semibold hover:underline ml-1" href={"https://github.com/lapollivinicius"}>github</Link>
      </div>
    </footer>
  );
}
