# Akshit Bakshi - Professional Portfolio

A professional portfolio website showcasing skills, experience, and achievements for investment banking roles.

## Features

- Professional design inspired by investment banking corporate websites
- Responsive design for all devices
- Interactive projects and blog sections
- Contact form 
- Clean, sophisticated UI with a professional color scheme

## Deployment on Vercel

This project is configured for easy deployment on Vercel. Follow these steps:

### Option 1: Direct Deployment

1. Push your code to a GitHub repository
2. Connect your repository to Vercel
3. Use the following settings in Vercel:
   - Framework Preset: Vite
   - Build Command: `cd client && vite build --outDir=../dist`
   - Output Directory: `dist`
   - Install Command: `npm install`

### Option 2: Using the Prepare Script

This repository includes a script to prepare your project for Vercel deployment:

1. Run the preparation script:
   ```bash
   chmod +x prepare-for-vercel.sh
   ./prepare-for-vercel.sh
   cp package.json.vercel package.json
   ```

2. This will create a modified `package.json` with the correct build settings for Vercel.

3. You can now deploy to Vercel with the optimized configuration.

4. After successful deployment setup, restore your original package.json if needed.

## Local Development

To run the project locally:

```bash
# Install dependencies
npm install

# Start the development server
npm run dev
```

The application will be available at http://localhost:5000/

## Build

To build the project:

```bash
# Using Node.js script
node index.js build

# Or using the build script
chmod +x build.sh
./build.sh
```

The built files will be in the `dist` directory.