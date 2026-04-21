// scripts/otimizarFotos.mjs
import sharp from "sharp";
import { readdirSync, mkdirSync, existsSync } from "fs";
import { join, extname, basename } from "path";

// Pasta onde estão suas fotos originais
const PASTA_ORIGEM = "./fotos-originais";
// Pasta onde as fotos otimizadas serão salvas
const PASTA_DESTINO = "./fotos-otimizadas";

const EXTENSOES = [".jpg", ".jpeg", ".png", ".webp"];

async function otimizarPasta(subpasta) {
  const origem = join(PASTA_ORIGEM, subpasta);
  const destino = join(PASTA_DESTINO, subpasta);

  if (!existsSync(destino)) mkdirSync(destino, { recursive: true });

  const arquivos = readdirSync(origem).filter((f) =>
    EXTENSOES.includes(extname(f).toLowerCase())
  );

  console.log(`📁 ${subpasta}: ${arquivos.length} fotos encontradas`);

  for (const arquivo of arquivos) {
    const nomeBase = basename(arquivo, extname(arquivo));
    const caminhoOrigem = join(origem, arquivo);
    const caminhoDestino = join(destino, `${nomeBase}.webp`);

    await sharp(caminhoOrigem)
      .resize(2000, 2000, { fit: "inside", withoutEnlargement: true })
      .webp({ quality: 82 })
      .toFile(caminhoDestino);

    console.log(`  ✅ ${arquivo} → ${nomeBase}.webp`);
  }
}

async function main() {
  const subpastas = readdirSync(PASTA_ORIGEM);

  for (const subpasta of subpastas) {
    await otimizarPasta(subpasta);
  }

  console.log("🎉 Todas as fotos otimizadas!");
}

main().catch(console.error);