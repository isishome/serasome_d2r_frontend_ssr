import { boot } from 'quasar/wrappers'
import { Cookies, Quasar } from 'quasar'
import axios from 'axios'

// Be careful when using SSR for cross-request state pollution
// due to creating a Singleton instance here;
// If any client changes this (global) instance, it might be a
// good idea to move this instance creation inside of the
// "export default () => {}" function below (which runs individually
// for each client)

const api = axios.create({
  withCredentials: true
})

// Add a response interceptor
api.interceptors.response.use((response) => {

  // Any status code that lie within the range of 2xx cause this function to trigger
  // Do something with response data
  return response
}, (error) => {
  const errMsg = error.response && (error.response.data || error.response.statusText)
  if (errMsg) {
    const url = error.response.config.url
    if (error.response.status === 401 && url !== 'info') {
      router.push({ name: 'sign' })
    }
    else if (errMsg) {
      Notify.create({
        message: errMsg,
        color: 'negative'
      })
    }
  }
  // Any status codes that falls outside the range of 2xx cause this function to trigger
  // Do something with response error
  return Promise.reject(error)
})

export default boot(({ app, ssrContext }) => {
  const protocol = process.env.SERVER ? ssrContext.req.protocol.concat(':') : window.location.protocol
  const hostname = process.env.SERVER ? ssrContext.req.hostname : window.location.hostname
  const port = import.meta.env.VITE_APP_BE_PORT

  api.defaults.baseURL = import.meta.env.VITE_APP_BE_HOST ? import.meta.env.VITE_APP_BE_HOST : `${protocol}//${hostname}${port ? ':'.concat(port) : ''}`

  const cookies = process.env.SERVER ? Cookies.parseSSR(ssrContext) : Cookies
  api.defaults.headers = {
    'Accept-Language': cookies.has(import.meta.env.VITE_APP_LANGUAGE_NAME) ? cookies.get(import.meta.env.VITE_APP_LANGUAGE_NAME) : Quasar.lang.getLocale() || 'ko-KR'
  }

  // for use inside Vue files (Options API) through this.$axios and this.$api

  app.provide('axios', api)

  app.config.globalProperties.$axios = axios
  // ^ ^ ^ this will allow you to use this.$axios (for Vue Options API form)
  //       so you won't necessarily have to import axios in each vue file

  app.config.globalProperties.$api = api
  // ^ ^ ^ this will allow you to use this.$api (for Vue Options API form)
  //       so you can easily perform requests against your app's API
})

export { api }