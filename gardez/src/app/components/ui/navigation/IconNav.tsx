import Image from "next/image";
import Link from "next/link";

// Menu Icons Bar
export default function Iconbar() {
  return (
    <div className={"flex "}>
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
    </div>
  );
}