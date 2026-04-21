type Titulo2Props = {
    children: React.ReactNode;
    cor?: "claro" | "escuro"
}

export const Titulo2 = ({children, cor="escuro"}: Titulo2Props) => {

const estiloBase = "text-4xl font-sans font-[var(--fonte-titulo)] md:text-4xl lg:text-5xl"

const estiloCor = {
  claro: "text-[var(--branco)]",
  escuro: "text-[var(--vinho)]/90"
}

const estiloFinal = `${estiloBase} ${estiloCor[cor]}`

    return(
      <h2 className={estiloFinal}>
       {children}
      </h2>
    )
}