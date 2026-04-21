'use client'
import HeroPortfolio from "@/app/portifolio-sections/HeroPortfolio";
import { Galeria } from "@/app/portifolio-sections/Galeria";
import { useEffect, useState } from "react";
import { pegarFotosEnsaio } from "../services/imagens";
import { Depoimentos } from "@/app/sections/Depoimentos";



const Familia = ({ nomeEnsaio }: any) => {
  const [imagens, setImagens] = useState<string[]>([]);
  nomeEnsaio = "familia";
  
  useEffect(() => {
    const carregarFotos = async () => {
      const urls = await pegarFotosEnsaio(nomeEnsaio);
      setImagens(urls);
    };
    carregarFotos();
  }, [nomeEnsaio]);
  

  return (
    <div className="flex flex-col bg-(--branco) font-sans">
      <HeroPortfolio
        titulo="Família"
        texto="Cada família é única, com sua própria história, seus jeitos e laços. E é justamente isso que define o que é ser família: estar junto, cuidar e compartilhar a vida, do seu próprio jeito."
      />
      <Galeria imagens={imagens} />
      <Depoimentos />
    </div>
  );
};

export default Familia;