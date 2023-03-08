<script setup>
import { reactive, computed, ref, shallowReadonly, watch, inject } from 'vue'
import { useQuasar } from 'quasar'
import { useRoute, useRouter } from 'vue-router'
import { useStore } from 'stores/store'
import { useI18n } from 'vue-i18n'
import { isNew, isView, parsDateTime } from 'src/common'
import Blank from '/images/blank.png'
import Table from 'components/bbs/Table.vue'

const props = defineProps({
  sec: {
    type: String,
    required: true
  },
  filter: {
    type: Object,
    default: () => { }
  },
  search: {
    type: Boolean,
    default: false
  },
  mode: {
    type: String,
    default: 'default'
  }
})

const emit = defineEmits(['reset'])

// module variables
const axios = inject('axios')
const route = useRoute()
const router = useRouter()
const store = useStore()
const { t } = useI18n()
const $q = useQuasar()

// common variables
const screen = computed(() => $q.screen)
const loading = ref(false)
const signStatus = computed(() => store.signStatus)
const authority = computed(() => store.getAuthority)
const searchObj = ref(null)

// about board
const _filter = reactive(JSON.parse(JSON.stringify(props.filter)))
const table = ref(null)
const pagination = reactive({
  page: Number(route.query.page) || 1,
  rowsPerPage: 20,
  rowsNumber: 0
})
const columns = shallowReadonly({
  'default':
    [
      { name: 'classify', align: 'center', label: t('d2r.bbs.classify'), headerStyle: 'width:100px;' },
      { name: 'thumbnail', align: 'center', headerStyle: 'width:80px;' },
      { name: 'title', align: 'center', label: t('d2r.bbs.title') },
      { name: 'writer', align: 'center', label: t('d2r.bbs.writer'), headerStyle: 'width:180px;' },
      { name: 'comments', align: 'center', label: t('d2r.bbs.comments'), headerStyle: 'width:80px;' },
      { name: 'regDate', align: 'center', label: t('d2r.bbs.regDate'), headerStyle: 'width:110px;' },
      { name: 'view', align: 'center', label: t('d2r.bbs.view'), headerStyle: 'width:100px;' }
    ]
})
const data = reactive([])
const classifyName = computed(() => store.getClassifyName)
const secInfo = computed(() => store.getSecInfo(props.sec))
const filterText = ref(props.filter.filter)

const go = (page) => {
  router.push({ name: 'd2r-bbs', params: { sec: props.sec }, query: { page: page } })
}

const request = (page) => {
  if (table.value) {
    data.splice(0, data.length)
    pagination.page = page || 1
    table.value.onRequest({ pagination: pagination })
  }
}

const parsSearch = (filterBy, val) => {
  if (filterBy.includes(props.filter.filterBy) && filterText.value !== null && typeof (val) === 'string')
    val = val.replace(new RegExp(`${filterText.value} `, 'gi'), ` < span class='search-block' > ${filterText.value}</span > `)

  return val
}

const getList = ({ paging, done }) => {
  loading.value = true
  filterText.value = props.filter.filter
  const requestSec = props.sec
  let tempData = []
  axios
    .get('/d2r/board/list', {
      params: {
        mode: props.search ? 'search' : 'default',
        sec: props.sec,
        page: pagination.page,
        limit: pagination.rowsPerPage,
        finish: props.filter.finish,
        mine: props.filter.mine,
        filterBy: props.filter.filterBy,
        filter: encodeURIComponent(props.filter.filter),
        t: Date.now()
      }
    }).then(function (response) {
      if (requestSec === props.sec) {
        window.scrollTo(0, 0)
        tempData = response.data.list
        pagination.rowsNumber = response.data.rowsNumber
      }
    })
    .catch(function () { })
    .then(function () {
      data.push(...tempData)
      done()
      loading.value = false
      pagination.page = paging.page
    })
}

const parsThumbnail = (thumbnail) => {
  return decodeURIComponent(thumbnail) === 'null' ? Blank : decodeURIComponent(thumbnail)
}

const rowClick = (pid) => {
  router.push({ name: 'd2r-read', params: { sec: props.sec, pid: pid }, query: { page: pagination.page } })
}

watch(() => props.filter.finish, (val, old) => {
  if (val !== old)
    request()
})

watch(() => props.filter.mine, (val, old) => {
  if (val !== old)
    request()
})

watch(() => props.sec, (val) => {
  emit('reset')
  request()
})

watch(() => route.query.page, (val, old) => {
  if (val !== old && table.value) {
    request(Number(val))
  }
})
</script>

<template>
  <div class="contents-wrap" v-show="!(search && data.length === 0)">
    <div class="row justify-between items-center q-gutter-x-xs" :class="search ? '' : 'lt-md'">
      <div class="row items-center">
        <div class="q-ml-xs q-mb-sm text-uppercase">{{ secInfo.label }}</div>
      </div>
    </div>
    <Table ref="table" :pagination="pagination" :columns="columns[sec] || columns.default" :data="data" :search="search"
      :grid="$q.screen.lt.md" @request="getList">
      <template v-if="!search && (sec === 'trade' || signStatus)" #top-right>
        <div class="row justify-end q-gutter-x-md" :class="[$q.screen.gt.sm ? '' : 'no-margin']">
          <div v-if="sec === 'trade'">
            <q-checkbox dense v-model="_filter.finish" val="d2r" class="text-caption" :label="t('d2r.bbs.finish')"
              size="xs" color="d2r" />
          </div>
          <div v-if="signStatus">
            <q-checkbox dense v-model="_filter.mine" val="d2r" class="text-caption" :label="t('d2r.bbs.mine')" size="xs"
              color="d2r" />
          </div>
        </div>
      </template>
      <template #search>
        <q-form ref="searchObj" class="q-pt-md row" :class="screen.gt.xs ? 'justify-start' : 'justify-end'"
          @submit="request(1)">
          <div class="row justify-start items-start q-col-gutter-sm">
            <div class="col" style="max-width:170px;">
              <q-select :disable="loading" color="primary" v-model="_filter.filterBy" :options="filter.options"
                :label="t('d2r.bbs.filterBy')" behavior="menu" dense emit-value no-error-icon hide-bottom-space
                map-options outlined options-cover options-dense />
            </div>
            <div class="col" style="max-width:170px;">
              <q-input :disable="loading" v-model="_filter.filter" :label="t('d2r.bbs.filter')" outlined color="primary"
                :rules="[val => /^(\s*|[ㄱ-ㅎㅏ-ㅣ가-힣a-zA-Z0-9\s]{2,20})$/.test(val) || t('search.message.invalidWord')]"
                dense no-error-icon clearable @keyup.enter="searchObj.submit()" />
            </div>
          </div>
        </q-form>
      </template>
      <template #body="{ props }">
        <q-tr class="cursor-pointer text-center" @click="rowClick(props.row.pid)"
          :class="[props.row.status === 'FIN' ? 'finish' : '']">
          <q-td>
            <q-chip square color="transparent" :class="['classify', props.row.classify]">
              {{ classifyName(sec, props.row.classify) }}
              <q-icon v-if="props.row.status === 'FIN'" name="check_circle_outline" class="absolute-center finish-icon"
                size="xl" />
            </q-chip>
          </q-td>
          <q-td>
            <q-img no-spinner no-transition class="rounded-borders" :ratio="20 / 13" style="width:80px"
              :src="parsThumbnail(props.row.thumbnail)">
              <template #error>
                <q-img no-spinner no-transition :ratio="2 / 1" src="/images/blank.png" class="absolute-center" />
              </template>
            </q-img>
          </q-td>
          <q-td key="title" class="table-row">
            <div :class="['bbs-title', `${props.row.classify}-title`]"
              v-html="parsSearch(['title', 'titleWithContents'], props.row.title)"></div>
          </q-td>
          <q-td>
            <div class="row items-center q-gutter-x-xs">
              <q-avatar rounded class="q-mr-xs avatar" size="30px">
                <q-img v-if="props.row.avatar" :src="props.row.avatar" :ratio="1">
                  <template #error>
                    <div class="bg-d2r absolute-center">
                      {{ props.row.writer.toUpperCase().substring(0, 1) }}
                    </div>
                  </template>
                </q-img>
                <div v-else class="text-uppercase">{{ props.row.writer.substring(0, 1) }}</div>
              </q-avatar>
              <div v-html="parsSearch(['writer'], props.row.writer)"></div>
            </div>
          </q-td>
          <q-td>
            {{ props.row.cmt || 0 }}
          </q-td>
          <q-td>
            <div class="row no-wrap items-center q-gutter-x-xs">
              <q-avatar v-if="isNew(props.row.upd_date)" color="red-14" size="4px" />
              <div>
                {{ parsDateTime(props.row.upd_date) }}
              </div>
            </div>
          </q-td>
          <q-td>
            {{ isView(props.row.seq) }}
          </q-td>
        </q-tr>
      </template>
      <template #item="{ props }">
        <div class="q-pa-sm col-xs-6 col-sm-4 col-md-3">
          <q-card @click="rowClick(props.row.pid)" class="d2r-card-list"
            :class="props.row.status === 'FIN' ? 'finish' : ''">
            <q-card-section class="no-padding absolute-top-left" style="z-index:1;left:-6px;top:-6px;opacity: .8;">
              <q-chip square size="xs" style="padding:10px 6px"
                :class="['row justify-center items-center text-caption shadow-1 text-weight-bold classify-chip', props.row.classify]">
                <div>
                  {{ classifyName(sec, props.row.classify).substring(0, 4) }}
                </div>
                <q-icon v-if="props.row.status === 'FIN'" name="check_circle_outline"
                  class="absolute-center finish-icon" size="md" />
              </q-chip>
            </q-card-section>
            <q-card-section class="no-padding absolute-top-right" style="z-index:1;top:-2px;right:1px;opacity: .8;">
              <q-chip square icon="visibility" size="xs" color="grey-9" text-color="white"
                class="no-margin row justify-center items-center text-caption" :label="isView(props.row.seq)" />
            </q-card-section>
            <q-img no-spinner no-transition :src="parsThumbnail(props.row.thumbnail)" ratio="1"
              :style="$q.screen.lt.sm ? 'height:80px' : 'height:100px'">
              <template #error>
                <q-img no-spinner no-transition :ratio="2 / 1" src="/images/blank.png" class="absolute-center" />
              </template>
            </q-img>
            <q-card-section :class="$q.screen.lt.sm ? 'q-py-xs q-px-sm' : 'q-pa-sm'">
              <div class="row justify-start no-wrap q-gutter-x-xs">
                <div class="ellipsis-2-lines text-caption" style="min-height:40px"
                  :class="`${props.row.classify}-title`"
                  v-html="parsSearch(['title', 'titleWithContents'], props.row.title)"></div>
                <div class="text-caption text-amber-8 text-weight-bold" v-if="props.row.cmt">
                  [{{ isView(props.row.cmt) }}]
                </div>
              </div>
            </q-card-section>
            <q-card-section :class="$q.screen.lt.sm ? 'q-py-xs q-px-sm' : 'q-pa-sm'">
              <div class="text-caption row justify-end no-wrap items-center">
                <q-avatar rounded class="q-mr-xs avatar text-uppercase" size="16px">
                  <q-img no-spinner no-transition v-if="props.row.avatar" :src="props.row.avatar" width="100%"
                    :ratio="1">
                    <template #error>
                      <div class="bg-d2r absolute-center">
                        {{ props.row.writer.substring(0, 1) }}
                      </div>
                    </template>
                  </q-img>
                  <template v-else>{{ props.row.writer.substring(0, 1) }}</template>
                </q-avatar>
                <div class="ellipsis" v-html="parsSearch(['writer'], props.row.writer)"></div>
              </div>
              <div class="text-caption row justify-end no-wrap items-center q-gutter-x-xs">
                <q-avatar v-if="isNew(props.row.upd_date)" color="red-14" size="4px" />
                <div>
                  {{ parsDateTime(props.row.upd_date) }}
                </div>
              </div>
            </q-card-section>
          </q-card>
        </div>
      </template>
      <template #pagination>
        <q-pagination v-if="data.length > 0" class="pagination row justify-end"
          :class="screen.gt.xs ? 'justify-end' : 'justify-center'" :disable="loading" v-model="pagination.page"
          @update:model-value="go" :max="pagination.rowsNumber" :max-pages="5" :ellipses="false"
          :boundary-numbers="false" direction-links icon-prev="keyboard_arrow_left" icon-next="keyboard_arrow_right"
          :ripple="false" dense flat />
      </template>
    </Table>
    <q-page-sticky v-if="!search && authority(sec, 'write')" position="bottom-right" :offset="[0, 0]"
      style="z-index: 4;">
      <q-btn aria-label="Add Post" push color="primary"
        :style="$q.screen.gt.lg ? 'right:22vw;bottom:20px' : $q.screen.gt.md ? 'right:13vw;bottom:20px' : 'right:10px;bottom:30px'"
        round size="md" icon="add" :to="`${sec}/write`" :disable="loading" />
    </q-page-sticky>
  </div>
</template>

<style scoped>
.contents-on:deep(thead) {
  background-color: var(--q-light-half);
}

.contents-on:deep(thead th) {
  font-size: 1.1em !important;
  font-weight: 700 !important;
}

.body--dark .contents-on:deep(thead) {
  background-color: rgb(0, 0, 0);
}

.d2r-card-list {
  box-shadow: 0 0 0 1px rgba(230, 230, 230, 1);
}

.body--dark .d2r-card-list {
  box-shadow: 0 0 0 1px rgba(60, 60, 60, 1) !important;
}

.table-row {
  text-align: left;
  word-break: break-all;
  white-space: inherit;
  text-overflow: ellipsis;
}

.classify {
  opacity: .8;
}

.bbs-title {
  line-height: 1.8;
  letter-spacing: -0.002em;
}

.notice {
  background-color: rgb(130, 0, 0) !important;
  color: var(--q-light-page) !important;
}

.notice-title {
  font-weight: bold;
}

.sell {
  color: rgb(2, 90, 206) !important;
}

.buy {
  color: rgb(0, 134, 63) !important;
}

.give {
  color: rgb(255, 94, 0) !important;
}

.finish:deep(td:nth-child(-n+3)) {
  filter: grayscale(100%);
  opacity: .8;
}

.finish> :deep(div:nth-child(-n+4)) {
  filter: grayscale(100%);
  opacity: .8;
}

.finish-icon {
  opacity: .3;
  z-index: 1;
}

.pagination:deep(.q-btn .q-focus-helper) {
  display: none;
}
</style>