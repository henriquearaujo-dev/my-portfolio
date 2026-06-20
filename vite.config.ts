import { defineConfig } from 'vite';
import react, { reactCompilerPreset } from '@vitejs/plugin-react';
import babel from '@rolldown/plugin-babel';
import path from 'node:path';

export default defineConfig({
  server: {
    open: true,
    port: 3000,
  },

  plugins: [react(), babel({ presets: [reactCompilerPreset()] })],
  resolve: {
    alias: {
      // Define que o '@' aponta para a pasta 'src' do seu projeto
      '@': path.resolve(__dirname, './src'),
    },
  },
});
