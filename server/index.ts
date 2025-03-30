import express from "express";
import { createServer } from "http";
import { setupVite, serveStatic, log } from "./vite";

// Create a simple Express app that only serves the frontend
const app = express();

(async () => {
  // Create HTTP server
  const server = createServer(app);
  
  // Setup Vite in development mode
  if (app.get("env") === "development") {
    await setupVite(app, server);
  } else {
    serveStatic(app);
  }

  // Serve on port 5000
  const port = 5000;
  server.listen({
    port,
    host: "0.0.0.0",
    reusePort: true,
  }, () => {
    log(`Frontend-only application serving on port ${port}`);
  });
})();
