<script setup>
import { useI18n } from 'vue-i18n'
import { isNew } from 'src/common'
import Blank from '/images/blank.png'

const props = defineProps({
  data: {
    type: Array,
    required: true
  },
  more: {
    type: Boolean,
    default: false
  },
  loading: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['more-click', 'item-click'])

const { t } = useI18n()

const parsThumbnail = (thumbnail) => {
  return decodeURIComponent(thumbnail) === 'null' ? Blank : decodeURIComponent(thumbnail)
}
const moreClick = (sec) => {
  emit('more-click', sec)
}
const itemClick = (item) => {
  emit('item-click', item)
}
</script>
<template>
  <div class="q-pt-md">
    <div class="row justify-start q-col-gutter-md">
      <template v-if="loading">
        <div class="col-12 col-md-4" v-for="s in 4" :key="`s_${s}`">
          <q-skeleton type="QToolbar" height="36px" class="full-width" />
          <q-item v-for="i in 3" :key="`i_${i}`">
            <q-item-section avatar>
              <q-skeleton type="QAvatar" square />
            </q-item-section>
            <q-item-section>
              <q-item-label>
                <q-skeleton type="text" />
              </q-item-label>
              <q-item-label caption>
                <q-skeleton type="text" width="65%" />
              </q-item-label>
            </q-item-section>
          </q-item>
        </div>
      </template>
      <div v-for="sec in data" :key="sec.value" class="col-12 col-md-4">
        <div class="summary">
          <q-toolbar dense flat class="row justify-between sub">
            <div class="lt-sm col-4"></div>
            <div class="col-4 text-weight-bold font-kodia text-subtitle1" :class="$q.screen.lt.sm ? 'text-center' : ''">
              {{ sec.title }}
            </div>
            <div class="col text-right">
              <q-icon v-if="more" name="more_horiz" size="xs" class="cursor-pointer" @click="moreClick(sec.value)" />
            </div>
          </q-toolbar>
          <q-list padding :dense="$q.screen.lt.sm" class="text-body">
            <q-item-label v-if="sec.summary.length === 0" class="q-ma-md">
              <div class="row justify-center">
                {{ t('table.noData') }}
              </div>
            </q-item-label>
            <q-item class="no-padding" v-for="summary in sec.summary" :key="summary.pid">
              <q-btn flat unelevated no-caps class="text-body fit" @click="itemClick(summary)">
                <q-item-section top avatar>
                  <q-avatar rounded class="outlined" size="70px">
                    <q-badge v-if="isNew(summary.upd_date, 1000 * 60 * 60 * 24 * 7)" rounded color="red-6" floating
                      class="badge" />
                    <q-img no-spinner no-transition :ratio="1" class="fit" :src="parsThumbnail(summary.thumbnail)">
                      <template #error>
                        <q-img no-spinner no-transition :ratio="2" :src="Blank"
                          class="fit absolute-center bg-transparent" />
                      </template>
                    </q-img>
                  </q-avatar>
                </q-item-section>
                <q-item-section>
                  <q-item-label class="q-py-xs text-left">
                    <div class="text-body1 text-weight-bold ellipsis-2-lines">{{ summary.title }}</div>
                  </q-item-label>
                  <q-item-label class="q-py-xs text-caption ellipsis text-left" style="opacity: .5;">
                    {{ summary.contents }}
                  </q-item-label>
                </q-item-section>
              </q-btn>
            </q-item>
          </q-list>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.summary {
  background-color: rgba(10, 10, 10, 1);
  border-radius: 10px;
  height: 100%;
}

.body--light .summary {
  background-color: rgba(240, 240, 240, 1);
}

.sub {
  min-height: 36px;
  background-color: rgba(230, 230, 230, 1) !important;
  border-radius: 10px 10px 0 0;
}

.body--dark .sub {
  background-color: rgba(24, 24, 24, 1) !important;
}

.outlined {
  box-shadow: 0 0 0 1px rgba(45, 45, 45, 1);
}
</style>