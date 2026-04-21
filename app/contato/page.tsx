/*'use client'

import { useEffect, useRef, useState, CSSProperties } from "react";

const PHOTO_MAIN =
  "https://images.unsplash.com/photo-1554048612-b6a482bc67e5?w=900&q=85";
const PHOTO_SECONDARY =
  "https://images.unsplash.com/photo-1537633552985-df8429e8048b?w=700&q=85";

const C = {
  white: "#ffffff",
  sand: "#f1ede5",
  text: "#504940",
  muted: "#8a7c6e",
  label: "#a89b8c",
  accent: "#c9bfb0",
  numeral: "#d5ccc0",
  border: "#e8e1d8",
};

function useReveal() {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.12 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return { ref, visible };
}

function revealStyle(visible: boolean, delay = 0): CSSProperties {
  return {
    opacity: visible ? 1 : 0,
    transform: visible ? "translateY(0)" : "translateY(24px)",
    transition: `opacity 0.8s ease ${delay}ms, transform 0.8s ease ${delay}ms`,
  };
}

function CTAButton() {
  const [hovered, setHovered] = useState(false);
  return (
    <a
      href="mailto:contato@camillafotografia.com"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "inline-block",
        fontSize: 11,
        letterSpacing: "0.35em",
        textTransform: "uppercase",
        textDecoration: "none",
        padding: "1rem 3rem",
        border: `1px solid ${hovered ? C.text : C.accent}`,
        backgroundColor: hovered ? C.text : "transparent",
        color: hovered ? C.sand : C.text,
        transition: "all 0.4s ease",
      }}
    >
      Enviar mensagem
    </a>
  );
}

export default function SobrePage() {
  const bio = useReveal();
  const values = useReveal();
  const image = useReveal();
  const cta = useReveal();

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;1,400;1,500&family=Lora:ital,wght@0,300;0,400;1,300&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        body { background: #ffffff; }
        img { display: block; max-width: 100%; }
      `}</style>

      <main style={{ fontFamily: "'Lora', Georgia, serif", backgroundColor: C.white, color: C.text, minHeight: "100vh" }}>

        
        <section ref={bio.ref as React.RefObject<HTMLElement>} style={{ ...revealStyle(bio.visible), padding: "7rem 6vw 5rem" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "clamp(2rem, 5vw, 6rem)", alignItems: "start" }}>

            <div>
              <div style={{ position: "relative", aspectRatio: "4/5", overflow: "hidden" }}>
                <img src={PHOTO_SECONDARY} alt="Camilla" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                <div style={{ position: "absolute", bottom: -10, right: -10, width: "100%", height: "100%", border: `1px solid ${C.accent}`, pointerEvents: "none" }} />
              </div>
              <div style={{ marginTop: "2rem" }}>
                <p style={{ fontSize: 10, letterSpacing: "0.4em", textTransform: "uppercase", color: C.label, marginBottom: 6 }}>Fotógrafa</p>
                <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.8rem, 3vw, 2.4rem)", fontWeight: 400, lineHeight: 1.2 }}>Camilla</h2>
                <div style={{ marginTop: 14, width: 40, height: 1, backgroundColor: C.accent }} />
              </div>
            </div>

            <div style={{ paddingTop: "clamp(0rem, 2vw, 2rem)" }}>
              <p style={{ fontSize: 10, letterSpacing: "0.4em", textTransform: "uppercase", color: C.label, marginBottom: 24 }}>Sobre mim</p>
              <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2rem, 4.5vw, 3.8rem)", fontWeight: 400, lineHeight: 1.1, marginBottom: 36 }}>
                Fotografia que<br />
                <em style={{ color: C.muted }}>guarda o amor</em><br />
                para sempre.
              </h1>

              <div style={{ display: "flex", flexDirection: "column", gap: "1.2rem", fontSize: 15, lineHeight: 1.95, fontWeight: 300 }}>
                <p>Sou fotógrafa especializada nos momentos que importam de verdade — aqueles que seu coração vai querer revisitar por décadas. Casamentos, pré-weddings, ensaios de família e gestantes são o meu território.</p>
                <p>Acredito que a melhor fotografia acontece quando as pessoas se sentem à vontade. O meu jeito de trabalhar é calmo, próximo e cheio de escuta — porque cada família tem sua própria forma de amar, e cada noiva carrega uma história que merece ser contada com cuidado.</p>
                <p>Sou do Rio de Janeiro, mas viajo para onde o amor me levar. Luz natural, emoções genuínas e muita leveza — é assim que gosto de trabalhar.</p>
              </div>

              <div style={{ marginTop: 40, paddingTop: 32, borderTop: `1px solid ${C.border}`, display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.6rem 2rem" }}>
                {[
                  { label: "Estilo", value: "Luminoso & atemporal" },
                  { label: "Localização", value: "Rio de Janeiro · Viagens" },
                  { label: "Bônus", value: "Previa da sessão" },
                  { label: "Resposta", value: "Em até 24 horas" },
                ].map(({ label, value }) => (
                  <div key={label}>
                    <p style={{ fontSize: 10, letterSpacing: "0.4em", textTransform: "uppercase", color: C.label, marginBottom: 4 }}>{label}</p>
                    <p style={{ fontSize: 14, fontWeight: 300 }}>{value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section ref={values.ref as React.RefObject<HTMLElement>} style={{ ...revealStyle(values.visible), backgroundColor: C.sand, padding: "5rem 6vw" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            <p style={{ fontSize: 10, letterSpacing: "0.4em", textTransform: "uppercase", color: C.label, marginBottom: 12 }}>O que me move</p>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.8rem, 3vw, 2.6rem)", fontWeight: 400, marginBottom: 56 }}>Minha filosofia</h2>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "clamp(2rem, 4vw, 3.5rem)" }}>
              {[
                { num: "01", title: "Presença", text: "Apareço antes para que você se esqueça da câmera e lembre só do momento." },
                { num: "02", title: "Delicadeza", text: "Cada fase — barriga, aliança ou primeiro abraço — merece um olhar gentil." },
                { num: "03", title: "Memória", text: "Entrego imagens que serão mostradas para netos, com orgulho e lágrimas." },
              ].map(({ num, title, text }, i) => (
                <div key={num} style={{ ...revealStyle(values.visible, i * 130) }}>
                  <p style={{ fontFamily: "'Playfair Display', serif", fontSize: "3.2rem", fontWeight: 300, color: C.numeral, marginBottom: 14, userSelect: "none" }}>{num}</p>
                  <div style={{ width: 36, height: 1, backgroundColor: C.accent, marginBottom: 18 }} />
                  <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.2rem", fontWeight: 400, marginBottom: 10 }}>{title}</h3>
                  <p style={{ fontSize: 14, lineHeight: 1.75, fontWeight: 300, color: C.muted }}>{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section ref={image.ref as React.RefObject<HTMLElement>} style={{ ...revealStyle(image.visible), backgroundColor: C.white, padding: "5rem 6vw 7rem" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto", position: "relative" }}>
            <div style={{ overflow: "hidden" }}>
              <img src={PHOTO_MAIN} alt="Ensaio" style={{ width: "100%", maxHeight: 600, objectFit: "cover", objectPosition: "center 20%" }} />
            </div>
            <blockquote style={{ position: "absolute", bottom: -20, right: 0, backgroundColor: C.sand, padding: "1.8rem 2rem", maxWidth: 300 }}>
              <div style={{ width: 28, height: 1, backgroundColor: C.accent, marginBottom: 14 }} />
              <p style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontSize: "1.05rem", lineHeight: 1.6 }}>
                "Cada foto é uma promessa de que aquele momento nunca será esquecido."
              </p>
            </blockquote>
          </div>
        </section>

        <section ref={cta.ref as React.RefObject<HTMLElement>} style={{ ...revealStyle(cta.visible), backgroundColor: C.white, padding: "7rem 6vw 5rem", textAlign: "center" }}>
          <p style={{ fontSize: 10, letterSpacing: "0.4em", textTransform: "uppercase", color: C.label, marginBottom: 20 }}>Vamos conversar</p>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.8rem, 4vw, 3rem)", fontWeight: 400, marginBottom: 16 }}>Conta-me a sua história.</h2>
          <p style={{ fontSize: 14, fontWeight: 300, color: C.muted, maxWidth: 360, margin: "0 auto 40px" }}>
            Adoraria conhecer você e entender como posso guardar os momentos que mais importam.
          </p>
          <CTAButton />
        </section>

      </main>
    </>
  );
}
*/

import { Section } from "@/app/components/SectionBase";

import HeroPortfolio from "../portifolio-sections/HeroPortfolio";

const Contato = () => {
  return (
    <Section id="contato">
      <div className="container font-sans mb-15 gap-10">
        <HeroPortfolio
          titulo="Contato"
          texto="Entre em contato para agendar seu ensaio ou tirar dúvidas."
        />
        <a
          href=""
          className="mt-10 px-15 py-4 text-[1em] text-[var(--chumbo)] hover:bg-[var(--chumbo)] hover:text-[var(--bege)] border border-[var(--chumbo)] uppercase tracking-[0.30em] transition-colors duration-300"
        >
          Enviar mensagem
        </a>
      </div>
    </Section>
  );
};

export default Contato;
