import { watch } from 'chokidar'
import type { App, Page, Theme } from 'vuepress/core'
import { fs, getDirname, path } from 'vuepress/utils'
import type {
  DefaultThemeLocaleOptions,
  DefaultThemePageData,
  DefaultThemePluginsOptions,
  SidebarSorter,
} from '../shared/index.js'
import { resolvePageHead } from './config/resolvePageHead.js'
import { extendsMarkdown } from './markdown/index.js'
import { getPlugins } from './plugins.js'
import { prepareNavbarData, prepareSidebarData } from './prepare/index.js'
import { logger, THEME_NAME } from './utils/index.js'

const __dirname = getDirname(import.meta.url)

export interface DefaultThemeOptions extends DefaultThemeLocaleOptions {
  /**
   * deployed hostname
   */
  hostname?: string

  /**
   * To avoid confusion with the root `plugins` option,
   * we use `themePlugins`
   *
   * 为避免与根`plugins`选项混淆，我们使用`themePlugins`。
   */
  themePlugins?: DefaultThemePluginsOptions

  /**
   * The sidebar sorters. only `'structure'` optional
   *
   * 侧边栏排序。仅支持 `'structure'`
   *
   */
  sidebarSorter?: SidebarSorter
}

export const defaultTheme = ({
  hostname,
  themePlugins = {},
  sidebarSorter,
  ...localeOptions
}: DefaultThemeOptions): Theme => {
  return (app) => {
    if (app.env.isDebug) {
      logger.info('Plugin Options:', themePlugins)
    }

    const onPrepareData = async (app: App): Promise<void> => {
      await Promise.all([
        prepareNavbarData(app, localeOptions),
        prepareSidebarData(app, localeOptions, sidebarSorter),
      ])
    }

    return {
      name: THEME_NAME,

      templateBuild: path.resolve(__dirname, '../../templates/build.html'),

      alias: {
        // use alias to make all components replaceable
        ...Object.fromEntries(
          fs
            .readdirSync(path.resolve(__dirname, '../client/components'))
            .filter((file) => file.endsWith('.vue'))
            .map((file) => [
              `@theme/${file}`,
              path.resolve(__dirname, '../client/components', file),
            ]),
        ),
      },

      clientConfigFile: path.resolve(__dirname, '../client/config.js'),

      plugins: getPlugins(app, { hostname, themePlugins, localeOptions }),

      onPrepared: (app) => onPrepareData(app),

      onWatched: (app, watchers) => {
        const watcher = watch(
          // This ensures the page is generated or updated
          'pages/**/*.vue',
          {
            cwd: app.dir.temp(),
            ignoreInitial: true,
          },
        )

        watcher.on('add', () => onPrepareData(app))
        watcher.on('change', () => onPrepareData(app))
        watcher.on('unlink', () => onPrepareData(app))

        watchers.push(watcher)
      },

      extendsPage: (page: Page<Partial<DefaultThemePageData>>) => {
        // save relative file path into page data to generate edit link
        page.data.filePathRelative = page.filePathRelative
        // save title into route meta to generate navbar and sidebar
        page.routeMeta.title = page.title

        resolvePageHead(page, localeOptions)
      },

      extendsMarkdown: (md, app) => extendsMarkdown(md, app, localeOptions),
    }
  }
}