#!/bin/bash

# This script prepares the project for Vercel deployment

echo "🚀 Preparing build for Vercel deployment..."

# Create a temporary tsconfig.json with proper paths
echo "📝 Creating temporary build configuration..."
cat > temp-tsconfig.json << EOL
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./client/src/*"],
      "@shared/*": ["./shared/*"],
      "@assets/*": ["./attached_assets/*"]
    }
  }
}
EOL

# Fix paths in the source code temporarily for the build
echo "🔧 Adjusting import paths for build..."
find client/src -type f -name "*.tsx" -exec sed -i 's|@/components|./client/src/components|g' {} \;
find client/src -type f -name "*.tsx" -exec sed -i 's|@/pages|./client/src/pages|g' {} \;
find client/src -type f -name "*.tsx" -exec sed -i 's|@/lib|./client/src/lib|g' {} \;
find client/src -type f -name "*.tsx" -exec sed -i 's|@/hooks|./client/src/hooks|g' {} \;
find client/src -type f -name "*.tsx" -exec sed -i 's|@/data|./client/src/data|g' {} \;

# Navigate to client directory and build
echo "📦 Building the frontend application..."
cd client && npx vite build --outDir=../dist

# Check if build was successful
BUILD_RESULT=$?

# Restore original paths in the source code
echo "🔄 Restoring original import paths..."
cd ..
find client/src -type f -name "*.tsx" -exec sed -i 's|./client/src/components|@/components|g' {} \;
find client/src -type f -name "*.tsx" -exec sed -i 's|./client/src/pages|@/pages|g' {} \;
find client/src -type f -name "*.tsx" -exec sed -i 's|./client/src/lib|@/lib|g' {} \;
find client/src -type f -name "*.tsx" -exec sed -i 's|./client/src/hooks|@/hooks|g' {} \;
find client/src -type f -name "*.tsx" -exec sed -i 's|./client/src/data|@/data|g' {} \;

# Remove temporary files
rm -f temp-tsconfig.json

# Final status message
if [ $BUILD_RESULT -eq 0 ]; then
  echo "✅ Build completed successfully!"
  echo "🔥 Your application is ready for Vercel deployment."
else
  echo "❌ Build failed. Please check the errors above."
  exit 1
fi