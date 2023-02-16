<script setup>
import { reactive } from 'vue'
import { useI18n } from 'vue-i18n'
import { useQuasar } from 'quasar'

const { t, tm, rt } = useI18n()
const $q = useQuasar()

const pagination = reactive({
  page: 1,
  rowsPerPage: 100
})
const data = reactive(tm('shrinesData'))
const columns = reactive([
  { name: 'image', headerStyle: 'width:150px;' },
  { name: 'name', align: 'left', label: t('d2r.knowledge.shrines.name'), headerStyle: 'width:300px;' },
  { name: 'effect', align: 'left', label: t('d2r.knowledge.shrines.effect') },
  { name: 'regeneration', align: 'center', label: t('d2r.knowledge.shrines.regeneration'), headerStyle: 'width:200px;' },
  { name: 'duration', align: 'center', label: t('d2r.knowledge.shrines.duration'), headerStyle: 'width:200px;' }
])
</script>

<template>
  <div>
    <div class="font-kodia text-center text-h4 text-weight-bold text-primary q-pt-sm q-pb-xl word-keep">
      {{tm('d2r.knowledge.list').find(l => l.value === 'shrines').name}}
    </div>
    <q-table class="no-shadow knowledge-table" table-header-class="text-left" card-container-class="q-col-gutter-md"
      :grid="$q.screen.lt.lg" :columns="columns" :rows="data" row-key="name" :pagination="pagination" dense bordered
      hide-pagination wrap-cells>
      <template #body="props">
        <q-tr class="text-center">
          <q-td>
            <img :src='props.row.image' style="max-width:65px" />
          </q-td>
          <q-td class="text-left text-primary">
            <div class="text-subtitle1">{{props.row.name}}</div>
          </q-td>
          <q-td class="text-left">
            <ul class="text-body2">
              <li v-for="(e, idx) in props.row.effect" :key="idx">{{e}}</li>
            </ul>
          </q-td>
          <q-td>
            <div class="text-body1">
              {{props.row.regeneration}}
            </div>
          </q-td>
          <q-td>
            <div class="text-body1">
              {{props.row.duration}}
            </div>
          </q-td>
        </q-tr>
      </template>
      <template #item="props">
        <q-intersection transition="slide-up" once class="col-12 col-sm-6 col-md-4 knowledge-item shrines-item">
          <q-card class="no-shadow  text-center text-body2 word-keep">
            <q-card-section>
              <img :src='props.row.image' style="max-width:65px" />
            </q-card-section>
            <q-card-section>
              <div class="text-h6 text-primary">{{props.row.name}}</div>
            </q-card-section>
            <q-separator inset />
            <q-card-section>
              <div class="row justify-between items-center">
                <div class="col-3">{{t('d2r.knowledge.shrines.effect')}}</div>
                <ul class="col text-left">
                  <li v-for="(e, idx) in props.row.effect" :key="idx">{{e}}</li>
                </ul>
              </div>
            </q-card-section>
            <q-separator inset />
            <q-card-section>
              <div class="row justify-between items-center">
                <div>{{t('d2r.knowledge.shrines.regeneration')}}</div>
                <div>
                  {{props.row.regeneration}}
                </div>
              </div>
            </q-card-section>
            <q-separator inset />
            <q-card-section>
              <div class="row justify-between items-center">
                <div>{{t('d2r.knowledge.shrines.duration')}}</div>
                <div>
                  {{props.row.duration}}
                </div>
              </div>
            </q-card-section>
          </q-card>
        </q-intersection>
      </template>
    </q-table>
    <p class="q-mt-xl text-right text-grey-6 text-body2" style="font-size: 1em;">{{t('d2r.knowledge.source')}} : <a
        style="text-decoration: none;" target="_blank"
        href="http://classic.battle.net/diablo2exp/shrines.shtml">{{t('d2r.knowledge.arreatSummit')}}</a>
    </p>
  </div>
</template>

<style scoped>
.shrines-item {
  min-height: 340px;
}
</style>