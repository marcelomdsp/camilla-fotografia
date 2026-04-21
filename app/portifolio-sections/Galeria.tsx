"use client";
import { Section } from "@/app/components/SectionBase";
import { useState } from "react";
import { GrPrevious, GrNext } from "react-icons/gr";
import Image from "next/image";
import { StaticImageData } from "next/image";

type GaleriaProps = {
  imagens: string[] | StaticImageData[];
};

export function Galeria({ imagens }: GaleriaProps) {
  const [imagemAtual, setImagemAtual] = useState<number | null>(null);
  const [fade, setFade] = useState(true);

  function abrirModal(index: number) {
    setImagemAtual(index);
  }

  function fecharModal() {
    setImagemAtual(null);
  }

  function trocarImagem(novoIndex: number) {
    setFade(false);
    setTimeout(() => {
      setImagemAtual(novoIndex);
      setFade(true);
    }, 200);
  }

  function imagemAnterior(e: React.MouseEvent) {
    e.stopPropagation();
    if (imagemAtual !== null) {
      trocarImagem(imagemAtual === 0 ? imagens.length - 1 : imagemAtual - 1);
    }
  }

  function proximaImagem(e: React.MouseEvent) {
    e.stopPropagation();
    if (imagemAtual !== null) {
      trocarImagem(imagemAtual === imagens.length - 1 ? 0 : imagemAtual + 1);
    }
  }

  return (
    <Section mt="nao">
      <div className="container">
        {/* Grid */}
        <div className="columns-2 md:columns-3 gap-3 my-3">
          {imagens.length === 0 && (
            <p className="text-[2rem]">Carregando...</p>
          )}
          {imagens.map((src, index) => (
            <div
              key={index}
              className="relative group break-inside-avoid pb-3 overflow-hidden cursor-pointer"
              onClick={() => abrirModal(index)}
            >
              <Image
                src={src}
                alt={`foto ${index + 1}`}
                width={600}
                height={800}
                sizes="(max-width: 768px) 50vw, 33vw"
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                priority={index < 6}
                loading={index < 6 ? "eager" : "lazy"}
              />
              {/* overlay hover */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-all duration-500 flex items-center justify-center">
                <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-2xl">
                  ⊕
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {imagemAtual !== null && (
          <div
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/95"
            onClick={fecharModal}
          >
            {/* Fechar */}
            <button
              className="absolute top-6 right-8 text-white/50 hover:text-white text-2xl transition-colors"
              onClick={fecharModal}
            >
              ✕
            </button>

            {/* Contador */}
            <p className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/30 text-[0.65rem] tracking-[0.4em] uppercase">
              {imagemAtual + 1} / {imagens.length}
            </p>

            {/* Seta esquerda */}
            <button
              className="absolute left-5 text-white/40 hover:text-white text-2xl transition-colors p-2"
              onClick={imagemAnterior}
            >
              <GrPrevious />
            </button>

            {/* Imagem com fade */}
            <div
              className="relative w-full md:w-[75%] max-h-[88vh] aspect-3/4 transition-opacity duration-200"
              style={{ opacity: fade ? 1 : 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={imagens[imagemAtual]}
                alt="Visualização"
                fill
                sizes="90vw"
                className="object-contain"
                priority
              />
            </div>

            {/* Seta direita */}
            <button
              className="absolute right-5 text-white/40 hover:text-white text-2xl transition-colors p-2"
              onClick={proximaImagem}
            >
              <GrNext />
            </button>
          </div>
        )}
      </div>
    </Section>
  );
}