import express from "express";
import { createServer } from "http";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const server = createServer(app);

  // SEO & Security Headers Middleware
  app.use((req, res, next) => {
    // Security headers
    res.setHeader("X-Content-Type-Options", "nosniff");
    res.setHeader("X-Frame-Options", "SAMEORIGIN");
    res.setHeader("X-XSS-Protection", "1; mode=block");
    res.setHeader("Referrer-Policy", "strict-origin-when-cross-origin");
    
    // Performance & SEO headers
    res.setHeader("Cache-Control", "public, max-age=3600, s-maxage=3600");
    
    // Compression for better performance
    next();
  });

  // Serve static files from dist/public in production
  const staticPath =
    process.env.NODE_ENV === "production"
      ? path.resolve(__dirname, "public")
      : path.resolve(__dirname, "..", "dist", "public");

  app.use(express.static(staticPath, {
    setHeaders: (res, path) => {
      // Cache busting for index.html
      if (path.endsWith('.html')) {
        res.setHeader('Cache-Control', 'public, max-age=0, must-revalidate');
      }
      // Long cache for versioned assets
      else if (path.match(/\.(js|css|woff2|woff|ttf)$/)) {
        res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
      }
      // SEO files
      else if (path.endsWith('robots.txt') || path.endsWith('sitemap.xml')) {
        res.setHeader('Cache-Control', 'public, max-age=86400');
        res.setHeader('Content-Type', path.endsWith('.xml') ? 'application/xml' : 'text/plain');
      }
    }
  }));

  // Handle client-side routing - serve index.html for all routes
  app.get("*", (_req, res) => {
    res.sendFile(path.join(staticPath, "index.html"));
  });

  const port = process.env.PORT || 3000;

  server.listen(port, () => {
    console.log(`Server running on http://localhost:${port}/`);
  });
}

startServer().catch(console.error);
