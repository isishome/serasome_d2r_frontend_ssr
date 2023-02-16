<script setup>
import { reactive } from 'vue'
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'

const route = useRoute()
const { t, tm } = useI18n()

const part = route.params.part ? route.params.part.toLowerCase() : 'act1'
const pagination = reactive({
  page: 1,
  rowsPerPage: 100
})
const data = reactive(tm('npcsData')[part])
const play = (name, event) => {
  if (name) {
    var audio = new Audio(`/wavs/npcs/${name}.wav`)
    audio.play()
  }
}
</script>
  
<template>
  <div>
    <q-table class="no-shadow knowledge-table" card-container-class="q-col-gutter-md" :grid="$q.screen.lt.lg"
      :rows="data" :pagination="pagination" dense bordered hide-header hide-pagination wrap-cells>
      <template #body="props">
        <q-tr class="text-center">
          <q-td>
            <img :src='props.row.image' style="max-width:200px" class="q-mx-md" />
          </q-td>
          <q-td class="text-left">
            <div class="column q-gutter-y-md">
              <div class="text-h6 text-primary">
                {{ props.row.name }}
              </div>
              <div class="text-body1 word-keep">
                {{ props.row.desc }}
              </div>
              <div class="text-body2 column q-gutter-y-sm">
                <div v-for="(work, index) in props.row.work" :key="index">
                  {{ work }}
                </div>
              </div>
            </div>
          </q-td>
          <q-td>
            <div class="q-px-md">
              <q-btn flat dense round color="secondary" icon="headset" @click.stop="play(props.row.voice, $event)" />
            </div>
          </q-td>
        </q-tr>
      </template>
      <template #item="props">
        <q-intersection transition="slide-up" once class="col-12 col-sm-6 col-md-4 knowledge-item npcs-item">
          <q-card class="no-shadow text-center text-body2 word-keep">
            <q-card-section>
              <img :src='props.row.image' style="max-width:200px" />
              <q-btn round dense flat class="absolute-top-right q-ma-sm" icon="headset" color="secondary"
                @click="play(props.row.voice, $event)" />
            </q-card-section>
            <q-card-section class="no-padding">
              <div class="text-h6 text-primary">
                <span> {{ props.row.name }}</span>
              </div>
            </q-card-section>
            <q-separator />
            <q-card-section>
              <div class="text-body1">
                {{ props.row.desc }}
              </div>
            </q-card-section>
            <q-separator inset />
            <q-card-section>
              <div class="text-body2 text-left">
                <div v-for="(work, index) in props.row.work" :key="index">
                  {{ work }}
                </div>
              </div>
            </q-card-section>
          </q-card>
        </q-intersection>
      </template>
    </q-table>
    <p class="q-mt-xl text-right text-grey-6 text-body2">{{ t('d2r.knowledge.source') }} : <a
        style="text-decoration: none;" target="_blank"
        :href="`http://classic.battle.net/diablo2exp/npcs/${part}.shtml`">{{ t('d2r.knowledge.arreatSummit') }}</a></p>
  </div>
</template>
  
<style scoped>
.knowledge-table:deep(img) {
  border-radius: 10px;
}

.npcs-item {
  min-height: 340px;
}
</style>