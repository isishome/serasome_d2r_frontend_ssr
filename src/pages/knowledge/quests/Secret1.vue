<script setup>
import { reactive } from 'vue'
import { useStore } from 'stores/store'
import { useI18n } from 'vue-i18n'


const store = useStore()
const { t, tm } = useI18n()

const secretData = reactive(tm('questsData')['secret1'])

const onload = (el) => {
  store.addImage({ 'element': el, 'src': el.src })
}

const play = () => {
  var audio = new Audio(`/wavs/quests/cow${Math.floor(Math.random() * 24) + 1}.wav`);
  audio.play()
}
</script>

<template>
  <div class="column quests word-keep text-body2">
    <div class="row justify-center items-center q-gutter-x-lg">
      <img :src="'/images/knowledge/quests/secret1/hellbovine.gif'" style="max-width:93px" />
      <q-btn round dense flat color="secondary" icon="headset" @click="play" />
    </div>
    <div class="column items-start q-gutter-y-lg">
      <div v-for="(contents, index) in secretData" :key="index" class="full-width">
        <div class="text-h5">
          {{ contents.label }}
        </div>
        <q-separator class="q-mb-md" />
        <div class="q-mb-xl">
          <img class="float-left q-mr-md q-mb-md box" :src="contents.image" @load="onload($event.target)"
            style="width:16em" />
          <p v-for="(d, idx) in contents.desc" :key="idx">
            {{ d }}</p>
        </div>
      </div>
    </div>
    <p class="q-mt-xl self-end text-grey-6 text-body2">{{ t('d2r.knowledge.source') }} : <a
        style="text-decoration: none;" target="_blank" href="http://classic.battle.net/diablo2exp/quests/cow.shtml">{{
          t('d2r.knowledge.arreatSummit')
        }}</a> & <a style="text-decoration: none;" class=" text-green-4" target="_blank"
        href="https://namu.wiki/w/%EC%B9%B4%EC%9A%B0%20%EB%A0%88%EB%B2%A8">{{ t('d2r.knowledge.namuWiki') }}</a>
    </p>
  </div>
</template>

<style scoped>

</style>