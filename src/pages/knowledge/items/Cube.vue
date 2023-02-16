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
  { name: 'title', align: 'center', style: 'width:20%' },
  { name: 'desc', align: 'left', style: 'width:50%' },
  { name: 'images', align: 'center' },
  { name: 'recipe', align: 'center' },
])
const data = reactive(tm('cubeData'))
const classifies = reactive(tm('cubeClassifies'))
const classify = ref('socket')
const filtering = computed(() => {
  let result = data
  if (filter.value !== '') {
    const terms = filter.value.toLowerCase().split(' ')
    result = result.filter(c => new RegExp(terms.join('|'), 'gi').test(c.title) || new RegExp(terms.join('|'), 'gi').test(c.desc.join('|')) || (c.recipe && new RegExp(terms.join('|'), 'gi').test(c.recipe.join('|'))))
  }

  if (classify.value !== 'all')
    result = result.filter(r => r.classify === classify.value)

  return result
})
</script>

<template>
  <div>
    <div class="row justify-around items-baseline q-col-gutter-sm q-pa-sm">
      <div class="gt-sm col-9 q-gutter-x-md">
        <q-radio dense :size="screen.lt.md ? 'xs' : 'sm'" v-for="c in classifies" :key="c.value" :val="c.value"
          v-model="classify" :label="c.label" color="primary" />
      </div>
      <div class="lt-md col-12 col-sm">
        <q-select color="primary" v-model="classify" :options="classifies" dropdown-icon="keyboard_arrow_down"
          :label="t('d2r.knowledge.items.recipeType')" behavior="menu" dense outlined emit-value map-options
          no-error-icon options-dense />
      </div>
      <div class="col">
        <q-input dense outlined debounce="400" :label="t('btn.search')" color="primary" v-model="filter">
          <template v-slot:append>
            <q-icon name="search" color="primary" />
          </template>
        </q-input>
      </div>
    </div>
    <q-table class="no-shadow knowledge-table" card-container-class="q-col-gutter-md justify-start" :grid="screen.lt.lg"
      :rows="filtering" :columns="columns" row-key="title" :pagination="pagination" dense bordered hide-header
      hide-pagination wrap-cells>
      <template v-slot:no-data>
        <div class="row justify-center full-width text-body2">{{ t('d2r.knowledge.items.noData') }}</div>
      </template>
      <template #body="props">
        <q-tr no-hover :props="props">
          <q-td key="title" :props="props" :rowspan="props.row.recipe ? 2 : 1"
            :style="filtering.length - 1 === props.rowIndex && props.row.recipe ? 'border:none' : ''">
            <div class="text-h6 word-keep column">
              <div>{{ props.row.title }}</div>
              <div>
                <q-badge color="yellow" text-color="black" v-if="props.row.version">{{
                  'v'.concat(' ',
                    props.row.version)
                }}
                </q-badge>
              </div>
            </div>
          </q-td>
          <q-td key="desc" :props="props" :rowspan="props.row.recipe ? 2 : 1"
            :style="filtering.length - 1 === props.rowIndex && props.row.recipe ? 'border:none' : ''">
            <ul class="column text-body1">
              <li v-for="(d, idx) in props.row.desc" :key="idx" class="col word-keep" v-html="d">
              </li>
            </ul>
          </q-td>
          <q-td key="images" :props="props" :style="props.row.recipe ? 'border: none;' : ''">
            <div class="row justify-center items-center q-gutter-md">
              <img v-for="(img, idx) in props.row.images" :key="`img_${idx}`" :src="`/images/knowledge/items/${img}`"
                :style="`max-width:${props.row.width ? props.row.width : '100px'}`" />
            </div>
          </q-td>
        </q-tr>
        <q-tr v-if="props.row.recipe" no-hover :props="props">
          <q-td key="recipe" :props="props">
            <div v-if="props.row.desc" class="row justify-center">
              <ul class="text-body2">
                <li v-for="(r, idx) in props.row.recipe" :key="idx" class="word-keep" v-html="r">
                </li>
              </ul>
            </div>
          </q-td>
        </q-tr>
      </template>
      <template #item="props">
        <q-intersection transition="slide-up" once class="col-md-6 col-12 knowledge-item cube-item">
          <q-card class="no-shadow text-body2 word-keep">
            <q-card-section>
              <div class="text-h6 word-keep text-center text-primary">{{ props.row.title }}</div>
            </q-card-section>
            <q-separator />
            <q-card-section>
              <div class="row justify-center">
                <ul>
                  <li v-for="(d, idx) in props.row.desc" :key="idx" class="word-keep" v-html="d">
                  </li>
                </ul>
              </div>
            </q-card-section>
            <q-card-section>
              <div class="row justify-center items-center q-gutter-x-md">
                <img v-for="(img, idx) in props.row.images" :key="`img_${idx}`" :src="`/images/knowledge/items/${img}`"
                  :style="`max-width:${props.row.width ? props.row.width : '100px'}`" />
              </div>
              <div v-if="props.row.recipe" class="text-center q-py-sm">
                <ul>
                  <li v-for="(r, idx) in props.row.recipe" :key="idx" class="word-keep" v-html="r">
                  </li>
                </ul>
              </div>
            </q-card-section>
          </q-card>
        </q-intersection>
      </template>
    </q-table>
    <p class="q-mt-xl text-right text-grey-6 text-body2">
      {{ t('d2r.knowledge.source') }} :
      <a style="text-decoration: none;" class="text-green-4" target="_blank"
        href="https://namu.wiki/w/%ED%98%B8%EB%9D%BC%EB%93%9C%EB%A6%BC%EC%9D%98%20%ED%95%A8?from=%ED%98%B8%EB%9D%BC%EB%93%9C%EB%A6%AD%20%ED%81%90%EB%B8%8C">{{
          t('d2r.knowledge.namuWiki')
        }}</a>
      & <a style="text-decoration: none;" class="text-red-6" target="_blank"
        href="https://www.purediablo.com/diablo-2/horadric-cube-recipes/">{{ t('d2r.knowledge.pureDiablo') }}</a>
    </p>
  </div>
</template>

<style scoped>
.cube-item {
  min-height: 300px;
}
</style>