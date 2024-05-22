import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      fs: require.resolve('rollup-plugin-node-builtins'),
      os: require.resolve('rollup-plugin-node-builtins'),
      crypto: require.resolve('rollup-plugin-node-builtins'),
    },
  },
})
