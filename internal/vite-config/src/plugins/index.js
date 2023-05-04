import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
// @ts-ignore: type unless
import DefineOptions from 'unplugin-vue-define-options/vite'
import purgeIcons from 'vite-plugin-purge-icons'

import { createAppConfigPlugin } from './appConfig'
import { configCompressPlugin } from './compress'
import { configHtmlPlugin } from './html'
import { configSvgIconsPlugin } from './svgSprite'
import { configVisualizerConfig } from './visualizer'

async function createPlugins({ isBuild, root, enableMock, compress, enableAnalyze }) {
  const vitePlugins = [vue(), vueJsx(), DefineOptions()]

  const appConfigPlugin = await createAppConfigPlugin({ root, isBuild })
  vitePlugins.push(appConfigPlugin)

  // vite-plugin-html
  vitePlugins.push(configHtmlPlugin({ isBuild }))

  // vite-plugin-svg-icons
  vitePlugins.push(configSvgIconsPlugin({ isBuild }))

  // vite-plugin-purge-icons
  vitePlugins.push(purgeIcons())

  // The following plugins only work in the production environment
  if (isBuild) {
    // rollup-plugin-gzip
    vitePlugins.push(
      configCompressPlugin({
        compress
      })
    )
  }

  // rollup-plugin-visualizer
  if (enableAnalyze) {
    vitePlugins.push(configVisualizerConfig())
  }

  return vitePlugins
}

export { createPlugins }
