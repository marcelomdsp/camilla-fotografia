"use client";
import { useState, useRef, type JSX } from "react";

interface NavItem {
  label: string;
  href: string;
}

const portfolioSubItems: NavItem[] = [
  { label: "Casamento", href: "/casamento" },
  { label: "Pré-Wedding", href: "/pre-wedding" },
  { label: "Gestantes", href: "/gestante" },
  { label: "Família", href: "/familia" },
];

const phoneNumber = "5521971639183";
const message =
  "Olá! Vim através do site e gostaria de saber mais sobre os ensaios fotográficos.";

const handleWhatsAppClick = () => {
  const encodedMessage = encodeURIComponent(message);
  window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, "_blank");
};

export function Navbar(): JSX.Element {
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);
  const [portfolioOpenMobile, setPortfolioOpenMobile] =
    useState<boolean>(false);
  const [portfolioHovered, setPortfolioHovered] = useState<boolean>(false);
  const hoverTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleMouseEnter = (): void => {
    if (hoverTimeout.current) clearTimeout(hoverTimeout.current);
    setPortfolioHovered(true);
  };

  const handleMouseLeave = (): void => {
    hoverTimeout.current = setTimeout(() => setPortfolioHovered(false), 120);
  };

  return (
    <>
      <style>{`
        .nav-root {
          font-family: var(--fonte-titulo);
          font-weight: 300;
          letter-spacing: 0.12em;
        }

        .desk-link {
          position: relative;
          font-size: 0.72rem;
          text-transform: uppercase;
          color: var(--chumbo);
          text-decoration: none;
          padding-bottom: 2px;
          transition: color 0.25s;
        }
        .desk-link::after {
          content: '';
          position: absolute;
          bottom: 0; left: 0;
          width: 0; height: 1px;
          background: var(--chumbo);
          transition: width 0.3s cubic-bezier(.4,0,.2,1);
        }
        .desk-link:hover::after { width: 100%; }

        .dropdown-wrap {
          position: absolute;
          top: calc(100% + 18px);
          left: 50%;
          transform: translateX(-50%);
          min-width: 170px;
          pointer-events: none;
          opacity: 0;
          transform: translateX(-50%) translateY(-8px);
          transition: opacity 0.32s cubic-bezier(.4,0,.2,1), transform 0.32s cubic-bezier(.4,0,.2,1);
        }
        .dropdown-wrap.open {
          opacity: 1;
          pointer-events: auto;
          transform: translateX(-50%) translateY(0);
        }
        .dropdown-inner {
          background: var(--bege);
          border: 1px solid #e8ddd5;
          box-shadow: 0 12px 40px rgba(90,60,40,0.08);
          padding: 10px 0;
        }
        .drop-item {
          display: block;
          padding: 9px 22px;
          font-size: 0.68rem;
          text-transform: uppercase;
          color: var(--chumbo);
          text-decoration: none;
          letter-spacing: 0.14em;
          transition: color 0.2s, background 0.2s;
        }
        .drop-item:hover {
          color: var(--chumbo);
          background: rgba(184,155,130,0.09);
        }

        .mobile-overlay {
          position: fixed; inset: 0;
          background: var(--bege);
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
          z-index: 50;
          transform: translateX(100%);
          transition: transform 0.42s cubic-bezier(.77,0,.18,1);
        }
        .mobile-overlay.open {
          transform: translateX(0);
        }
        .mob-link {
          display: block;
          font-size: 0.78rem;
          text-transform: uppercase;
          color: var(--chumbo);
          text-decoration: none;
          letter-spacing: 0.16em;
          padding: 18px 32px;
          border-bottom: 1px solid #ede5dc;
          transition: color 0.2s, background 0.2s;
        }
        .mob-link:hover { color: #3a3228; background: rgba(184,155,130,0.06); }

        .mob-sub-wrap {
          overflow: hidden;
          max-height: 0;
          transition: max-height 0.38s cubic-bezier(.4,0,.2,1);
        }
        .mob-sub-wrap.open {
          max-height: 300px;
        }
        .mob-sub-item {
          display: block;
          font-size: 0.72rem;
          color: var(--chumbo);
          text-decoration: none;
          letter-spacing: 0.16em;
          padding: 14px 32px 14px 48px;
          border-bottom: 1px solid #ede5dc;
          text-transform: uppercase;
          transition: color 0.2s, background 0.2s;
        }
        .mob-sub-item:hover { color: #3a3228; background: rgba(184,155,130,0.06); }

        .hamburger-line {
          display: block;
          width: 22px; height: 1px;
          background: #6b5f55;
          transition: transform 0.3s, opacity 0.3s;
          transform-origin: center;
        }
      `}</style>

      {/* DESKTOP */}
      <nav
        className=" nav-root hidden md:flex items-center justify-between px-10 py-5"
        style={{ position: "sticky", top: 0, zIndex:10}}
      >
        <div className="flex items-center gap-10">
          <a href="/" className="desk-link">
            Home
          </a>
          <a href="/sobre" className="desk-link">
            Sobre
          </a>

          <div
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <a
              href=""
              className="desk-link"
              style={{ display: "flex", alignItems: "center", gap: 5 }}
            >
              Portfólio
              <svg
                width="9"
                height="6"
                viewBox="0 0 9 6"
                fill="none"
                style={{
                  transition: "transform 0.3s",
                  transform: portfolioHovered
                    ? "rotate(180deg)"
                    : "rotate(0deg)",
                }}
              >
                <path
                  d="M1 1l3.5 4L8 1"
                  stroke="var(--chumbo)"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>

            <div className={`dropdown-wrap ${portfolioHovered ? "open" : ""}`}>
              <div className="dropdown-inner">
                {portfolioSubItems.map((item: NavItem) => (
                  <a key={item.label} href={item.href} className="drop-item">
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <a href="/contato" className="desk-link">
            Contato
          </a>
        </div>
      </nav>

      {/* MOBILE */}
      <nav
        className="nav-root md:hidden flex items-center justify-between px-6 py-4"
        style={{ position: "sticky", top: 0 }}
      >
        <button
          onClick={() => setMobileOpen((v: boolean) => !v)}
          className="flex flex-col gap-1.5 p-1"
          aria-label="Menu"
        >
          <span
            className="hamburger-line"
            style={
              mobileOpen ? { transform: "translateY(7px) rotate(45deg)" } : {}
            }
          />
          <span
            className="hamburger-line"
            style={mobileOpen ? { opacity: 0 } : {}}
          />
          <span
            className="hamburger-line"
            style={
              mobileOpen ? { transform: "translateY(-7px) rotate(-45deg)" } : {}
            }
          />
        </button>
      </nav>

      <div className={`mobile-overlay md:hidden ${mobileOpen ? "open" : ""}`}>
        <div className="flex justify-between items-center px-6 py-4 bg-(--bege) border-b border-[#ede5dc]">
          <span className="nav-logo">Camilla Fotografia</span>
          <button
            onClick={() => setMobileOpen(false)}
            aria-label="Fechar"
            className="p-1"
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path
                d="M2 2l14 14M16 2L2 16"
                stroke="var(--chumbo)"
                strokeWidth="1.3"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>

        <div className=" bg-(--bege)">
          <a href="/" className="mob-link">
            Home
          </a>
          <a href="/sobre" className="mob-link">
            Sobre
          </a>

          <div>
            <button
              onClick={() => setPortfolioOpenMobile((v: boolean) => !v)}
              className="mob-link w-full text-left "
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                background: "none",
                borderBottom: "1px solid #ede5dc",
                cursor: "pointer",
                fontFamily: "inherit",
                letterSpacing: "0.16em",
              }}
            >
              Portfólio
              <svg
                width="9"
                height="6"
                viewBox="0 0 9 6"
                fill="none"
                style={{
                  transition: "transform 0.35s",
                  transform: portfolioOpenMobile
                    ? "rotate(180deg)"
                    : "rotate(0deg)",
                  marginRight: 2,
                }}
              >
                <path
                  d="M1 1l3.5 4L8 1"
                  stroke="var(--chumbo)"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <div
              className={`mob-sub-wrap ${portfolioOpenMobile ? "open" : ""}`}
            >
              {portfolioSubItems.map((item: NavItem) => (
                <a key={item.label} href={item.href} className="mob-sub-item">
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          <a href="/depoimentos" className="mob-link">
            Depoimentos
          </a>
          <a href="/contato" className="mob-link">
            Contato
          </a>
        </div>
      </div>
    </>
  );
}
