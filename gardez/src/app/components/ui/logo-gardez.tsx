import Image from "next/image";

const Logo = () => {
  return (
    <div id="main-logo">
      <Image src="/svg/logo.svg" alt="Logo" width={100} height={50} />
    </div>
  );
};

export default Logo;
