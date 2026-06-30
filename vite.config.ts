import { defineConfig } from 'vite';
import react, { reactCompilerPreset } from '@vitejs/plugin-react';
import babel from '@rolldown/plugin-babel';

import { cloudflare } from "@cloudflare/vite-plugin";

export default defineConfig({
  server: {
    open: true,
    port: 3000,
  },

  plugins: [react(), babel({ presets: [reactCompilerPreset()] }), cloudflare()],
});