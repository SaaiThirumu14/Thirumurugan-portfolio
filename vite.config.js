import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import viteImagemin from 'vite-plugin-imagemin';

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    viteImagemin({
      gifsicle: { optimizationLevel: 7 },
      optipng: { optimizationLevel: 7 },
      mozjpeg: { quality: 75 },
      pngquant: { quality: [0.7, 0.85] },
      svgo: {
        plugins: [
          { name: 'removeViewBox', active: false },
          { name: 'removeDimensions', active: true }
        ]
      }
    })
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom']
        }
      }
    }
  }
  
});
