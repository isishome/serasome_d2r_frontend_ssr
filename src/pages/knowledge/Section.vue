<script setup>
import { computed, ref, watch, shallowRef, defineAsyncComponent, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { useStore } from 'stores/store'

const props = defineProps({
  section: {
    type: String,
    required: true
  },
  part: {
    type: String,
    default: null
  }
})

// module variables
const router = useRouter()
const { tm, rt } = useI18n()
const store = useStore()
const section = computed(() => props.section.toLowerCase())
const key = ref(0)
const secComponent = shallowRef(null)
const load = (val) => {
  store.setPartList([])
  if (val === 'shrines')
    secComponent.value = defineAsyncComponent(() => import('pages/knowledge/Shrines.vue'))
  else if (val === 'terrorzones')
    secComponent.value = defineAsyncComponent(() => import('pages/knowledge/Terrorzones.vue'))
  else {
    secComponent.value = null
    store.setPartList(tm(val).map(p => ({ value: rt(p.value), label: rt(p.label), img: rt(p.img), over: p.over ? rt(p.over) : null })))

    if (props.part === null)
      router.replace({ name: 'd2r-knowledge-part', params: { section: val, part: store.partList[0].value } })
  }
}

watch(() => section.value, (val) => {
  load(val)
  key.value++
})

onMounted(() => {
  load(section.value)
})
</script>
    
<template>
  <component :is="secComponent" class="part-wrap"></component>
  <router-view :key="key"></router-view>
</template>
    
<style scoped>

</style>