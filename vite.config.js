import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  envPrefix: 'REACT_APP_',

  plugins: [react()],
  build: {
      outDir: "build",
  },
  server: {
      port: 4000,
      open: true,
  },
  css: {
    modules: true
  }
});