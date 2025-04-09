import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/DriftNote/', // Base URL for deployment
  plugins: [react()],
});

