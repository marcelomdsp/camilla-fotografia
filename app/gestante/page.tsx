'use client'
import HeroPortfolio from "@/app/portifolio-sections/HeroPortfolio";
import { Galeria } from "@/app/portifolio-sections/Galeria";
import { useEffect, useState } from "react";
import { pegarFotosEnsaio } from "../services/imagens";
import { Depoimentos } from "@/app/sections/Depoimentos";



const Gestantes = ({ nomeEnsaio }: any) => {
  const [imagens, setImagens] = useState<string[]>([]);
  nomeEnsaio = "gestantes";
  
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
        titulo="Gestante"
        texto="Cada gestação é única, cheia de sentimentos, expectativas e transformações. É o começo de uma nova história, onde o amor já cresce antes mesmo do primeiro encontro."
      />
      <Galeria imagens={imagens} />
      <Depoimentos />
    </div>
  );
};

export default Gestantes;