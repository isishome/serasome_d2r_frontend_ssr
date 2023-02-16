<script setup>
import { ref, computed, shallowRef, watch, defineAsyncComponent, onMounted } from 'vue'
import { useStore } from 'stores/store';
import { useQuasar } from 'quasar'

// pages
const sectionPages = {
  classes: {
    amazon: defineAsyncComponent(() => import('pages/knowledge/classes/Amazon.vue')),
    assassin: defineAsyncComponent(() => import('pages/knowledge/classes/Assassin.vue')),
    barbarian: defineAsyncComponent(() => import('pages/knowledge/classes/Barbarian.vue')),
    druid: defineAsyncComponent(() => import('pages/knowledge/classes/Druid.vue')),
    necromancer: defineAsyncComponent(() => import('pages/knowledge/classes/Necromancer.vue')),
    paladin: defineAsyncComponent(() => import('pages/knowledge/classes/Paladin.vue')),
    sorceress: defineAsyncComponent(() => import('pages/knowledge/classes/Sorceress.vue'))
  },
  quests: {
    act: defineAsyncComponent(() => import('pages/knowledge/quests/Act.vue')),
    secret1: defineAsyncComponent(() => import('pages/knowledge/quests/Secret1.vue')),
    secret2: defineAsyncComponent(() => import('pages/knowledge/quests/Secret2.vue')),
    secret3: defineAsyncComponent(() => import('pages/knowledge/quests/Secret3.vue'))
  },
  items: {
    cube: defineAsyncComponent(() => import('pages/knowledge/items/Cube.vue')),
    rune: defineAsyncComponent(() => import('pages/knowledge/items/Rune.vue')),
    craft: defineAsyncComponent(() => import('pages/knowledge/items/Craft.vue')),
    sunder: defineAsyncComponent(() => import('pages/knowledge/items/Sunder.vue'))
  },
  maps: {
    act1: defineAsyncComponent(() => import('pages/knowledge/maps/Act1.vue')),
    act2: defineAsyncComponent(() => import('pages/knowledge/maps/Act2.vue')),
    act3: defineAsyncComponent(() => import('pages/knowledge/maps/Act3.vue')),
    act4: defineAsyncComponent(() => import('pages/knowledge/maps/Act4.vue')),
    act5: defineAsyncComponent(() => import('pages/knowledge/maps/Act5.vue'))
  }
}
const Skills = defineAsyncComponent(() => import('src/pages/knowledge/Skills.vue'))
const Npcs = defineAsyncComponent(() => import('src/pages/knowledge/Npcs.vue'))


const props = defineProps({
  section: {
    type: String,
    required: true
  },
  part: {
    type: String,
    required: true
  }
})

const store = useStore()
const $q = useQuasar()

const screen = computed(() => $q.screen)
const section = props.section.toLowerCase()
const partList = computed(() => store.partList)
const partIsClass = computed(() => partList.value.find(p => p.value === props.part))
const partComponent = shallowRef(null)
const key = ref(0)

const loadComponent = (s, p) => {
  switch (s) {
    case 'skills':
      if (partComponent.value === Skills)
        key.value++
      else
        partComponent.value = Skills
      break
    case 'npcs':
      if (partComponent.value === Npcs)
        key.value++
      else
        partComponent.value = Npcs
      break
    default:
      partComponent.value = sectionPages[s][p]
  }
}

watch(() => props.part, (val) => {
  loadComponent(section, val)
})

onMounted(() => {
  loadComponent(section, props.part)
})
</script>
      
<template>
  <div v-if="partIsClass" class="column q-gutter-y-md">
    <div class="font-kodia text-center text-h4 text-weight-bold text-primary q-pt-sm q-pb-xl word-keep">
      {{ partIsClass.label }}
    </div>
    <div v-if="partIsClass.over" class="row justify-center">
      <img :src="partIsClass.over" :height="screen.lt.sm ? 160 : 250" />
    </div>
  </div>
  <component :is="partComponent" class="part-wrap" :key="key"></component>
</template>
      
<style scoped>
.part-wrap {
  min-height: 436px;
}
</style>