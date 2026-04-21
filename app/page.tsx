import { Hero } from "@/app/sections/Hero";
import { Portfolio } from "@/app/sections/Portfolio";
import { Depoimentos } from "@/app/sections/Depoimentos";
import { MinhaFilosofiaSection } from "@/app/sections/MinhaFilosofia";

const Home = () => {
  return (
    <div className="flex flex-col items-center">
      <Hero />
      <MinhaFilosofiaSection />
      <Portfolio />
      <Depoimentos />
    </div>
  );
};

export default Home;