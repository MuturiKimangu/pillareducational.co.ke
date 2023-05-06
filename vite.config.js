import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';
import Components from 'unplugin-vue-components/vite';

export default defineConfig({
  plugins: [vue(), Components()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  base: process.env.NODE_ENV === 'production' ? 'pillareducational.co.ke' : '/',
});
