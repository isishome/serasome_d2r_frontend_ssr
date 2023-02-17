<script>
import { useStore } from 'stores/store'
export default {
  preFetch({ store, currentRoute }) {
    if (currentRoute.name === 'd2r-read') {
      const s = useStore(store)
      return s.setPost(currentRoute.params.sec, currentRoute.params.pid)
    }
  }
}
</script>

<script setup>
import { reactive, computed } from 'vue'
import { useRoute, onBeforeRouteLeave } from 'vue-router'
import { useI18n } from 'vue-i18n'
import List from 'components/bbs/List.vue'
import Read from 'components/bbs/Read.vue'
import Write from 'components/bbs/Write.vue'

defineProps({
  sec: {
    type: String,
    default: 'news'
  },
  pid: {
    type: String,
    default: null
  }
})

const store = useStore()
const route = useRoute()
const routeName = computed(() => route.name)
const { t } = useI18n()

const filter = reactive({
  finish: false,
  mine: false,
  filterBy: 'titleWithContents',
  filter: null,
  options: [
    { label: t('d2r.bbs.titleWithContents'), value: 'titleWithContents' },
    { label: t('d2r.bbs.title'), value: 'title' },
    { label: t('d2r.bbs.writer'), value: 'writer' }
  ]
})

const reset = () => {
  filter.finish = false
  filter.mine = false
  filter.filterBy = 'titleWithContents'
  filter.filter = null
}

onBeforeRouteLeave((to, from) => {
  if (to !== from && from.name === 'd2r-read')
    store.clearPost()
})

</script>
<template>
  <div>
    <Read v-if="routeName === 'd2r-read'" :sec="sec" :pid="pid" />
    <Write v-else-if="['d2r-write', 'd2r-modify'].includes(routeName)" :sec="sec" :pid="pid" />
    <List v-else :sec="sec" :filter="filter" @reset="reset" />
    <div class="bg-transparent q-py-lg"></div>
  </div>
</template>