import { readPackageJSON } from 'pkg-types'
import { defineConfig, mergeConfig } from 'vite'
import dts from 'vite-plugin-dts'

import { commonConfig } from './common'

function definePackageConfig(defineOptions = {}) {
  const { overrides = {} } = defineOptions
  const root = process.cwd()
  return defineConfig(async () => {
    const { dependencies = {}, peerDependencies = {} } = await readPackageJSON(root)
    const packageConfig = {
      build: {
        lib: {
          entry: 'src/index.ts',
          formats: ['es'],
          fileName: () => 'index.mjs'
        },
        rollupOptions: {
          external: [...Object.keys(dependencies), ...Object.keys(peerDependencies)]
        }
      },
      plugins: [
        dts({
          logLevel: 'error'
        })
      ]
    }
    const mergedConfig = mergeConfig(commonConfig, packageConfig)

    return mergeConfig(mergedConfig, overrides)
  })
}

export { definePackageConfig }
