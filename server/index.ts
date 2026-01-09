import express from "express";
import { createServer } from "http";
import fs from "node:fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const server = createServer(app);
  const isProd = process.env.NODE_ENV === "production";

  if (isProd) {
    // Serve static files from dist/public in production
    const staticPath = path.resolve(__dirname, "public");
    app.use(express.static(staticPath));
    app.get("*", (_req, res) => {
      res.sendFile(path.join(staticPath, "index.html"));
    });
  } else {
    const root = path.resolve(__dirname, "..", "client");
    const { createServer: createViteServer } = await import("vite");
    const vite = await createViteServer({
      root,
      server: { middlewareMode: true },
      appType: "spa",
    });

    app.use(vite.middlewares);
    app.get("*", async (req, res, next) => {
      try {
        const url = req.originalUrl;
        const template = await fs.readFile(path.join(root, "index.html"), "utf-8");
        const html = await vite.transformIndexHtml(url, template);
        res.status(200).set({ "Content-Type": "text/html" }).end(html);
      } catch (error) {
        vite.ssrFixStacktrace(error as Error);
        next(error);
      }
    });
  }

  const port = process.env.PORT || 3000;

  server.listen(port, () => {
    console.log(`Server running on http://localhost:${port}/`);
  });
}

startServer().catch(console.error);
