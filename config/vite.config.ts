import { defineConfig } from 'vite';
import reactPlugin from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(
{
  resolve:
  {
    alias:
    {
      views: "/src/views",
      models: "/src/models",
      assets: "/src/assets",
      utils: "/src/utils",
    },
  },
  plugins: [ reactPlugin() ],
});