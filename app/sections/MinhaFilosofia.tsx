'use client';
import { Section } from "@/app/components/SectionBase";
import foto from "@/public/img/pag-home/foto2.jpg";
import Image from "next/image";
export const MinhaFilosofiaSection = () => {

  return (
    <Section mt="sim">
      <div className="flex flex-col font-sans md:hidden gap-5 px-2">
        <div className="w-fit">
          <span className="tracking-[0.2em] text-(--chumbo) font-light">
            Histórias que falam por si mesmas
          </span>
        </div>

        <h2 className="text-3xl font-sans text-(--chumbo) mb-6">
          A parte mais gratificante de ser fotógrafa não é apenas tirar fotos,
          mas sim conectar-se com as pessoas e suas histórias.
        </h2>

        <div className="flex items-center justify-center gap-5 mb-6">
          <div className="w-[35%]">
            <Image src={foto} alt="Noiva" className=" object-contain w-full h-full" />
          </div>
          <div className="w-[60%]">
            <Image src={foto} alt="Casal" className="object-cover w-full h-full" />
          </div>
        </div>

        <p className="text-sm text-(--chumbo) leading-relaxed">
          Cada casal e família traz algo único, e sou profundamente grata por
          ser convidada a registrar esses momentos. De casamentos intimistas a
          grandes celebrações, essas experiências compartilhadas refletem o
          riso, a alegria e o amor que não podem ser expressos apenas em
          palavras.
        </p>

        <a href="/sobre" className="bg-(--vinho) text-(--branco) text-xs tracking-[0.2em] py-4 text-center w-full max-w-200">
          ME CONHEÇA MELHOR
        </a>
      </div>

      {/* Versão para desktop */}

      <div className="hidden relative h-130 lg:h-180 w-full max-w-325 font-sans items-start md:flex columns-2 lg:items-center justify-around">
        <div className="flex absolute right-1/2 left-0 items-center justify-center gap-4 lg:gap-10 xl:gap-15 ml-5">
          <div className="md:w-1/2 md:h-60 lg:w-[70%] lg:h-95">
            <Image
              src={foto}
              alt="Noiva"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="md:w-2/2 md:h-110 lg:w-full lg:h-145">
            <Image
              src={foto}
              alt="Casal"
              className=" w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="flex absolute left-[58%] flex-col w-[40%] gap-5 p-2">
          <div className="w-fit">
            <span className="tracking-[0.2em] text-(--chumbo)">
              Histórias que falam por si mesmas
            </span>
          </div>

          <h2 className="text-4xl text-(--chumbo)">
            A parte mais gratificante de ser fotógrafa não é apenas tirar fotos,
            mas sim conectar-se com as pessoas e suas histórias.
          </h2>

          <p className=" text-(--chumbo) leading-relaxed">
            Cada casal e família traz algo único, e sou profundamente grata por
            ser convidada a registrar esses momentos. De casamentos intimistas a
            grandes celebrações, essas experiências compartilhadas refletem o
            riso, a alegria e o amor que não podem ser expressos apenas em
            palavras.
          </p>

          <a href="/sobre" className=" text-(--vinho) text-xs tracking-[0.2em] border px-10 py-4 w-fit hover:bg-[var(--vinho)] hover:text-[var(--branco)] transition-opacity">
            ME CONHEÇA MELHOR
          </a>
        </div>
      </div>
    </Section>
  );
};
