const R2_URL = process.env.NEXT_PUBLIC_R2_URL;
const cache = new Map<string, string[]>();

export const pegarFotosEnsaio = async (nomeEnsaio: string) => {
  if (cache.has(nomeEnsaio)) return cache.get(nomeEnsaio)!;

  const response = await fetch(`${R2_URL}/${nomeEnsaio}/index.json`);
  const arquivos: string[] = await response.json();

  const urls = arquivos.map((arquivo) => `${R2_URL}/${nomeEnsaio}/${arquivo}`);

  cache.set(nomeEnsaio, urls);
  return urls;
};
