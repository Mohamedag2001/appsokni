import Image from "next/image";
import Header from '../components/Header/Header';
import Accueil from "@/components/Accueil/Accueil";
import Apropos from "@/components/Apropos/Apropos"

export default function Home() {
  return (
    <>
     <Header/>
     <Accueil/>
     <Apropos/>
    </>
  );
}
