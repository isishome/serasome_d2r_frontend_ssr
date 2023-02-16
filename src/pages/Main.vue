<script setup>
import { reactive, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router'
import { api } from 'boot/axios'
import Summary from 'components/Summary.vue'

const { t } = useI18n()
const router = useRouter()

const loading = reactive({
  latest: true,
  top: true,
  storage: true
})

const latest = ref([])
const top = ref([])

const getLatest = () => {
  api
    .get('/d2r/board/latest')
    .then(function (response) {
      latest.value = response.data
    })
    .catch(function () { })
    .then(function () {
      loading.latest = false
    })
}

const getTop = () => {
  api
    .get('/d2r/board/top')
    .then(function (response) {
      top.value = response.data
    })
    .catch(function () { })
    .then(function () {
      loading.top = false
    })
}

const more = (sec) => {
  router.push({ name: 'd2r-bbs', params: { 'sec': sec } })
}

const boardItem = (item) => {
  router.push({ name: 'd2r-read', params: { 'sec': item.sec, 'pid': item.pid } })
}

getLatest()
getTop()
</script>

<template>
  <div class="q-pa-sm">
    <q-toolbar class="title no-margin">
      <q-toolbar-title>
        <div class="title-text font-kodia">
          {{ t('d2r.main.recentPosts') }}
        </div>
      </q-toolbar-title>
    </q-toolbar>
    <Summary :data="latest" more @more-click="more" @item-click="boardItem" :loading="loading.latest" />
    <q-toolbar class="title">
      <q-toolbar-title>
        <div class="title-text font-kodia">
          {{ t('d2r.main.topPosts') }}
        </div>
      </q-toolbar-title>
    </q-toolbar>
    <Summary :data="top" @item-click="boardItem" :loading="loading.top" />
    <div style="padding-bottom: 6vh;"></div>
  </div>
</template>

<style scoped>
.title {
  margin-top: 50px;
  padding: 4px 10px;
  min-height: 40px;
  color: #b89d5c;
  background-color: rgba(80, 0, 0, 0.8);
  box-shadow: 1px 1px 0 0 rgba(200, 0, 0, 0.5) inset;
}

.body--light .title {
  color: #ffffff;
  background-color: rgba(50, 50, 50, 0.8);
  box-shadow: 1px 1px 0 0 rgba(200, 200, 200, 0.5) inset;
}
</style>