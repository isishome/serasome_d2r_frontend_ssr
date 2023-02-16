<script setup>
import { reactive, ref, computed } from 'vue'
import { useQuasar } from 'quasar'
import { useI18n } from 'vue-i18n'

const $q = useQuasar()
const { t, tm } = useI18n()

const screen = computed(() => $q.screen)
const pagination = reactive({
  page: 1,
  rowsPerPage: 10000
})
const filter = ref('')
const columns = reactive([
  { name: 'image', align: 'center', style: 'width:20%' },
  { name: 'name', align: 'center' },
  { name: 'clvl' },
  { name: 'desc' },
  { name: 'attribute' },
])
const sunder = reactive(tm('sunder'))
const data = reactive(tm('sunderData'))
</script>

<template>
  <div>
    <p v-for="(d, idx) in sunder.desc" :key="idx">
      {{ d }}</p>
    <q-table class="no-shadow knowledge-table" card-container-class="q-col-gutter-md justify-start" :grid="screen.lt.lg"
      :rows="data" :columns="columns" row-key="id" :pagination="pagination" dense bordered hide-header hide-pagination
      wrap-cells>
      <template #body="props">
        <q-tr no-hover :props="props">
          <q-td key="image" :props="props">
            <img :src="props.row.image" />
          </q-td>
          <q-td key="name" colspan="4" :props="props">
            <div class="column q-gutter-y-sm items-center">
              <div class="text-primary text-subtitle1 text-weight-bold">{{ props.row.name }}</div>
              <div>{{ sunder.required }} : {{ props.row.clvl }}</div>
              <div class="text-indigo-5">{{ props.row.desc }}</div>
              <div class="text-indigo-5">{{ props.row.attribute }}</div>
            </div>
          </q-td>
        </q-tr>
      </template>
      <template #item="props">
        <q-intersection transition="slide-up" once class="col-md-6 col-12 knowledge-item sunder-item">
          <q-card class="no-shadow text-body2 word-keep">
            <q-card-section class="text-center">
              <img :src="props.row.image" />
            </q-card-section>
            <q-separator />
            <q-card-section>
              <div class="column q-gutter-y-sm items-center">
                <div class="text-primary text-subtitle1 text-weight-bold">{{ props.row.name }}</div>
                <div>{{ sunder.required }} : {{ props.row.clvl }}</div>
                <div class="text-indigo-5">{{ props.row.desc }}</div>
                <div class="text-indigo-5">{{ props.row.attribute }}</div>
              </div>
            </q-card-section>
          </q-card>
        </q-intersection>
      </template>
    </q-table>
    <p class="q-mt-xl text-right text-grey-6 text-body2">
      {{ t('d2r.knowledge.source') }} :
      <a style="text-decoration: none;" class="text-green-4" target="_blank"
        href="https://namu.wiki/w/%EB%94%94%EC%95%84%EB%B8%94%EB%A1%9C%202/%EA%B3%A0%EC%9C%A0%20%EC%95%84%EC%9D%B4%ED%85%9C#s-5.2.4">{{
          t('d2r.knowledge.namuWiki')
        }}</a>
      & <a style="text-decoration: none;" class="text-red-6" target="_blank"
        href="https://www.purediablo.com/diablo-2/charms#Sunder_Charms_Details">{{
  t('d2r.knowledge.pureDiablo')
        }}</a>
    </p>
  </div>
</template>

<style scoped>
.sunder-item {
  min-height: 300px;
}
</style>