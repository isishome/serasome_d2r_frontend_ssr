<script setup>
import { onMounted } from 'vue'
import { useQuasar } from 'quasar'

const $q = useQuasar()
const darkName = import.meta.env.VITE_APP_D2R_DARK_NAME
const isDark = $q.cookies.has(darkName) ? $q.cookies.get(darkName).toString() === 'true' : true

onMounted(() => {
  $q.dark.set(isDark)
})
</script>
<template><router-view /></template>