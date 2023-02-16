<script setup>
import { ref, reactive } from 'vue'
import { useStore } from 'stores/store'
import { useI18n } from 'vue-i18n'
import { useQuasar } from 'quasar'


const store = useStore()
const { t, tm, locale } = useI18n()
const $q = useQuasar()

const searchText = ref(null)
const expanded = ref(['ACT I : The Sightless Eye', '액트 I : 보이지 않는 눈'])
const actData = reactive(tm('questsData')['act'])

const filtering = (node, filter) => {
  const filt = filter.toLowerCase()
  return node.label && node.label.toLowerCase().indexOf(filt) > -1
}

const onload = (el) => {
  store.addImage({ 'element': el, 'src': el.src })
}
</script>

<template>
  <div class="column q-gutter-y-md">
    <q-input :dense="$q.screen.lt.md" outlined v-model="searchText" :label="t('d2r.knowledge.quests.search')"
      color="primary">
      <template #append>
        <q-icon name="search" />
      </template>
    </q-input>
    <q-separator />
    <q-tree :dense="$q.screen.lt.md" :nodes="actData" node-key="label" :filter="searchText" :filter-method="filtering"
      :no-results-label="t('search.noData')" class="quests text-body2 word-keep" v-model:expanded="expanded" accordion>
      <template v-slot:header-root="prop">
        <div class="text-h5">
          {{ prop.node.label }}
        </div>
      </template>
      <template #header-generic="prop">
        <div class="row items-center full-width">
          <q-img :src="prop.node.avatar" style="max-width:50px" />
          <div class="text-h6 q-ml-sm">
            {{ prop.node.label.split('|')[locale === 'ko' ? 0 : 1] }}
          </div>
        </div>
      </template>
      <template #body-info="prop">
        <div class="column q-gutter-y-sm q-mb-xl">
          <div>
            <img v-if="prop.node.image" :src="prop.node.image" @load="onload($event.target)" style="max-width:16em"
              class="float-left q-mr-md q-my-md box" />
            <p v-for="(d, index) in prop.node.desc" :key="index">
              {{ d }}</p>
          </div>
          <div v-if="prop.node.given" class="row no-wrap items-baseline q-gutter-x-xs">
            <div class="text-primary">
              {{ t('d2r.knowledge.quests.given') }}</div>
            <div>ㆍ</div>
            <div>{{ prop.node.given }}</div>
          </div>
          <div v-if="prop.node.tip" class="row no-wrap items-baseline q-gutter-x-xs">
            <div class="text-primary">
              {{ t('d2r.knowledge.quests.tip') }}</div>
            <div>ㆍ</div>
            <div>{{ prop.node.tip }}</div>
          </div>
          <div v-if="prop.node.reward" class="row no-wrap items-baseline q-gutter-x-xs">
            <div class="text-primary">
              {{ t('d2r.knowledge.quests.reward') }}
            </div>
            <div>ㆍ</div>
            <div>{{ prop.node.reward }}</div>
          </div>
          <div v-if="prop.node.note" class="row no-wrap items-baseline q-gutter-x-xs">
            <div class="text-primary">
              {{ t('d2r.knowledge.quests.note') }}</div>
            <div>ㆍ</div>
            <div class="col word-keep">{{ prop.node.note }}</div>
          </div>
        </div>
      </template>
    </q-tree>
    <p class="q-mt-xl self-end text-grey-6 text-body2">{{ t('d2r.knowledge.source') }} : <a
        style="text-decoration: none;" class="text-title" target="_blank"
        href="http://classic.battle.net/diablo2exp/quests">{{ t('d2r.knowledge.arreatSummit') }}</a> &
      <a style="text-decoration: none;" class=" text-green-4" target="_blank"
        href="https://namu.wiki/w/%EB%94%94%EC%95%84%EB%B8%94%EB%A1%9C%202/%ED%80%98%EC%8A%A4%ED%8A%B8">{{
  t('d2r.knowledge.namuWiki')
        }}</a>
    </p>
  </div>
</template>

<style scoped>

</style>