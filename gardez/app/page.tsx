import Image from "next/image";
import Header from "./components/ui/header";
import { Children } from "react";

export default function Home() {
  return (
    <div className="flex-col">
      <Header/>
      <button className="btn m-1">Vender</button>
      <button className="btn m-1">Alugar</button>
    </div>
  );
}
