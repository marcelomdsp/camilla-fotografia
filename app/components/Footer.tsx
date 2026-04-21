import { Paragrafo } from "./Paragrafo";
import { Titulo2 } from "@/app/components/Titulo2";
import Image from "next/image";
import img1 from "@/public/img/pag-home/foto1.jpg";
import img2 from "@/public/img/pag-home/foto2.jpg";
import img3 from "@/public/img/pag-home/foto3.jpg";
import img4 from "@/public/img/pag-home/foto4.jpg";
import img5 from "@/public/img/pag-home/foto5.jpg";
import { FaEnvelope, FaInstagram, FaWhatsapp } from "react-icons/fa6";

const imgSigame = [img1, img2, img3, img4, img5, img1];

export const Footer = () => {
  return (
    <footer className="flex w-full items-center justify-center font-sans">
      <div className="container flex flex-col items-center justify-center w-full text-(--chumbo) mb-15">
        <div className="flex flex-col w-full text-center h-50 justify-center gap-2">
          <Titulo2 cor="escuro">Siga-me nas redes sociais</Titulo2>
          <p className="text-md md:text-lg leading-relaxed max-w-2xl mx-auto">
            Acompanhe meu trabalho e fique por dentro das novidades!
          </p>
        </div>

        <div className="w-full items-center justify-center px-6 space-y-6 md:space-y-0 md:flex md:space-x-8 mb-10">
          <div className="flex items-center gap-4">
            <FaWhatsapp className="text-green-500 text-2xl" />
            <a
              href="wa.me/message/EBTONHHDANOOA1"
              target="_blank"
              className="text-lg text-(--vinho) hover:text-green-500 transition"
            >
              (21) 97163-9183
            </a>
          </div>

          <div className="flex items-center gap-4">
            <FaEnvelope className="text-blue-500 text-2xl" />
            <a
              href="mailto:"
              className="text-lg text-(--vinho) hover:text-blue-500 transition"
            >
              contato@fotografa.com
            </a>
          </div>

          <div className="flex items-center gap-4">
            <FaInstagram className="text-pink-500 text-2xl" />
            <a
              href="https://instagram.com/camillafotografiabr"
              target="_blank"
              className="text-lg text-(--vinho) hover:text-pink-500 transition"
            >
              @camillafotografiabr
            </a>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-6 gap-6 md:gap-2 px-4">
          {imgSigame.map((img, index) => (
            <div key={index} className="group aspect-square overflow-hidden">
              <a
                href="https://www.instagram.com/camillafotografiabr/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Ver foto ${index + 1} no Instagram`}
              >
                <Image
                  src={img}
                  alt={`Foto ${index + 1} do Instagram`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
              </a>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center gap-5 justify-center mt-10">
          <div className="flex flex-col items-center text-(--vinho)">
            <Paragrafo> &copy; 2026 Camilla Fotografia.</Paragrafo>
            <Paragrafo>Todos os direitos reservados.</Paragrafo>
          </div>
        </div>
      </div>
    </footer>
  );
};
