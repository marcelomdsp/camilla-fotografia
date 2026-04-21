"use client";
import HeroPortfolio from "@/app/portifolio-sections/HeroPortfolio";
import { Galeria } from "@/app/portifolio-sections/Galeria";
import { useEffect, useState } from "react";
import { pegarFotosEnsaio } from "../services/imagens";
import { Depoimentos } from "@/app/sections/Depoimentos";
import { Preloader } from "../components/Preloader";

const Casamento = ({ nomeEnsaio }: any) => {
  const [imagens, setImagens] = useState<string[]>([]);
  nomeEnsaio = "casamento";

  useEffect(() => {
    const carregarFotos = async () => {
      const urls = await pegarFotosEnsaio(nomeEnsaio);
      setImagens(urls);
    };
    carregarFotos();
  }, [nomeEnsaio]);

  return (
    <>
      {!imagens ? (
        <Preloader />
      ) : (
        <div className="flex flex-col bg-(--branco) font-sans">
          <HeroPortfolio
            titulo="Casamento"
            texto="Cada casamento é único, e acredito que suas memórias merecem ser registradas com atenção, sensibilidade e profissionalismo."
          />
          <Galeria imagens={imagens} />
          <Depoimentos />
        </div>
      )}
    </>
  );
};

export default Casamento;
