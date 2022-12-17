import { defineConfig } from 'vite';
import reactPlugin from '@vitejs/plugin-react';
import * as path from 'path';

// https://vitejs.dev/config/
export default defineConfig(
{
  resolve:
  {
    alias:
    {
      "@": path.resolve(__dirname, "../src"),
    },
  },
  plugins: [ reactPlugin() ],
});