<script setup>
import { ref, computed, onMounted, onUnmounted, nextTick } from 'vue'
import { useStore } from 'src/stores/store'

const props = defineProps({
  dataAdClient: {
    type: String,
    required: true
  },
  dataAdSlot: {
    type: String,
    required: true
  },
  dataAdFormat: {
    type: String,
    default: null
  },
  dataAdtest: {
    type: String,
    default: 'on'
  },
  dataFullWidthResponsive: {
    type: String,
    default: null
  },
  width: {
    type: String,
    default: '160px'
  },
  height: {
    type: String,
    default: '600px'
  }
})
const store = useStore()

const adBox = ref(null)
const boxStyle = computed(() => props.dataFullWidthResponsive === 'true' ? `display:block;min-height:${props.height}` : `display:inline-block;width:${props.width};min-height:${props.height}`)

const onWindowLoad = () => {
  if (window?.adsbygoogle && adBox.value?.clientHeight > 0 && !store.noAD) {
    store.adsDatetime = new Date();
    (adsbygoogle = window.adsbygoogle || []).push({})
  }
}

onMounted(() => {
  if (document.readyState !== 'complete')
    window.addEventListener("load", onWindowLoad)
  else {
    nextTick(() => {
      onWindowLoad()
    })
  }
})

onUnmounted(() => {
  window.removeEventListener("load", onWindowLoad)
})
</script>

<template>
  <ins ref="adBox" class="adsbygoogle box" :data-ad-client="dataAdClient" :data-ad-slot="dataAdSlot"
    :data-ad-format="dataAdFormat" :data-adtest="dataAdtest" :data-full-width-responsive="dataFullWidthResponsive"
    :style="boxStyle"></ins>
</template>
