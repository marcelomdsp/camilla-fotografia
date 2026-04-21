'use client'
import { Section } from "@/app/components/SectionBase";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback } from "react";
import { GrPrevious, GrNext } from "react-icons/gr";
import foto1 from "@/public/img/pag-home/foto1.jpg";
import foto2 from "@/public/img/pag-home/foto2.jpg";
import foto3 from "@/public/img/pag-home/foto3.jpg";
import foto4 from "@/public/img/pag-home/foto4.jpg";
import foto5 from "@/public/img/pag-home/foto5.jpg";
import foto6 from "@/public/img/pag-home/foto6.jpg";
import foto7 from "@/public/img/pag-home/foto7.jpg";
import foto8 from "@/public/img/pag-home/foto8.jpg";
import foto9 from "@/public/img/pag-home/foto9.jpg";
import foto10 from "@/public/img/pag-home/foto10.jpg";
import foto11 from "@/public/img/pag-home/foto11.jpg";
import foto12 from "@/public/img/pag-home/foto12.jpg";

export const slides = [
  { id: 1, img: foto1, alt: "Foto 1", tipo: "horizontal" },
  { id: 2, img: foto2, alt: "Foto 2", tipo: "vertical" },
  { id: 3, img: foto3, alt: "Foto 3", tipo: "horizontal" },
  { id: 4, img: foto4, alt: "Foto 4", tipo: "vertical" },
  { id: 5, img: foto5, alt: "Foto 5", tipo: "horizontal" },
  { id: 6, img: foto6, alt: "Foto 6", tipo: "vertical" },
  { id: 7, img: foto7, alt: "Foto 7", tipo: "horizontal" },
  { id: 8, img: foto8, alt: "Foto 8", tipo: "vertical" },
  { id: 9, img: foto9, alt: "Foto 9", tipo: "horizontal" },
  { id: 10, img: foto10, alt: "Foto 10", tipo: "horizontal" },
  { id: 11, img: foto11, alt: "Foto 11", tipo: "vertical" },
  { id: 12, img: foto12, alt: "Foto 12", tipo: "horizontal" },
];

export const Hero = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi],
  );
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi],
  );
  return (
    <Section id="hero" mt="nao">
      <div className="relative w-full">
        <div ref={emblaRef} className="overflow-hidden w-full">
          <div className="flex w-full select-none cursor-grab active:cursor-grabbing">
            {slides.map((slide) => (
              <div
                key={slide.id}
                className={`overflow-hidden flex justify-center px-1 md:px-1.5 lg:px-2 ${
                  slide.tipo === "vertical"
                    ? "flex-[0_0_50.8%] md:flex-[0_0_40%] lg:flex-[0_0_30%] xl:flex-[0_0_26%]"
                    : "flex-[0_0_112.5%] md:flex-[0_0_85%] lg:flex-[0_0_65%] xl:flex-[0_0_56%]"
                }`}
              >
                <Image
                  src={slide.img}
                  alt={slide.alt}
                  className="object-cover w-full h-full pointer-events-none"
                />
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={scrollPrev}
          aria-label="Slide anterior"
          className="absolute left-1 top-1/2 -translate-y-1/2 p-4 transition text-(--branco) hover:opacity-80 z-10"
        >
          <GrPrevious size={30} />
        </button>
        <button
          onClick={scrollNext}
          aria-label="Próximo slide"
          className="absolute right-1 top-1/2 -translate-y-1/2 p-4 transition text-(--branco) hover:opacity-80 z-10"
        >
          <GrNext size={30} />
        </button>
      </div>
    </Section>
  );
};
