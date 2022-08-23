import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3000,
    // 是否开启 https
    https: false,
  },
  plugins: [vue()],
});
