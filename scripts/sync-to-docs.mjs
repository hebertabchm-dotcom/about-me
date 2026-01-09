import { access, cp, mkdir, rm } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const repoRoot = path.resolve(__dirname, "..");
const fromDir = path.join(repoRoot, "dist", "public");
const toDir = path.join(repoRoot, "docs");

async function ensureExists(p) {
  try {
    await access(p);
  } catch {
    throw new Error(`Expected build output not found: ${p}. Run \"vite build\" first.`);
  }
}

await ensureExists(fromDir);
await mkdir(toDir, { recursive: true });

for (const entry of ["assets", "images", "index.html", "404.html"]) {
  const src = path.join(fromDir, entry);
  const dest = path.join(toDir, entry);

  await rm(dest, { recursive: true, force: true });
  await cp(src, dest, { recursive: true });
}

console.log(`Synced ${fromDir} -> ${toDir}`);