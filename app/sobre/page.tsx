"use client";

import { useRevelar, revelarStyle } from "../utils/useRevelar";
import { Section } from "../components/SectionBase";
import FOTO_CAMILLA from "../../public/Camilla.jpg";
import Cta from "../components/Cta";

const coisas = [
  { label: "Estilo", value: "Luminoso & atemporal" },
  { label: "Localização", value: "Rio de Janeiro" },
  { label: "Bônus", value: "Previa da sessão" },
  { label: "Resposta", value: "Em até 24 horas" },
];

const filosofia = [
  {
    num: "01",
    title: "Presença",
    text: "Apareço antes para que você se esqueça da câmera e lembre só do momento.",
  },
  {
    num: "02",
    title: "Delicadeza",
    text: "Cada fase — barriga, aliança ou primeiro abraço — merece um olhar gentil.",
  },
  {
    num: "03",
    title: "Memória",
    text: "Entrego imagens que serão mostradas para netos, com orgulho e lágrimas.",
  },
];

const FOTO_CITACAO=
  "https://images.unsplash.com/photo-1554048612-b6a482bc67e5?w=900&q=85";



export const Sobre = () => {

  const bio = useRevelar();
  const valores = useRevelar();
  const imagem = useRevelar();
  const cta = useRevelar();

  return (
    <>
      <Section id="sobre" mt="nao">
        <div ref={bio.ref} style={{ ...revelarStyle(bio.visible) }} className="grid grid-cols-1 mt-10 md:grid-cols-2 max-w-[1400px]"  
        >
          <div>
            <div className="px-10 overflow-hidden">
              <img
                src={FOTO_CAMILLA.src}
                alt="Camilla"
                className="w-full max-h-160 object-cover"
              />
            </div>
            <div className="flex flex-col w-full gap-2 px-10 mt-5">
              <p className="text-sm tracking-[0.30em] font-serif uppercase">
                Fotógrafa
              </p>
              <h2 className="text-4xl font-serif text-[var(--chumbo)]">
                Camilla
              </h2>
              <div />
            </div>
          </div>

          <div className="w-full mt-8">
            <p className="px-10 text-sm tracking-[0.30em] font-serif uppercase">
              Sobre mim
            </p>
            <h1 className="px-10 mt-5 text-[var(--chumbo)] leading-tight text-4xl  lg:text-5xl font-serif">
              Fotografia que <br /> guarda o amor <br /> pra sempre.
            </h1>
            <div className="flex flex-col gap-5 px-10 mt-10 max-w-xl">
              <p>
                Sou fotógrafa especializada nos momentos que importam de verdade
                — aqueles que seu coração vai querer revisitar por décadas.
                Casamentos, pré-weddings, ensaios de família e gestantes são o
                meu território.
              </p>
              <p>
                Acredito que a melhor fotografia acontece quando as pessoas se
                sentem à vontade. O meu jeito de trabalhar é calmo, próximo e
                cheio de escuta — porque cada família tem sua própria forma de
                amar, e cada noiva carrega uma história que merece ser contada
                com cuidado.
              </p>
              <p>
                Sou do Rio de Janeiro, mas viajo para onde o amor me levar. Luz
                natural, emoções genuínas e muita leveza — é assim que gosto de
                trabalhar.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-x-20  gap-y-8 mt-10 border-t border-[var(--chumbo)] mx-8 pt-10 ">
              {coisas.map((item, index) => (
                <div key={index} className="flex flex-col gap-1">
                  <p className="text-[0.6rem] tracking-[0.30em] font-serif uppercase">
                    {item.label}
                  </p>
                  <p className="text-sm font-serif">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* filosofia */}
      <Section id="filosofia" mt="sim" bgColor="bege">
        <div ref={valores.ref} style={{ ...revelarStyle(valores.visible) }} className="container mt-8 px-8 py-20">
          <p className="w-full text-[0.6em] uppercase tracking-[0.30em] font-serif">
            O que me move
          </p>
          <h2 className="w-full font-serif text-[var(--chumbo)] text-4xl mt-5">
            Minha filosofia
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10">
            {filosofia.map((item, index) => (
              <div key={index} className="flex flex-col gap-3">
                <p className="text-5xl text-[var(--chumbo)] font-serif m">{item.num}</p>
                <div className="w-10  border border-[var(--chumbo)]"></div>
                <h3 className="text-xl font-serif">{item.title}</h3>
                <p className="text-sm font-serif">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section>
        <div ref={imagem.ref} style={{ ...revelarStyle(imagem.visible) }} className="relative w-[calc(100%-16px)] md:max-w-300">
          <div className=" w-full overflow-hidden">
            <img
              src={FOTO_CITACAO}
              alt="Camilla"
              className="w-full max-h-140 object-cover"
            />
          </div>
          <blockquote className="absolute -bottom-10 right-0 flex flex-col w-70 gap-2 p-5 bg-[var(--bege)] text-[var(--chumbo)]">
            <p className="italic">
              "A melhor fotografia é aquela que captura a essência de um momento, com emoção e autenticidade."
            </p>
          </blockquote>
        </div>
      </Section>

     <Cta />
    </>
  );
};

export default Sobre;
