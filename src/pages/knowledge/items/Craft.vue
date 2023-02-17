<script setup>
import { reactive, ref, computed } from 'vue'
import { useQuasar } from 'quasar'
import { useI18n } from 'vue-i18n'

const $q = useQuasar()
const { t, tm } = useI18n()

const screen = computed(() => $q.screen)

const visible = ref(false)
const pagination = reactive({
  page: 1,
  rowsPerPage: 10000
})
const filter = ref('')
const columns = reactive([
  { name: 'material', label: t('d2r.knowledge.items.thCraft'), align: 'center', style: 'width:10%' },
  { name: 'recipe', label: t('d2r.knowledge.items.thRecipe'), align: 'center' },
  { name: 'effects', label: t('d2r.knowledge.items.thFixedStats'), align: 'center' }
])
const materials = computed(() => tm('d2r.knowledge.items.materials'))
const runes = computed(() => tm('d2r.knowledge.items.runeData'))
const notice = computed(() => tm('d2r.knowledge.items.craftNotice'))
const data = reactive(tm('crafted'))
const craftType = ref('caster')
const craftTypes = reactive([])

const filtering = computed(() => {
  const terms = filter.value.toLowerCase().split(' ')
  const regEx = new RegExp(terms.join('|'), 'gi')
  data.forEach((sec) => {
    if (filter.value !== '') {
      sec.filterList = sec.list.filter(l => regEx.test(materials.value.find(m => m.no === l.material).name) || regEx.test(l.recipe.equipment.name.map(n => n.split(' ').join('|')).join('|')) || regEx.test(l.effects.map(n => n.split(' ').join('|')).join('|')))
    }
    else
      sec.filterList = sec.list
  })

  return data
})

data.push(...tm('crafted'))
craftTypes.push({ value: 'all', label: t('d2r.knowledge.items.all'), color: 'title' }, ...data.map(c => ({ value: c.id, label: c.name, color: c.color })))
</script>

<template>
  <div>
    <div class="row justify-end items-center">
      <q-toggle dense color="primary" v-model="visible" icon="help_outline" class="q-mb-sm" />
    </div>
    <q-slide-transition>
      <div v-show="visible" class="row justify-start items-center word-keep">
        <template v-for="(n, idx) in notice" :key="`t_${idx}`">
          <div :class="[$q.dark.isActive ? 'text-orange' : '', screen.lt.md ? 'text-caption' : 'text-subtitle1']">
            {{ n.desc }}
          </div>
          <ul
            :class="[$q.dark.isActive ? 'text-amber-4' : 'text-grey-8', screen.lt.md ? 'text-caption' : 'text-body2']">
            <li v-for="(d, idx2) in n.detail" :key="`d_${idx}_${idx2}`">
              {{ d }}
            </li>
          </ul>
        </template>
      </div>
    </q-slide-transition>
    <div class="row justify-around items-baseline q-col-gutter-sm q-pa-sm">
      <div class="gt-sm col-9 q-gutter-x-md">
        <q-radio v-for="ct in craftTypes" :key="ct.value" :val="ct.value" v-model="craftType" :label="ct.label"
          :color="ct.color" />
      </div>
      <div class="lt-md col-12 col-sm">
        <q-select color="primary" popup-content-style="border:solid 2px #b89c5b" v-model="craftType"
          :options="craftTypes" dropdown-icon="keyboard_arrow_down" :label="t('d2r.knowledge.items.craftType')"
          behavior="menu" dense outlined emit-value map-options no-error-icon options-dense />
      </div>
      <div class="col">
        <q-input dense outlined debounce="400" :label="t('btn.search')" color="primary" v-model="filter">
          <template v-slot:append>
            <q-icon name="search" color="primary" />
          </template>
        </q-input>
      </div>
    </div>
    <template v-for="c in filtering" :key="c.id">
      <q-table v-if="c.id === craftType || craftType === 'all'" class="no-shadow knowledge-table q-mb-md"
        card-container-class="q-col-gutter-md justify-start" :grid="screen.lt.lg" :rows="c.filterList"
        :columns="columns" row-key="material" :pagination="pagination" dense bordered :hide-header="screen.lt.lg"
        hide-pagination wrap-cells>
        <template v-slot:no-data>
          <div class="row justify-center full-width text-body2">{{ t('d2r.knowledge.items.noData') }}</div>
        </template>
        <template #header>
          <q-tr class="text-uppercase">
            <q-th colspan="3">
              <q-chip :label="c.name" size="lg" :color="c.color" square dense />
            </q-th>
          </q-tr>
        </template>
        <template #body="props">
          <q-tr :props="props">
            <q-td key="material" :props="props">
              <div class="column items-center">
                <div class="col-12 text-h6 text-primary text-center word-keep">
                  {{ materials.find(m => m.no === props.row.material).name }}
                </div>
                <q-badge color="red" v-if="props.row.hot === true">
                  {{ t('d2r.knowledge.items.hot') }}
                </q-badge>
              </div>
            </q-td>
            <q-td key="recipe" :props="props">
              <div class="row justify-between items-baseline text-body2">
                <div class="col column items-center">
                  <div class="col">
                    <img :src="`/images/knowledge/items/${props.row.recipe.equipment.img}`" style="max-width:60px;" />
                  </div>
                  <div class="col column items-center">
                    <div class="col">
                      <q-chip flat dense square color="indigo-7" text-color="white">
                        {{ props.row.recipe.equipment.type }}
                      </q-chip>
                    </div>
                    <div class="col" v-for="(n, idx) in props.row.recipe.equipment.name" :key="idx">
                      {{ n }}</div>
                  </div>
                </div>
                <q-icon size="sm" color="grey-8" name="add" />
                <template v-for="(cr, idx) in c.common.recipe" :key="idx">
                  <q-icon v-if="idx !== 0" size="sm" color="grey-8" name="add" />
                  <div class="col column items-center q-col-gutter-y-sm">
                    <img :src="`/images/knowledge/items/${cr.img}`" style="max-width:40px;" />
                    <div class="col" v-html="cr.name"></div>
                  </div>
                </template>
                <q-icon size="sm" color="grey-8" name="add" />
                <div class="col column items-center q-col-gutter-y-sm">
                  <img
                    :src="`/images/knowledge/items/runes/${runes.find(r => r.no === props.row.recipe.rune).file}.png`"
                    style="max-width:40px;" />
                  <div class="col">{{ runes.find(r => r.no === props.row.recipe.rune).name }}
                  </div>
                </div>
              </div>
            </q-td>
            <q-td key="effects" :props="props">
              <ul class="word-keep text-indigo-5 text-body2">
                <li v-for="(ce, idx) in c.common.effects" :key="`ce_${idx}`">
                  {{ ce }}
                </li>
                <li class="text-orange-8" v-for="(ef, idx) in props.row.effects" :key="`e_${idx}`">
                  {{ ef }}
                </li>
              </ul>
            </q-td>
          </q-tr>
        </template>
        <template #item="props">
          <q-intersection transition="slide-up" once class="col-md-6 col-12 knowledge-item craft-item">
            <q-card class="no-shadow text-center text-body2 word-keep">
              <q-card-section>
                <div class="row justify-center items-center q-gutter-x-sm">
                  <div class="text-h6 text-primary">
                    {{ materials.find(m => m.no === props.row.material).name }}
                  </div>
                  <q-badge color="red" v-if="props.row.hot === true">
                    {{ t('d2r.knowledge.items.hot') }}
                  </q-badge>
                </div>
              </q-card-section>
              <q-separator />
              <q-card-section>
                <div class="column items-center q-col-gutter-y-sm">
                  <div class="col-6">
                    <img :src="`/images/knowledge/items/${props.row.recipe.equipment.img}`"
                      style="max-width:100px;max-height: 100px;" />
                  </div>
                  <div class="col row no-wrap justify-center items-start q-gutter-x-sm">
                    <div v-for="(n, idx) in props.row.recipe.equipment.name" :key="idx" class="col column items-center">
                      <div>
                        <q-chip square dense color="indigo-7" text-color="white">
                          {{ props.row.recipe.equipment.type }}
                        </q-chip>
                      </div>
                      <div>{{ n }}</div>
                    </div>
                  </div>
                </div>
              </q-card-section>
              <q-card-section class="no-padding">
                <q-icon dense size="sm" color="grey-8" name="add" />
              </q-card-section>
              <q-card-section>
                <div class="row justify-center items-baseline q-gutter-x-xs">
                  <template v-for="(cr, idx) in c.common.recipe" :key="idx">
                    <div class="row items-center" v-if="idx !== 0">
                      <q-icon dense size="sm" color="grey-8" name="add" />
                    </div>
                    <div class="col column items-center q-gutter-y-sm">
                      <div class="row items-center">
                        <img :src="`/images/knowledge/items/${cr.img}`" style="max-width:50px;" />
                      </div>
                      <div v-html="cr.name"></div>
                    </div>
                  </template>
                  <div class="row items-center">
                    <q-icon dense size="sm" color="grey-8" name="add" />
                  </div>
                  <div class="col column items-center q-gutter-y-sm">
                    <div class="row items-center">
                      <img
                        :src="`/images/knowledge/items/runes/${runes.find(r => r.no === props.row.recipe.rune).file}.png`"
                        style="max-width:50px;" />
                    </div>
                    <div>{{ runes.find(r => r.no === props.row.recipe.rune).name }}
                    </div>
                  </div>
                </div>
              </q-card-section>
              <q-separator inset />
              <q-card-section>
                <ul>
                  <li class="text-indigo-5" v-for="(ce, idx) in c.common.effects" :key="`ce_${idx}`">
                    {{ ce }}
                  </li>
                  <li class="text-orange-8" v-for="(ef, idx) in props.row.effects" :key="`e_${idx}`">
                    {{ ef }}
                  </li>
                </ul>
              </q-card-section>
            </q-card>
          </q-intersection>
        </template>
      </q-table>
    </template>
    <p class="q-mt-xl text-right text-grey-6 text-body2">
      {{ t('d2r.knowledge.source') }} :
      <a style="text-decoration: none;" target="_blank"
        href="http://classic.battle.net/diablo2exp/items/crafteditems.shtml">{{ t('d2r.knowledge.arreatSummit') }}</a>
      & <a style="text-decoration: none;" class="text-red-6" target="_blank"
        href="https://www.purediablo.com/diablo-2/crafting-recipes/">{{ t('d2r.knowledge.pureDiablo') }}</a> &
      <a style="text-decoration: none;" class="text-orange-6" target="_blank"
        href="https://diablo2.wiki.fextralife.com/Crafting">{{ t('d2r.knowledge.diabloWiki') }}</a>
    </p>
  </div>
</template>

<style scoped>
ul {
  list-style: none;
}

.craft-item {
  min-height: 450px;
}
</style>