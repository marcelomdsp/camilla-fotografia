import { Navbar } from "./Navbar";

export const Header = () => {

  return (
    <header
      className={`w-full h-20 md:h-22 lg:h-30 flex font-sans items-center justify-between lg:justify-around z-50 transition-colors duration-300`}
    >
      <div className=" ml-4 font-(--fonte-titulo)">
        <a className="flex items-center text-3xl lg:text-4xl gap-1" href="/">
          <h1 className="text-(--chumbo)">Camilla Fotografia</h1>
        </a>
      </div>
      <Navbar />
    </header>
  );
};
