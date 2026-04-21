type ParagrafoProps = {
  children: React.ReactNode;
  texthero?: "nao" | "sim";
};

export const Paragrafo = ({ children, texthero = "nao" }: ParagrafoProps) => {
  const text = {
    sim: "text-xl lg:text-2xl",
    nao: "lg:text-xl",
  };

  return <p className={text[texthero]}>{children}</p>;
};