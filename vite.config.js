import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    sourcemap: true,
  },
  server: {
    open: true,      // Abre el navegador automáticamente
    sourcemap: true, // Habilita los mapas de fuente en desarrollo
  },
});
