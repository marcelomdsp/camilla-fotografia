import { Section } from "@/app/components/SectionBase";

type HeroServiceProps = {
  titulo: string;
  texto: string;
};

const HeroPortfolio = ({ titulo, texto }: HeroServiceProps) => {
  return (
    <Section id="hero" mt="nao">
      <div className="flex flex-col items-center justify-center w-full bg-(--bege) py-20 px-6">
        <p className="text-[0.65rem] tracking-[0.45em] uppercase text-(--chumbo) opacity-50 mb-5">
          Camilla Fotografia
        </p>
        <h1
          className="text-[clamp(2.8rem,7vw,5.5rem)] font-light text-(--chumbo) text-center leading-[1.05]"
          style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
        >
          {titulo}
        </h1>
        <div className="w-10 h-px bg-(--chumbo) opacity-30 my-7" />
        <p
          className="text-sm text-(--chumbo) opacity-60 text-center max-w-md leading-relaxed font-light"
        >
          {texto}
        </p>
      </div>
    </Section>
  );
};

export default HeroPortfolio;