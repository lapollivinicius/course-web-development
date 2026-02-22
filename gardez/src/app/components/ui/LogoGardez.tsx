import Image from "next/image";

type logoProps = {
  widthLogo: number,
  heightLogo: number
}

export default function Logo({widthLogo = 100, heightLogo = 50}: logoProps) {
  return (
    <div id="main-logo">
      <Image src="/svg/logo.svg" alt="Logo" width={widthLogo} height={heightLogo} />
    </div>
  );
};