<script>
import { useStore } from 'stores/store'

export default {
  preFetch({ store, currentRoute }) {
    if (currentRoute.name === 'd2r-read') {
      const s = useStore(store)
      return s.setPost(currentRoute.params.sec, currentRoute.params.pid)
    }
    return
  }
}
</script>

<script setup>
import { reactive, computed } from 'vue'
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'
import List from 'components/bbs/List.vue'

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
</script>
<template>
  <div>
    <router-view v-if="['d2r-read', 'd2r-write', 'd2r-modify'].includes(routeName)" />
    <List v-else :sec="sec" :filter="filter" @reset="reset" />
    <div class="bg-transparent q-py-lg"></div>
  </div>
</template>