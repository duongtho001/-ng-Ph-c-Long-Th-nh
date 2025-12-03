import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // Sets the base path to relative './' which ensures assets load correctly
  // regardless of the repository name on GitHub Pages (e.g., /repo-name/ or root).
  base: './',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    // Optimizations for production build
    sourcemap: false,
    minify: 'esbuild',
    rollupOptions: {
      output: {
        // Splits vendor libraries (React, etc.) into separate chunks for better caching
        manualChunks: {
          vendor: ['react', 'react-dom'],
        },
        // Standardizes output file names
        entryFileNames: 'assets/[name].[hash].js',
        chunkFileNames: 'assets/[name].[hash].js',
        assetFileNames: 'assets/[name].[hash].[ext]',
      },
    },
  },
  server: {
    open: true,
  },
});