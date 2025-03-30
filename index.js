// This is a simple frontend-only entry point
import { execSync } from 'child_process';

// Run vite directly
try {
  console.log('Starting frontend application...');
  execSync('npx vite', { stdio: 'inherit' });
} catch (error) {
  console.error('Error starting the application:', error);
}