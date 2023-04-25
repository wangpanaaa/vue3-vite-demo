/**
 *  Vite Plugin for fast creating SVG sprites.
 * https://github.com/anncwb/vite-plugin-svg-icons
 */

import { resolve } from 'node:path';

import { createSvgIconsPlugin } from 'vite-plugin-svg-icons';

export function configSvgIconsPlugin({ isBuild }) {
  const svgIconsPlugin = createSvgIconsPlugin({
    iconDirs: [resolve(process.cwd(), 'src/assets/icons')],
    svgoOptions: isBuild,
  });
  return svgIconsPlugin;
}
