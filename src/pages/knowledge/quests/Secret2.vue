<script setup>
import { ref, reactive, inject, onUnmounted } from 'vue'
import { date } from 'quasar'
import { useStore } from 'stores/store'
import { useI18n } from 'vue-i18n'

const axios = inject('axios')
const store = useStore()
const { t, tm } = useI18n()

const circle = ref(null)
const circleWidth = ref(100)
const loading = ref(false)
const disable = ref(true)
const ladder = ref(true)
const hardcore = ref(false)
const secretData = reactive(tm('questsData')['secret2'])
const uberDiablo = reactive({})
const color = (progress) => {
  return progress === 1 ? 'light-green-4' : progress === 2 ? 'green-4' : progress === 3 ? 'amber-4' : progress === 4 ? 'orange-4' : progress === 5 ? 'deep-orange-4' : 'red-4'
}

const onload = (el) => {
  store.addImage({ 'element': el, 'src': el.src })
}

const onResize = () => {
  circleWidth.value = Math.round((circle.value ? circle.value.offsetWidth : 300) / 3.5)
}

const getInfo = (ms) => {
  const rms = ms || 0
  loading.value = true
  setTimeout(() => {
    axios.get('/d2r/knowledge/uberdiablo')
      .then((response) => {
        if (response && response.data) {
          Object.assign(uberDiablo, response.data)
          disable.value = true
        }
        else
          disable.value = false
      })
      .catch(() => {
        disable.value = false
      })
      .then(() => {
        loading.value = false
      })
  }, rms)
}

const time = setInterval(() => {
  getInfo()
}, 120000)

getInfo()

onUnmounted(() => {
  clearInterval(time)
})
</script>
  
<template>
  <div class="column quests word-keep text-body2">
    <q-resize-observer @resize="onResize" />
    <div class="row justify-center items-center">
      <img :src="'/images/knowledge/quests/secret2/uberdia.gif'" style="max-width:125px;" />
    </div>
    <q-card class="uber-diablo no-shadow text-body2 word-keep" style="min-height:300px">
      <q-inner-loading :showing="!uberDiablo.servers" color="primary" size="100px" />
      <template v-if="secretData.uberData && uberDiablo.servers">
        <q-card-section>
          <div class="text-h5 text-center">
            {{ date.formatDate(uberDiablo.reg_date, 'YYYY-MM-DD HH:mm:ss') }}
          </div>
        </q-card-section>
        <q-card-section>
          <div ref="circle" class="row jusitify-center items-center q-col-gutter-md">
            <div class="col-4 column items-center self-start"
              v-show="server.ladder === ladder && server.hardcore === hardcore"
              v-for="(server, idx) in uberDiablo.servers" :key="idx">
              <q-circular-progress :value="server.step" step="10" track-color="track" :size="`${circleWidth}px`"
                :color="color(server.progress)" show-value>
                {{ server.progress }}
              </q-circular-progress>
              <div class="text-h5 q-py-sm">
                {{ secretData.uberData[server.region] }}
              </div>
              <div class="text-caption text-center" style="min-height:50px">
                {{ secretData.uberData.step[server.progress] }}
              </div>
            </div>
          </div>
        </q-card-section>
        <q-separator inset />
        <q-card-actions class="q-px-lg" align="between">
          <div>
            <q-btn aria-label="refresh" v-if="!disable" icon="refresh" flat round :loading="loading"
              @click="getInfo(2000)" />
          </div>
          <div>
            <q-toggle v-model="ladder" color="primary" :disable="loading" :label="secretData.uberData.ladder" />
            <q-toggle v-model="hardcore" color="secondary" :disable="loading" :label="secretData.uberData.hardcore" />
          </div>
        </q-card-actions>
      </template>
    </q-card>
    <div class="column items-start q-gutter-y-lg">
      <div v-for="(contents, index) in secretData.contents" :key="index" class="full-width">
        <div class="text-h5">
          {{ contents.label }}
        </div>
        <q-separator class="q-mb-md" />
        <div class="q-mb-xl">
          <img class="float-left q-mr-md q-mb-md box" :src="contents.image" @load="onload($event.target)"
            :style="`width:${contents.width ? contents.width : '16em'}`" />
          <p v-for="(d, idx) in contents.desc" :key="idx">
            {{ d }}</p>
          <ul class="inline-block" v-if="contents.extra">
            <li v-for="(e, idx) in contents.extra" :key="idx" :class="contents.class">{{ e }}</li>
          </ul>
        </div>
      </div>
    </div>
    <p class="q-mt-xl self-end text-grey-6 text-body2">{{ t('d2r.knowledge.source') }} : <a
        style="text-decoration: none;color:#e2b34f" target="_blank"
        href="https://d2runewizard.com/diablo-clone-tracker">d2runewizard</a> & <a style="text-decoration: none;"
        target="_blank" href="https://diablo-archive.fandom.com/wiki/Uber_Diablo_(Diablo_II)">{{
          t('d2r.knowledge.diabloWiki')
        }}</a>
      & <a style="text-decoration: none;" class=" text-green-4" target="_blank"
        href="https://namu.wiki/w/%EC%9A%B0%EB%B2%84%20%EB%94%94%EC%95%84%EB%B8%94%EB%A1%9C">{{
          t('d2r.knowledge.namuWiki')
        }}</a>
    </p>
  </div>
</template>

<style scoped>
.uber-diablo {
  margin: 1em auto;
  width: 600px;
  max-width: 100%;
  margin-bottom: 2em;
  overflow: hidden;
}

.uber-diablo:deep(.text-track) {
  color: var(--q-dark-cloud);
}

.body--dark .uber-diablo:deep(.text-track) {
  color: var(--q-light-cloud) !important;
}
</style>