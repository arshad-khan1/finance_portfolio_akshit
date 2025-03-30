// This module serves as an entry point for Vercel or other hosting platforms
// It's a simple placeholder - all functionality is in the client/src directory
// The actual application is a static site that will be served from the dist directory

console.log('This is a static frontend-only application.');
console.log('For development, run: npm run dev');
console.log('For production build, run: npm run build');

// Export a dummy function for compatibility
module.exports = {
  handler: (req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Static site is deployed. Please navigate to the root URL.');
  }
};