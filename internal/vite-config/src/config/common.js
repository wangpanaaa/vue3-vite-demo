import { presetTypography, presetUno } from 'unocss';
import UnoCSS from 'unocss/vite';

const commonConfig = {
  server: {
    host: true,
  },
  esbuild: {
    drop: ['console', 'debugger'],
  },
  build: {
    reportCompressedSize: false,
    chunkSizeWarningLimit: 1500,
    rollupOptions: {
      // TODO: Prevent memory overflow
      maxParallelFileOps: 3,
    },
  },
  plugins: [
    UnoCSS({
      presets: [presetUno(), presetTypography()],
    }),
  ],
};

export { commonConfig };
