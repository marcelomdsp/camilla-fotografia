// scripts/gerarIndex.mjs
import { S3Client, ListObjectsV2Command, PutObjectCommand } from "@aws-sdk/client-s3";

const client = new S3Client({
  region: "auto",
  endpoint: process.env.R2_ENDPOINT, // https://SEU_ACCOUNT_ID.r2.cloudflarestorage.com
  credentials: {
    accessKeyId: process.env.R2_ACCESS_KEY_ID,
    secretAccessKey: process.env.R2_SECRET_ACCESS_KEY,
  },
});

const BUCKET = "camilla-fotografia";

// Lista todas as pastas (galerias) do bucket
async function listarPastas() {
  const command = new ListObjectsV2Command({
    Bucket: BUCKET,
    Delimiter: "/",
  });
  const response = await client.send(command);
  return response.CommonPrefixes?.map((p) => p.Prefix.replace("/", "")) ?? [];
}

// Lista todas as fotos de uma pasta e gera o index.json
async function gerarIndexDaPasta(pasta) {
  const command = new ListObjectsV2Command({
    Bucket: BUCKET,
    Prefix: `${pasta}/`,
  });
  const response = await client.send(command);

  const fotos = response.Contents
    ?.map((item) => item.Key.replace(`${pasta}/`, ""))
    .filter((nome) => nome !== "index.json" && nome !== "") // ignora o próprio index
    ?? [];

  // Sobe o index.json na pasta
  const putCommand = new PutObjectCommand({
    Bucket: BUCKET,
    Key: `${pasta}/index.json`,
    Body: JSON.stringify(fotos),
    ContentType: "application/json",
  });
  await client.send(putCommand);

  console.log(`✅ ${pasta}/index.json gerado com ${fotos.length} fotos`);
}

// Roda para todas as pastas
async function main() {
  const pastas = await listarPastas();
  console.log(`📁 Pastas encontradas: ${pastas.join(", ")}`);

  for (const pasta of pastas) {
    await gerarIndexDaPasta(pasta);
  }

  console.log("🎉 Todos os index.json gerados!");
}

main().catch(console.error);