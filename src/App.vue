<script setup>
import { ref, onMounted, computed, useSSRContext } from 'vue'
import { useQuasar, useMeta } from 'quasar'
import { useRoute } from 'vue-router'
import { useStore } from './stores/store'
import { pascalCase } from 'src/common'

const $q = useQuasar()
const route = useRoute()
const store = useStore()

const darkName = import.meta.env.VITE_APP_D2R_DARK_NAME
const isDark = $q.cookies.has(darkName) ? $q.cookies.get(darkName).toString() === 'true' : true
const view = ref(false)
$q.dark.set(isDark)

// set meta
const isKnow = computed(() => route.matched.some(r => r.name && r.name.indexOf('knowledge') !== -1))
const isBbs = computed(() => route.matched.some(r => r.name && r.name.indexOf('bbs') !== -1))

const bt = computed(() => store.post.title ? `${store.post.title} : ` : '')
const tt = computed(() => isKnow.value ? `${pascalCase(route.params.section)}${route.params.part ? ' : ' + pascalCase(route.params.part) : ''} | ` :
  isBbs.value ? `${pascalCase(route.params.sec)} | ` : ' ')

const descList = computed(() => route.matched.filter(r => r.meta && r.meta.description))
const d = computed(() => store.post.contents ? store.post.contents.replace(/<[^>]*>/gi, '').substr(0, 150).concat('...') : route.meta.desc ? `${route.meta.desc} | ` : descList.value.length > 0 ? `${descList.value[0].meta.description} | ` : ' ')

const ssrContext = process.env.SERVER ? useSSRContext() : null
const url = process.env.SERVER ? `${ssrContext.req.protocol}://${ssrContext.req.get('host')}` : window.location.origin

useMeta(() => {
  return {
    title: `${bt.value}${tt.value}`,
    titleTemplate: title => `${title}Sera\'s Diablo® II Resurrected`,
    meta: {
      description: { name: 'description', content: d.value },
      ogTitle: {
        property: 'og:title',
        content: `${bt.value}${tt.value}`,
        template(ogTitle) {
          return `${ogTitle}Sera\'s Diablo® II Resurrected`
        }
      },
      ogDescription: {
        property: 'og:description',
        content: d.value
      }
    },
    link: {
      canonical: { rel: 'canonical', href: `${url}${route.path}` }
    }
  }
})

onMounted(() => {
  view.value = true
})
</script>
<template>
  <router-view v-if="view" />
</template>