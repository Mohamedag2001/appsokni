import Image from "next/image";
import Header from '../components/Header/Header';
import Accueil from "@/components/Accueil/Accueil";
import Apropos from "@/components/Apropos/Apropos";
import NosService from "../components/NosService/NosService";
import Statistique from "../components/Statistique/Statistique";
import Galerie from "../components/Galerie/Galerie";
import Temoignage from "../components/Temoignage/Temoignage";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <>
     <Header/>
      <Accueil/>
     <Apropos/>
     <NosService/>
     <Statistique/>
      <Galerie/>
      <Temoignage/>
     <Footer/> 
    </>
  );
}
