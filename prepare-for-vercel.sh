#!/bin/bash

# This script prepares the project for Vercel deployment by creating a temporary package.json
# with the updated build script for Vercel

echo "🚀 Preparing package.json for Vercel deployment..."

# Create a new package.json with updated build script
cat > package.json.vercel << EOL
{
  "name": "portfolio-website",
  "version": "1.0.0",
  "type": "module",
  "license": "MIT",
  "scripts": {
    "dev": "vite",
    "build": "cd client && vite build --outDir=../dist",
    "start": "node dist/server.js"
  },
  "dependencies": {
    "@fontsource/playfair-display": "^5.2.5",
    "@fontsource/source-sans-3": "^5.2.6",
    "@hookform/resolvers": "^3.9.1",
    "@jridgewell/trace-mapping": "^0.3.25",
    "@radix-ui/react-accordion": "^1.2.1",
    "@radix-ui/react-alert-dialog": "^1.1.2",
    "@radix-ui/react-aspect-ratio": "^1.1.0",
    "@radix-ui/react-avatar": "^1.1.1",
    "@radix-ui/react-checkbox": "^1.1.2",
    "@radix-ui/react-collapsible": "^1.1.1",
    "@radix-ui/react-context-menu": "^2.2.2",
    "@radix-ui/react-dialog": "^1.1.2",
    "@radix-ui/react-dropdown-menu": "^2.1.2",
    "@radix-ui/react-hover-card": "^1.1.2",
    "@radix-ui/react-label": "^2.1.0",
    "@radix-ui/react-menubar": "^1.1.2",
    "@radix-ui/react-navigation-menu": "^1.2.1",
    "@radix-ui/react-popover": "^1.1.2",
    "@radix-ui/react-progress": "^1.1.0",
    "@radix-ui/react-radio-group": "^1.2.1",
    "@radix-ui/react-scroll-area": "^1.2.0",
    "@radix-ui/react-select": "^2.1.2",
    "@radix-ui/react-separator": "^1.1.0",
    "@radix-ui/react-slider": "^1.2.1",
    "@radix-ui/react-slot": "^1.1.0",
    "@radix-ui/react-switch": "^1.1.1",
    "@radix-ui/react-tabs": "^1.1.1",
    "@radix-ui/react-toast": "^1.2.2",
    "@radix-ui/react-toggle": "^1.1.0",
    "@radix-ui/react-toggle-group": "^1.1.0",
    "@radix-ui/react-tooltip": "^1.1.3",
    "@replit/vite-plugin-shadcn-theme-json": "^0.0.4",
    "@tanstack/react-query": "^5.60.5",
    "chart.js": "^4.4.8",
    "class-variance-authority": "^0.7.0",
    "clsx": "^2.1.1",
    "cmdk": "^1.0.0",
    "date-fns": "^3.6.0",
    "embla-carousel-react": "^8.3.0",
    "express": "^4.21.2",
    "framer-motion": "^11.13.1",
    "input-otp": "^1.2.4",
    "lucide-react": "^0.453.0",
    "react": "^18.3.1",
    "react-day-picker": "^8.10.1",
    "react-dom": "^18.3.1",
    "react-hook-form": "^7.53.1",
    "react-icons": "^5.4.0",
    "react-resizable-panels": "^2.1.4",
    "recharts": "^2.13.0",
    "tailwind-merge": "^2.5.4",
    "tailwindcss-animate": "^1.0.7",
    "vaul": "^1.1.0",
    "wouter": "^3.3.5",
    "zod": "^3.23.8",
    "zod-validation-error": "^3.4.0"
  },
  "devDependencies": {
    "@replit/vite-plugin-cartographer": "^0.0.11",
    "@replit/vite-plugin-runtime-error-modal": "^0.0.3",
    "@tailwindcss/typography": "^0.5.15",
    "@types/react": "^18.3.11",
    "@types/react-dom": "^18.3.1",
    "@vitejs/plugin-react": "^4.3.2",
    "autoprefixer": "^10.4.20",
    "postcss": "^8.4.47",
    "tailwindcss": "^3.4.14",
    "typescript": "5.6.3",
    "vite": "^5.4.14"
  }
}
EOL

echo "🔄 To use this package.json for Vercel deployment, run:"
echo "cp package.json.vercel package.json"
echo ""
echo "✅ Vercel preparation script completed!"
echo "📝 NOTE: Remember to restore your original package.json after Vercel deployment setup."