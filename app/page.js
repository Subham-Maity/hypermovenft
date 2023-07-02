import Image from "next/image";
import Navbar from "./components/ui/Navbar";
import Section1 from "../app/pages/section/section1";
import btn from "./components/WalletConnect/btn";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Section1 />
      <btn />
    </div>
  );
}
