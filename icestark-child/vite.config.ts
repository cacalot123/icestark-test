import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import htmlPlugin from 'vite-plugin-index-html';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3001,
    // 是否开启 https
    https: false,
  },
  plugins: [vue(), htmlPlugin({
    input: './src/main.ts',
    preserveEntrySignatures: 'exports-only',
  })],
  base: './',
});
 