'use client'

type SectionProps = {
  children: React.ReactNode;
  id?: string;
  bgColor?: "transparente" | "bege" | "vinho" | "chumbo" | "branco";
  bgImage?: string;
  mt?: "sim" | "nao";
};

export const Section = ({
  children,
  id,
  bgColor = "transparente",
  bgImage,
  mt = "sim",
}: SectionProps) => {
  const estiloBase =
    "flex flex-col w-full m-h-0 items-center justify-center bg-cover bg-center bg-no-repeat scroll-mt-15";

  const estilosCor = {
    transparente: "",
    branco: "bg-[var(--branco)]",
    bege: "bg-[var(--bege)]/60",
    vinho: "bg-[var(--vinho)]",
    chumbo: "bg-[var(--chumbo)]",
  };

  const marginTop = {
    sim: "mt-20",
    nao: "mt-0",
  };

  const classFinal = `${marginTop[mt]} ${estiloBase} ${estilosCor[bgColor]}`;

  return (
    <section
      id={id}
      className={classFinal}
      style={{
        backgroundImage: bgImage ? `url(${bgImage})` : "",
      }}
    >
      {children}
    </section>
  );
};
