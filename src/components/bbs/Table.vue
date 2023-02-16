<script setup>
import { onMounted, ref, reactive, computed, watch, useSlots } from 'vue'
import { useI18n } from 'vue-i18n'

const props = defineProps({
  columns: {
    type: Array,
    default: () => []
  },
  data: {
    type: Array,
    required: true,
    default: () => []
  },
  pagination: {
    type: Object,
    required: true,
    default: () => { }
  },
  search: {
    type: Boolean,
    default: false
  },
  tableClass: {
    type: String,
    default: null
  },
  grid: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['request'])

const slots = useSlots()
const { t } = useI18n()

const loading = ref(false)
const paginationClone = reactive({ ...props.pagination })

const done = () => {
  loading.value = false
}

const onRequest = (p) => {
  loading.value = true
  emit('request', { paging: p.pagination, done: done })
}

onMounted(() => {
  onRequest({ pagination: paginationClone })
})

defineExpose({
  done, onRequest
})
</script>

<template>
  <div class="contents-on" :class="tableClass">
    <q-table class="no-padding" :columns="columns" :rows="data" row-key="index"
      card-container-class="bg-transparent non-selectable" card-class="bg-transparent non-selectable" :grid="grid"
      :pagination.sync="paginationClone" :loading="loading" no-data-label @request="onRequest" separator="none"
      hide-pagination flat :hide-header="!columns || columns.length === 0">
      <template v-if="slots.top" #top="props">
        <slot name="top" :props="props"></slot>
      </template>
      <template v-if="slots.header" #header="props">
        <slot name="header" :props="props"></slot>
      </template>
      <template v-if="slots['top-right']" #top-right>
        <slot name="top-right"></slot>
      </template>
      <template #body="props">
        <slot name="body" :props="props"></slot>
      </template>
      <template #item="props">
        <slot name="item" :props="props">
        </slot>
      </template>
      <template #no-data>
        <div class="full-width row flex-center q-gutter-sm">
          <span>
            {{ t('table.noData') }}
          </span>
        </div>
      </template>
      <template #loading>
        <div class="non-selectable">
          <q-inner-loading showing size="xs">
            <q-spinner-ball size="xl" color="secondary" />
          </q-inner-loading>
        </div>
      </template>
    </q-table>
    <div>
      <div class="row justify-between items-baseline q-pa-md">
        <div v-if="!search" class="col-12 col-sm">
          <slot name="search">
          </slot>
        </div>
        <div class="col-12 col-sm">
          <slot name="pagination"></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.table-wrap {
  min-height: 556px;
}
</style>