'use client';

import { useRevelar, revelarStyle } from "../utils/useRevelar";
import { Section } from "./SectionBase";


function Cta() {
  const cta = useRevelar(); 

    return (
         <Section id="contato" mt="sim">
        <div ref={cta.ref} style={{...revelarStyle(cta.visible)}} className="container mt-8 px-8">
         <p className="text-[0.6em] uppercase tracking-[0.30em] font-serif mb-10">Vamos conversar</p>
          <h2 className="text-4xl">Conte-me a sua história.</h2>
          <p className="mt-10 text-center w-[80%]">
            Adoraria conhecer você e entender como posso guardar os momentos que mais importam.
          </p>
            <a href="" className="mt-10 px-6 py-3 text-[0.8em] text-[var(--chumbo)] hover:bg-[var(--chumbo)] hover:text-[var(--bege)] border border-[var(--chumbo)] uppercase tracking-[0.30em] transition-colors duration-300">
              Enviar mensagem
            </a>

          </div>
          </Section>
    )
}

export default Cta;