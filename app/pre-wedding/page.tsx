"use client";
import  HeroPortfolio  from "@/app/portifolio-sections/HeroPortfolio";
import { Galeria } from "@/app/portifolio-sections/Galeria";
import { useEffect, useState } from "react";
import { pegarFotosEnsaio } from "@/app/services/imagens";

const PreWedding = ({ nomeEnsaio }: any) => {
  const [imagens, setImagens] = useState<string[]>([]);
  nomeEnsaio = "fotos-iniciais";

  useEffect(() => {
    const carregarFotos = async () => {
      const urls = await pegarFotosEnsaio(nomeEnsaio);
      setImagens(urls);
    };
    carregarFotos();
  }, [nomeEnsaio]);

  return (
    <div className="flex flex-col bg-(--branco)">
      <HeroPortfolio
        titulo="Ensaio Pré-Wedding"
        texto="Cada casal tem sua história, seus caminhos e suas escolhas. O pre-wedding é sobre registrar esse momento único antes do “sim”, do jeito mais verdadeiro possível."
      />
      <Galeria imagens={imagens} />
    </div>
  );
};

export default PreWedding;
