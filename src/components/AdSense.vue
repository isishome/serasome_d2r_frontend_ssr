<script setup>
import { ref, computed, onMounted, onUnmounted, nextTick } from 'vue'

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
const boxStyle = computed(() => props.dataFullWidthResponsive === 'true' ? 'display:block;min-height:200px' : `display:inline-block;width:${props.width};height:${props.height}`)

const onWindowLoad = () => {
  if (window?.adsbygoogle && adBox.value?.clientHeight > 0)
    (adsbygoogle = window.adsbygoogle || []).push({})
}

onMounted(() => {
  // if (document.readyState !== 'complete')
  //   window.addEventListener("load", onWindowLoad)
  // else {
  //   nextTick(() => {
  onWindowLoad()
  //})
  //}
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

<style scoped>
.box::before {
  position: absolute;
  content: 'AD';
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: .2;
}
</style>