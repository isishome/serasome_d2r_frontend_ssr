<script>
import { useStore } from 'stores/store'

export default {
  preFetch({ store, ssrContext }) {
    const s = useStore(store)
    return s.setSignStatus(process.env.SERVER ? (ssrContext.req.headers.cookie || null) : null)
  }
}
</script>

<script setup>
import { ref, computed, reactive, watch, inject } from 'vue'
import { useMeta, useQuasar } from 'quasar'
import { useRoute, useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { pascalCase } from 'src/common'
import AdSense from 'components/AdSense.vue'
import Zoom from 'components/Zoom.vue'

// module variables
const $q = useQuasar()
const route = useRoute()
const router = useRouter()
const store = useStore()
const { t, tm, rt, locale } = useI18n({ useScope: 'global' })
const axios = inject('axios')

// environment variables
const isProduction = import.meta.env.PROD
const darkName = import.meta.env.VITE_APP_D2R_DARK_NAME
const langName = import.meta.env.VITE_APP_LANGUAGE_NAME

// common variables
const images = computed(() => store.images)
const routeName = computed(() => route.name)
const screen = computed(() => $q.screen)
const signStatus = computed(() => store.signStatus)

// scroll & progress
const progress = ref(0)

const onScroll = (info) => {
  if (route.meta.progress) {
    const winHeight = window.innerHeight
    const position = info.position.top
    let scrollPercent = position / (document.body.offsetHeight - winHeight) || 0
    let scrollPercentRounded = Math.round(scrollPercent * 100) / 100
    progress.value = scrollPercentRounded
  }
}

// drawer
const leftDrawer = ref(false)
const rightDrawer = ref(false)

// globalization
const options = reactive([
  { label: '한국어', value: 'ko-KR' },
  { label: 'ENGLISH', value: 'en-US' }
])

const toggleLang = (val) => {
  $q.cookies.set(langName, val, { path: '/', expires: '7300d' })
  document.location.reload()
}

// section
const section = computed(() => store.getSection)

// dark mode
const isDark = computed(() => $q.dark.isActive)
const toggleDark = () => {
  $q.cookies.set(darkName, !$q.dark.isActive, { path: '/', expires: '7300d' })
  $q.dark.set(!$q.dark.isActive)
  document.documentElement.style.setProperty('color-scheme', $q.dark.isActive ? 'dark' : 'light')
}

// header method
const home = () => {
  if (routeName.value === 'd2r-main')
    document.location.reload()
  else
    router.replace({ path: '/' })
}
// adsense
const noAD = computed(() => store.noAD)
const key = computed(() => store.key)

// section
const isKnowledge = computed(() => routeName.value.indexOf('knowledge') !== -1)
store.setSectionList(computed(() => tm('d2r.knowledge.list').map(l => ({ value: rt(l.value), label: rt(l.name) }))))
const sectionList = computed(() => store.sectionList)
const _section = ref('')
const toSection = (val) => {
  router.push({ name: 'd2r-knowledge-section', params: { section: val } })
}

// part
const partList = computed(() => store.partList)
const _part = ref('')
const toPart = (val) => {
  router.push({ name: 'd2r-knowledge-part', params: { section: _section.value, part: val } })
}

// sign
const processSignOut = ref(false)
const sign = () => {
  if (signStatus.value) {
    processSignOut.value = true
    axios
      .get('/d2r/account/signout')
      .then(function (response) {
        store.setInfo(response.data)
      })
      .catch(function () { })
      .then(function () {
        processSignOut.value = false
        document.location.reload()
      })
  } else {
    const seras = `${isProduction ? import.meta.env.VITE_APP_SERAS : window.location.protocol.concat('//', window.location.hostname, ':', import.meta.env.VITE_APP_SERAS)}/sign?d2r`
    document.location.href = seras
  }
}

// set meta
const isKnow = computed(() => route.matched.some(r => r.name && r.name.indexOf('knowledge') !== -1))
const isBbs = computed(() => route.matched.some(r => r.name && r.name.indexOf('bbs') !== -1))

const bt = computed(() => store.post.title ? `${store.post.title} : ` : '')
const tt = computed(() => isKnow.value ? `${pascalCase(route.params.section)}${route.params.part ? ' : ' + pascalCase(route.params.part) : ''} | ` :
  isBbs.value ? `${pascalCase(route.params.sec)} | ` : ' ')

const descList = computed(() => route.matched.filter(r => r.meta && r.meta.description))
const d = computed(() => store.post.contents ? store.post.contents.replace(/<[^>]*>/gi, '').substr(0, 150).concat('...') : route.meta.desc ? `${route.meta.desc} | ` : descList.value.length > 0 ? `${descList.value[0].meta.description} | ` : ' ')

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
      canonical: { rel: 'canonical', href: route.path }
    }
  }
})

watch(() => route.path, (val, old) => {
  if (val !== old && old !== null) {
    _section.value = route.params.section
    _part.value = route.params.part
    progress.value = 0
    store.addKey()
  }
}, {
  immediate: true
})
</script>

<template>
  <q-layout view="lHr lpR lFr">
    <q-header class="header q-py-sm">
      <q-toolbar :class="screen.gt.md ? 'q-px-xl' : ''">
        <div class="lt-lg func">
          <q-btn aria-label="Menu" dense flat :ripple="false" @click="() => leftDrawer = !leftDrawer" icon="menu" />
        </div>
        <q-toolbar-title :shrink="screen.gt.md" class="no-padding q-mr-md row justify-center">
          <div class="row items-center cursor-pointer"
            :class="[screen.lt.lg ? 'justify-center' : '', !isDark ? 'light' : '']" @click="home">
            <q-icon flat class="text-secondary rotate-180 q-mr-xs text-title" name="align_vertical_center" size="24px" />
            <div class="gt-md column items-center">
              <div class="text-h5 text-primary text-title" style="line-height:1">DIABLO® II</div>
              <div class="text-caption text-primary" style="line-height:1">Resurrected</div>
            </div>
            <div class="lt-lg text-h4 text-primary text-title">D2R</div>
          </div>
        </q-toolbar-title>
        <div class="q-pl-xl gt-md row items-center justify-start q-gutter-x-sm nav">
          <q-btn aria-label="Goto BBS" v-for="sec in section" :key="sec.name" type="a"
            :class="sec.value === route.params.sec ? 'active' : ''" :to="{ name: 'd2r-bbs', params: { sec: sec.value } }"
            :ripple="false" flat no-caps padding="0 5px" size="18px" :label="sec.label" />
          <div class="column justify-center items-start" style="height:56px">
            <q-btn aria-label="Goto Knowledge" type="a" :style="isKnowledge ? 'opacity:1' : ''"
              :to="{ name: 'd2r-knowledge-part', params: { section: 'classes', part: 'amazon' } }" :ripple="false" flat
              no-caps padding="0 5px" size="18px" :label="tm('d2r.knowledge.title')" />
            <template v-if="isKnowledge">
              <q-separator color="primary" class="full-width" />
              <q-btn-toggle flat dense v-model="_section" toggle-color="primary" class="section" padding="0 10px"
                :options="sectionList" @update:model-value="toSection" type="a" :ripple="false" />
            </template>
          </div>
        </div>
        <q-space class="gt-md" />
        <div class="row justify-end items-center func" :class="screen.gt.sm ? 'q-gutter-x-sm' : ''">
          <q-btn aria-label="Sign" dense flat :loading="processSignOut" :ripple="false" @click="sign"
            :icon="signStatus ? 'logout' : 'login'" />
          <q-btn aria-label="Language" class="gt-md" :ripple="false" dense flat icon="language">
            <q-menu anchor="bottom end" self="top end">
              <q-list separator bordered>
                <q-item dense v-for="(option, index) in options" :key="index" :clickable="locale !== option.value"
                  :v-close-popup="locale !== option.value" @click="() => toggleLang(option.value)"
                  :active="locale === option.value" active-class="text-primary">
                  <q-item-section>
                    <q-item-label>{{ option.label }}</q-item-label>
                  </q-item-section>
                </q-item>
              </q-list>
            </q-menu>
          </q-btn>
          <q-btn aria-label="Dark" class="gt-md" dense flat :ripple="false" @click="toggleDark"
            :icon="isDark ? 'light_mode' : 'dark_mode'" />
          <q-btn aria-label="Drawer" v-if="isKnowledge && partList.length > 1" class="lt-lg" dense flat :ripple="false"
            @click="() => rightDrawer = !rightDrawer" icon="assignment" />
        </div>
      </q-toolbar>
    </q-header>
    <q-drawer :elevated="false" no-swipe-open no-swipe-close no-swipe-backdrop overay v-model="leftDrawer" side="left"
      behavior="mobile" :width="240">
      <q-list class="drawer-list">
        <div class="drawer-top">
          <q-item>
            <q-item-section>
              <q-select dense outlined separator emit-value map-options color="primary" behavior="menu" v-model="locale"
                :options="options" :label="t('language')" @update:model-value="() => toggleLang(locale)" />
            </q-item-section>
            <q-item-section side>
              <q-btn aria-label="Dark" dense flat :ripple="false" @click="toggleDark"
                :icon="isDark ? 'light_mode' : 'dark_mode'" />
            </q-item-section>
          </q-item>
          <q-separator />
        </div>
        <div class="scroll">
          <q-item v-for="sec in section" :key="sec.value" :inset-level="0.5"
            :to="{ name: 'd2r-bbs', params: { sec: sec.value } }" active-class="text-primary">
            <q-item-section>
              {{ sec.label }}
            </q-item-section>
          </q-item>
          <q-expansion-item default-opened :header-inset-level="0.5" :label="tm('d2r.knowledge.title')">
            <q-item :active="section.value === _section" v-for="section in sectionList" :key="section" :inset-level="1"
              :to="section.value !== _section ? { name: 'd2r-knowledge-section', params: { section: section.value } } : null"
              active-class="text-primary">
              <q-item-section>
                {{ section.label }}
              </q-item-section>
            </q-item>
          </q-expansion-item>
          <div class="q-py-lg"></div>
        </div>
      </q-list>
    </q-drawer>
    <q-drawer v-if="isKnowledge && partList.length > 1" :elevated="false" no-swipe-open no-swipe-close no-swipe-backdrop
      overay v-model="rightDrawer" side="right" behavior="mobile" :width="240">
      <q-toolbar class="bg-primary q-pl-lg text-white shadow-2">
        <q-toolbar-title> {{ sectionList.find(s => s.value === _section).label }}</q-toolbar-title>
      </q-toolbar>
      <q-list>
        <q-item v-for="part in partList" :key="part.value" :inset-level="0.5"
          :to="{ name: 'd2r-knowledge-part', params: { section: _section, part: part.value } }"
          active-class="text-primary">
          <q-item-section>
            {{ part.label }}
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>
    <q-page-container>
      <q-scroll-observer debounce="100" @scroll="onScroll" />
      <router-view name="carousel" />
      <div class="row knowledge-item">
        <div class="gt-md col row justify-end" style="padding:7px 6px 0 0">
          <div :class="isKnowledge && partList.length > 1 ? 'fixed' : ''">
            <AdSense v-if="!noAD && screen.gt.md" class="text-right" data-ad-client="ca-pub-5110777286519562"
              data-ad-slot="4948790020" :data-adtest="isProduction ? null : 'on'"
              :width="screen.gt.md ? '160px' : '120px'" height="600px" :key="`al-${key}`" />
          </div>
        </div>
        <q-page class="col-12 col-lg-8 col-xl-7">
          <div :class="screen.gt.sm ? 'q-pt-sm' : ''">
            <router-view />
          </div>
        </q-page>
        <div class="gt-md col row items-start" style="padding:7px 0 0 6px">
          <div style="position:sticky;top:79px">
            <template v-if="isKnowledge && partList.length > 1">
              <div class="part word-keep">
                <div class="column no-wrap q-gutter-y-sm">
                  <q-btn aria-label="Part List" type="a" v-for="part in partList" :key="part.value" dense flat
                    :class="_part === part.value ? 'active' : ''" @click="() => toPart(part.value)">
                    <q-img no-spinner no-transition :src="part.img" :ratio="2" :height="`${600 / partList.length - 12}px`"
                      :data-class="part.label" />
                  </q-btn>
                </div>
              </div>
              <div class="q-mt-sm">
                <AdSense v-if="screen.gt.md && !noAD" class="text-left" data-ad-client="ca-pub-5110777286519562"
                  data-ad-slot="3887197241" :data-adtest="isProduction ? null : 'on'" width="200px" height="200px"
                  :key="`ar1-${key}`" />
              </div>
            </template>
            <AdSense v-else-if="screen.gt.md && !noAD" class="text-left" data-ad-client="ca-pub-5110777286519562"
              data-ad-slot="9654321794" :data-adtest="isProduction ? null : 'on'"
              :width="screen.gt.md ? '160px' : '120px'" height="600px" :key="`ar1-${key}`" />
          </div>
        </div>
      </div>
      <div class="platform-ios-only" style="padding-bottom: 12vh;"></div>
      <q-page-sticky style="z-index: 1;" expand position="top">
        <q-linear-progress :track-color="isDark ? 'grey-8' : 'grey-5'" :value="progress" animation-speed="400"
          color="primary" size="1px" />
      </q-page-sticky>
      <q-page-scroller position="bottom-left" :scroll-offset="150" :offset="[0, 0]"
        style="position: absolute;z-index: 4;">
        <q-btn aria-label="Goto TOP" push
          :style="screen.gt.lg ? 'left:22vw;bottom:20px' : screen.gt.md ? 'left:13vw;bottom:20px' : 'left:10px;bottom:30px'"
          round size="md" icon="keyboard_arrow_up" color="secondary" />
      </q-page-scroller>
    </q-page-container>
  </q-layout>
  <Zoom :images="images" />
</template>

<style scoped>
.header {
  background-color: rgba(255, 255, 255, .8);
  color: var(--q-dark-text) !important;
  -webkit-backdrop-filter: blur(7px);
  backdrop-filter: blur(7px);
}

.body--dark .header::before {
  filter: saturate(10) brightness(1.2);
}

.body--dark .header {
  background-color: var(--q-dark-half);
}

.light {
  filter: contrast(0) brightness(0);
}

.nav:deep(.q-btn) {
  transition: opacity .5s ease;
  opacity: .5;
  position: relative;
}

@media (hover:hover) {
  .nav:deep(a:hover) {
    opacity: .8;
  }
}

.header:deep(.q-btn .q-focus-helper) {
  display: none;
}

.nav:deep(.active) {
  opacity: 1 !important;
}

.nav:deep(.active::after) {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 1px;
  background-color: var(--q-primary);
}

.func:deep(.q-btn) {
  color: #888888;
}

@media (hover:hover) {
  .func:deep(.q-btn:hover) {
    filter: brightness(1.2);
  }
}

.text-title {
  letter-spacing: -2px;
  text-shadow: 0 1px 2px currentColor;
}

.section:deep(.q-btn) {
  opacity: 1;
}

.part {
  width: 200px;
  margin-top: 2px;
}

.part:deep(.q-btn) {
  padding: 2px;
  overflow: hidden;
  box-shadow: 0 0 0 1px var(--q-dark-cloud);
  border-radius: 0;
}

.body--dark .part:deep(.q-btn) {
  box-shadow: 0 0 0 1px var(--q-light-cloud);
}

.part:deep(.q-img) {
  filter: grayscale(100%);
  opacity: .6;
}

@media (hover:hover) {
  .part:deep(.q-img:hover) {
    filter: grayscale(0%);
    opacity: .8;
  }
}

.part:deep(.q-btn.active:after) {
  content: '';
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  /* width: 6px; */
  background: linear-gradient(45deg, var(--q-primary) 10%, transparent 10%) !important;
  box-shadow: inset 0 0 1px 0 var(--q-dark-page);
  position: absolute;
  z-index: 1;
}

.part:deep(.q-btn.active .q-img) {
  filter: grayscale(0%);
  opacity: 1;
}

.part:deep(.q-img::after) {
  position: absolute;
  content: attr(data-class);
  z-index: 1;
  left: 50%;
  bottom: 0;
  line-height: 1.2 !important;
  transform: translateX(-50%);
  color: var(--q-dark-page);
  font-weight: bold;
  text-shadow: 2px 0 2px var(--q-light-page), -2px 0 2px var(--q-light-page), 0 2px 2px var(--q-light-page), 0 -2px 2px var(--q-light-page);
  line-height: 1em;
}

.body--dark .part:deep(.q-img::after) {
  color: var(--q-light-page) !important;
  text-shadow: 2px 0 2px var(--q-dark-page), -2px 0 2px var(--q-dark-page), 0 2px 2px var(--q-dark-page), 0 -2px 2px var(--q-dark-page);
}

.drawer-list {
  position: relative;
  overflow: scroll;
  height: 100%;
}

.drawer-top {
  position: sticky;
  top: 0;
  background-color: var(--q-dark);
  z-index: 1;
}

.body--light .drawer-top {
  background-color: #ffffff;
}
</style>