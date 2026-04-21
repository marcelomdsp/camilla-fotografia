
export default function NotFound() {
  return (
     <div className="min-h-screen flex flex-col items-center justify-center p-6 text-center bg-gray-50 font-sans">
      <h1 className="text-7xl font-bold text-(--vinho)">404</h1>
      <p className="text-lg text-(--vinho) mt-2">
        A página que você procura não foi encontrada.
      </p>

      <a
        href="/"
        className="mt-6 px-6 py-3 bg-(--vinho) text-(--branco) rounded-lg text-sm hover:bg-(--vinho)/90 transition"
      >
        Voltar para a página inicial
      </a>
    </div>
  );
}