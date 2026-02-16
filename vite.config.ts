import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';
import tsconfigPaths from 'vite-tsconfig-paths';
import solidSvg from 'vite-plugin-solid-svg';
import { viteSingleFile } from 'vite-plugin-singlefile';
import path from 'path';

export default defineConfig({
  plugins: [solidPlugin(), tsconfigPaths(), solidSvg(), viteSingleFile({ removeViteModuleLoader: true })],
  server: {
    port: 3000,
  },
  build: {
    target: 'esnext',
    assetsInlineLimit: 40096,
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "./src/const/variables.scss";',
      },
    },
  },
  publicDir: './src/assets/public',
  resolve: {
    alias: {
      "@/assets": path.resolve(__dirname, "/src/assets"),
      "~@": path.resolve(__dirname, "/src"),
    },
  },
});
