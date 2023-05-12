<script setup>
import { ref, onMounted } from 'vue'
import { useQuasar } from 'quasar'

const $q = useQuasar()
const darkName = import.meta.env.VITE_APP_D2R_DARK_NAME
const isDark = $q.cookies.has(darkName) ? $q.cookies.get(darkName).toString() === 'true' : true
const view = ref(false)
$q.dark.set(isDark)

onMounted(() => {
  view.value = true
})
</script>
<template>
  <router-view v-if="view" />
</template>