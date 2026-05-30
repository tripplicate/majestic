import path from 'node:path'
import VitePluginVue from '@vitejs/plugin-vue'
import PostcssAutoprefixerPlugin from 'autoprefixer'
import PostcssNestedPlugin from 'postcss-nested'
import { defineConfig, loadEnv } from 'vite'
import VitePluginVueDevTools from 'vite-plugin-vue-devtools'

export default defineConfig(({ mode }) => {
  const PROJECT_ROOT_DIR = path.resolve(__dirname)

  const ENV_PREFIX_CLIENT = 'CLIENT'
  const ENV_PREFIX_SERVER = 'SERVER'

  const {
    SERVER_HOST,
    SERVER_PORT,
  } = loadEnv(mode, '.', ENV_PREFIX_SERVER)

  return {
    server: {
      host: SERVER_HOST,
      strictPort: true,
      port: Number.parseInt(SERVER_PORT),
    },
    envPrefix: ENV_PREFIX_CLIENT,
    plugins: [
      VitePluginVue(),
      VitePluginVueDevTools(),
    ],
    css: {
      postcss: {
        plugins: [
          PostcssAutoprefixerPlugin({
            env: mode,
          }),
          PostcssNestedPlugin(),
        ],
      },
    },
    resolve: {
      alias: {
        ':app': path.resolve(PROJECT_ROOT_DIR, 'src', 'app'),
        ':modules': path.resolve(PROJECT_ROOT_DIR, 'src', 'modules'),
      },
    },
  }
})
