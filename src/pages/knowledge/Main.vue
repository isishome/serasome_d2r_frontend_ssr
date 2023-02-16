<script setup>
import { useRoute, useRouter } from 'vue-router'
import { useQuasar } from 'quasar'

// module variables
const route = useRoute()
const router = useRouter()
const $q = useQuasar()

if (!route.params.section)
  router.replace({ name: 'd2r-knowledge-section', params: { section: 'classes' } })
</script>

<template>
  <div class="contents-wrap knowledge">
    <div :class="$q.screen.gt.sm ? 'contents-on q-pa-md' : ''">
      <router-view></router-view>
    </div>
  </div>
</template>

<style scoped>

</style>