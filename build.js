// This script prepares the project for Vercel deployment
import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('🚀 Preparing build for Vercel deployment...');

// Function to execute shell commands
function execute(command) {
  try {
    console.log(`Executing: ${command}`);
    execSync(command, { stdio: 'inherit' });
  } catch (error) {
    console.error(`Error executing command: ${command}`);
    console.error(error);
    process.exit(1);
  }
}

// Create dist directory if it doesn't exist
const distDir = path.join(__dirname, 'dist');
if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir, { recursive: true });
}

// Run the Vite build for frontend
console.log('📦 Building the frontend application...');
execute('cd client && npx vite build --outDir=../dist');

// Create a simple server.js for Vercel (optional, Vercel can serve static files directly)
const serverContent = `// Simple server for Vercel
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files
app.use(express.static(path.join(__dirname)));

// For any route that doesn't match a static file, serve index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Only start the server if not on Vercel (Vercel uses its own server)
if (process.env.NODE_ENV !== 'production') {
  app.listen(PORT, () => {
    console.log(\`Server running on port \${PORT}\`);
  });
}

export default app;
`;

// Write server.js to dist folder
fs.writeFileSync(path.join(distDir, 'server.js'), serverContent);

console.log('✅ Build completed successfully!');
console.log('🔥 Your application is ready for Vercel deployment.');