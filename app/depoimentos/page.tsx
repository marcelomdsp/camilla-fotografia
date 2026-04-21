'use client'
import { Section } from "@/app/components/SectionBase";
import img from "@/public/img/img-depoimentos.jpg";
import { useState } from "react";
import Image from "next/image";
import { useRevelar, revelarStyle } from "../utils/useRevelar";

const PaginaDepoimentos = () => {
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);
  

  const Depoimentos = [
    {
      id: 1,
      name: "Ana Carolina Silva",
      role: "Noiva",
      text: "Foi uma experiência incrível! As fotos capturaram cada emoção do nosso grande dia de forma tão natural e autêntica. Revivemos cada momento através das lentes.",
      image: img,
    },
    {
      id: 2,
      name: "Roberto Mendes",
      role: "Empresário",
      text: "Profissionalismo excepcional. As fotos corporativas ficaram impecáveis, transmitindo exatamente a imagem que queríamos para nossa marca.",
      image: img,
    },
    {
      id: 3,
      name: "Juliana Costa",
      role: "Influenciadora",
      text: "Trabalho incrível! A atenção aos detalhes e a capacidade de capturar minha essência em cada foto foi simplesmente perfeita. Super recomendo!",
      image: img,
    },
    {
      id: 4,
      name: "Pedro Almeida",
      role: "Músico",
      text: "As fotos do ensaio artístico superaram todas as expectativas. Conseguiu traduzir visualmente a energia da música de forma única.",
      image: img,
    },
    {
      id: 5,
      name: "Mariana Santos",
      role: "Gestante",
      text: "Um momento tão especial registrado com tanto carinho e delicadeza. As fotos ficaram lindas e vou guardar para sempre.",
      image: img,
    },
  ];

 
 

  return (
    <>
      <Section id="hero" mt="nao" bgColor="bege">
        <div className="container border-b-2 border-[#ede5dc] h-70">
          <div className="flex flex-col items-center gap-10 max-w-[80%] text-(--chumbo)">
            <h2 className="text-3xl">Depoimentos</h2>
            <p>
              Como cada história foi enxergada por quem esteve do outro lado da
              lente.
            </p>
          </div>
        </div>
      </Section>

      <Section mt="nao" bgColor="bege">
        <div className="container space-y-20 py-20">
          {Depoimentos.map((depoimento, index) => (
            <article
              className={`
                flex flex-col items-center gap-2 md:flex-row md:justify-around md:gap-10
                  `}
              onMouseEnter={() => setHoveredItem(depoimento.id)}
              onMouseLeave={() => setHoveredItem(null)}
              key={index}
            >
              <div
                className={`
                  overflow-hidden w-full md:w-[80%] lg:w-[50%]
                     ${index % 2 === 0 ? "md:order-1" : "md:order-2"}
                    `}
              >
                <Image
                  src={depoimento.image}
                  alt={depoimento.name}
                  className={`
                        w-full h-full object-cover
                        transition-transform duration-800 ease-out
                        ${hoveredItem === depoimento.id ? "scale-105" : "scale-100"}
                      `}
                />
              </div>
              <div
                className={` 
                     md:w-[80%] md:py-10 lg:px-10
                     ${index % 2 === 0 ? "md:order-2" : "md:order-1"}
                    `}
              >
                <div className="space-y-5">
                  <p className="font-light leading-relaxed tracking-wide text-(--chumbo) text-sm w-full italic">
                    "{depoimento.text}"
                  </p>

                  <div className="w-[50%] pt-5 border-t border-(--bege)">
                    <h3 className="text-xl font-light mb-2 text-(--chumbo)">
                      {depoimento.name}
                    </h3>
                    <p className="text-(--chumbo) opacity-60 uppercase text-xs">
                      {depoimento.role}
                    </p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Section>
    </>
  );
};

export default PaginaDepoimentos;