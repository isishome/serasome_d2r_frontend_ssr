<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'

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
const adBox = ref(null)
const boxStyle = computed(() => props.dataFullWidthResponsive === 'true' ? `display:block;min-height:${props.height}` : `display:inline-block;width:${props.width};min-height:${props.height}`)

const onWindowLoad = () => {
  console.log(window?.adsbygoogle, ' / ', adBox.value?.clientWidth + adBox.value?.clientHeight, ' : adsbygoogle, width + height')
  if (window?.adsbygoogle && adBox.value?.clientWidth + adBox.value?.clientHeight > 0) {
    (adsbygoogle = window.adsbygoogle || []).push({})
  }
}

onMounted(() => {
  console.log(window, ' / ', window?.adsbygoogle, ' : onMounted')
  if (!window?.adsbygoogle)
    window.addEventListener('load', onWindowLoad)
  else
    onWindowLoad()
})

onUnmounted(() => {
  window.removeEventListener('load', onWindowLoad)
})
</script>

<template>
  <ins ref="adBox" class="adsbygoogle box" :data-ad-client="dataAdClient" :data-ad-slot="dataAdSlot"
    :data-ad-format="dataAdFormat" :data-adtest="dataAdtest" :data-full-width-responsive="dataFullWidthResponsive"
    :style="boxStyle"></ins>
</template>
