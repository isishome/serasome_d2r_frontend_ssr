import { Quasar, Cookies } from 'quasar'
import { route } from 'quasar/wrappers'
import { createRouter, createMemoryHistory, createWebHistory, createWebHashHistory } from 'vue-router'
import { routes } from './routes'
import { sleep } from 'src/common'
import { useStore } from 'stores/store'
import { i18n } from 'boot/i18n'
import { api } from 'boot/axios'

/*
 * If not building with SSR mode, you can
 * directly export the Router instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Router instance.
 */

export default route(function ({ ssrContext }/* { store, ssrContext } */) {
  const createHistory = process.env.SERVER
    ? createMemoryHistory
    : (process.env.VUE_ROUTER_MODE === 'history' ? createWebHistory : createWebHashHistory)

  const Router = createRouter({
    scrollBehavior(to) {
      return new Promise(async (resolve) => {
        await sleep(200)
        resolve({ top: 0 })
      })
    },
    routes,

    // Leave this as is and make changes in quasar.conf.js instead!
    // quasar.conf.js -> build -> vueRouterMode
    // quasar.conf.js -> build -> publicPath
    history: createHistory(process.env.VUE_ROUTER_BASE)
  })

  Router.beforeEach(async (to) => {
    const cookies = process.env.SERVER ? Cookies.parseSSR(ssrContext) : Cookies
    const findLocale = i18n.global.availableLocales.findIndex(l => l.indexOf(Quasar.lang.getLocale()) !== -1)
    const locale = cookies.has(import.meta.env.VITE_APP_LANGUAGE_NAME) ? cookies.get(import.meta.env.VITE_APP_LANGUAGE_NAME) : findLocale !== -1 ? i18n.global.availableLocales[findLocale] : 'ko-KR'
    i18n.global.locale.value = locale

    const store = useStore()

    store.setNoAD(to.meta.noAD === true)
    store.clearImages()

    if (store.info === null) {
      const options = process.env.SERVER ? { headers: { cookie: ssrContext.req.headers.cookie || null  } } : {}
      const response = await api.get('/d2r/account/info', options)
      store.setInfo(response.data)
    }
  })

  return Router
})
