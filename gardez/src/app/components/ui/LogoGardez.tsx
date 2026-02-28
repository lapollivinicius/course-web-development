import Link from "next/dist/client/link";
import Image from "next/image";

type logoProps = {
  widthLogo: number,
  heightLogo: number
}

export default function Logo({widthLogo = 100, heightLogo = 50}: logoProps) {
  return (
    <Link href="/">
      <Image src="/svg/logo.svg" alt="Logo" width={widthLogo} height={heightLogo} />
    </Link>
  );
};