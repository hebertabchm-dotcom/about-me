import { jsxLocPlugin } from "@builder.io/vite-plugin-jsx-loc";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { copyFile } from "node:fs/promises";
import path from "path";
import { defineConfig, type Plugin } from "vite";
import { vitePluginManusRuntime } from "vite-plugin-manus-runtime";

const enableManusRuntime =
  process.env.VITE_MANUS_RUNTIME === "1" ||
  process.env.VITE_MANUS_RUNTIME === "true";

const plugins = [
  react(),
  tailwindcss(),
  jsxLocPlugin(),
  spa404FallbackPlugin(),
  ...(enableManusRuntime ? [vitePluginManusRuntime()] : []),
];

function spa404FallbackPlugin() {
  return {
    name: "spa-404-fallback",
    apply: "build" as const,
    closeBundle: async () => {
      const outDir = path.resolve(import.meta.dirname, "dist/public");
      await copyFile(path.join(outDir, "index.html"), path.join(outDir, "404.html"));
    },
  } satisfies Plugin;
}

export default defineConfig(({ command }) => ({
  base: process.env.VITE_BASE ?? (command === "build" ? "./" : "/"),
  plugins,
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "client", "src"),
      "@shared": path.resolve(import.meta.dirname, "shared"),
      "@assets": path.resolve(import.meta.dirname, "attached_assets"),
    },
  },
  envDir: path.resolve(import.meta.dirname),
  root: path.resolve(import.meta.dirname, "client"),
  build: {
    outDir: path.resolve(import.meta.dirname, "dist/public"),
    emptyOutDir: true,
  },
  server: {
    port: 3000,
    strictPort: false, // Will find next available port if 3000 is busy
    host: true,
    allowedHosts: [
      ".manuspre.computer",
      ".manus.computer",
      ".manus-asia.computer",
      ".manuscomputer.ai",
      ".manusvm.computer",
      "localhost",
      "127.0.0.1",
    ],
    fs: {
      strict: true,
      deny: ["**/.*"],
    },
  },
}));
