<script setup>
import { reactive, ref, computed } from 'vue'
import { useQuasar } from 'quasar'
import { useI18n } from 'vue-i18n'

const $q = useQuasar()
const { t, tm, rt } = useI18n()

const screen = computed(() => $q.screen)
const platform = computed(() => $q.platform)

const pagination = reactive({
  page: 1,
  rowsPerPage: 10000
})

const filter = ref('')
const columns = reactive([
  { name: 'name', label: t('d2r.knowledge.items.runewordName'), align: 'center', style: 'width:16%' },
  { name: 'material', label: t('d2r.knowledge.items.runewordMaterial'), align: 'center', style: 'width:14%' },
  { name: 'stats', label: t('d2r.knowledge.items.runewordStats'), align: 'center' },
  { name: 'runeword', label: t('d2r.knowledge.items.runeword'), align: 'center', style: 'width:40%' },
])
const runes = reactive(tm('d2r.knowledge.items.runeData').map(r => ({ ...r, selected: false })))
const own = ref(false)
const selectedMaterial = ref('0')
const selectedClass = ref('all')
const selectedSort = ref('version')
const socket = ref({
  min: 2,
  max: 6
})
const materials = computed(() => tm('d2r.knowledge.items.materials'))

const runeWords = reactive(tm('runeWords'))
const meterialOptions = computed(() => tm('d2r.knowledge.items.materials').filter(m => m.no < 16).map(m => { return { 'label': rt(m.name), 'value': rt(m.no) } }))
const sortOptions = computed(() => [{ 'label': t('d2r.knowledge.items.hot'), 'value': 'hot' }, { 'label': t('d2r.knowledge.items.runewordName'), 'value': 'name' }, { 'label': t('d2r.knowledge.items.level'), 'value': 'level' }, { 'label': t('d2r.knowledge.items.version'), 'value': 'version' }])
const classesOptions = reactive([{ 'value': 'all', 'label': t('d2r.knowledge.items.all'), 'icon': 'groups' }, { 'value': 'beginner', 'label': t('d2r.knowledge.items.beginner'), 'icon': 'person' }, ...tm('classes').map(p => ({ value: rt(p.value), label: rt(p.label), src: rt(p.img) })), { 'value': 'mercenary', 'label': t('d2r.knowledge.items.mercenary'), 'src': '/images/knowledge/items/etc/mercenary.png' }])

const filtering = computed(() => {
  let result = []
  const selectedRunes = runes.filter(r => r.selected === true).map(r => r.no)

  let resultRuneWords = selectedMaterial.value === '0' ? runeWords : selectedMaterial.value === '1' ? runeWords.filter(r => r.materials.filter(m => ![2, 3, 4, 5].includes(m)).length > 0) : runeWords.filter(r => r.materials.includes(Number(selectedMaterial.value)))
  resultRuneWords = selectedClass.value === 'all' ? resultRuneWords : resultRuneWords.filter(r => r.recc.includes(selectedClass.value))
  resultRuneWords = resultRuneWords.filter(r => r.runeword.length >= socket.value.min && r.runeword.length <= socket.value.max)

  if (selectedSort.value === 'version')
    resultRuneWords.sort((a, b) => {
      a = a.version ? a.version.toLowerCase() : 0
      b = b.version ? b.version.toLowerCase() : 0
      if (a < b) return 1
      if (a > b) return -1
      return 0
    })
  else if (selectedSort.value === 'name')
    resultRuneWords.sort((a, b) => {
      a = a.name.toLowerCase()
      b = b.name.toLowerCase()
      if (a < b) return -1
      if (a > b) return 1
      return 0
    })
  else if (selectedSort.value === 'hot')
    resultRuneWords.sort((a, b) => {
      return (a.hot === b.hot) ? 0 : b.hot === true ? 1 : -1
    })
  else if (selectedSort.value === 'level')
    resultRuneWords.sort((a, b) => { return a.level - b.level })

  if (selectedRunes.length > 0)
    result = own.value ? resultRuneWords.filter(rw => rw.runeword.filter(r => !selectedRunes.includes(r)).length === 0) : resultRuneWords.filter(rw => selectedRunes.filter(r => !rw.runeword.includes(r)).length === 0)
  else
    result = resultRuneWords

  if (filter.value !== '') {
    const terms = filter.value.toLowerCase().split(' ')
    result = result.filter(c => new RegExp(terms.join('|'), 'gi').test(c.name) || (c.oldName && new RegExp(terms.join('|'), 'gi').test(c.oldName)) || new RegExp(terms.join('|'), 'gi').test(c.stats.join('|')))
  }

  return result
})

const selectedRune = (rune) => {
  rune.selected = !rune.selected
}
const refresh = () => {
  runes.filter(r => r.selected === true).forEach(r => { r.selected = false })
  own.value = false
  selectedMaterial.value = '0'
  selectedClass.value = 'all'
  selectedSort.value = 'hot'
  socket.value.min = 2
  socket.value.max = 6
  filter.value = ''
}
const parsRuneWord = (runeword) => {
  return runeword.map(r => runes.find(rl => rl.no === r))
}
const parsMaterial = (material) => {
  let result = []
  if (material.includes(2) && material.filter(m => ![3, 4, 5].includes(m)).length > 2)
    result.push(t('d2r.knowledge.items.allWeapon'))

  if (!material.includes(2) && material.filter(m => ![3, 4, 5].includes(m)).length > 3)
    result.push(t('d2r.knowledge.items.meleeWeapon'))

  if (result.length > 0 && material.filter(m => [3, 4, 5].includes(m)).length > 0)
    result = [...result, ...material.filter(m => [3, 4, 5].includes(m)).map(m => materials.value.find(ms => ms.no === m).name)]
  else if (result.length === 0)
    result = material.map(m => materials.value.find(ms => ms.no === m).name)

  return result
}
</script>

<template>
  <div>
    <div class="row justify-end">
      <q-btn aria-label="Reset" dense flat icon="clear_all" class="text-weight-bold" padding="4px"
        :label="t('d2r.knowledge.items.reset')" :size="screen.gt.sm ? 'md' : 'sm'" @click="refresh" />
    </div>
    <div class="row justify-start text-center q-col-gutter-sm non-selectable">
      <div v-for="rune in runes" :key="rune.no" class="rune col-2 col-md-1">
        <q-btn aria-label="Selected" no-caps dense flat class="row fit" :class="rune.selected ? 'selected' : ''"
          :ripple="!platform.is.mobile" @click="selectedRune(rune)">
          <div class="col-12 column items-center q-gutter-y-xs">
            <img :src="`/images/knowledge/items/runes/${rune.file}.png`"
              style="width: 100%;max-width:50px;max-height:50px;" />
            <div class="word-keep rune-name text-body2">{{ rune.name }}</div>
          </div>
        </q-btn>
      </div>
    </div>
    <div class="row justify-around items-center q-col-gutter-sm q-mt-lg q-mb-sm">
      <div class="col-12 col-md-8 row justify-start items-center q-col-gutter-md">
        <div class="col-12 col-sm-6 col-lg-3">
          <q-checkbox dense color="amber-10" size="md" v-model="own" class="word-keep"
            :label="t('d2r.knowledge.items.own')" />
        </div>
        <div class="col-12 col-sm-6 col-lg-3">
          <q-select color="primary" popup-content-style="border:solid 2px #b89c5b" v-model="selectedMaterial"
            :options="meterialOptions" dropdown-icon="keyboard_arrow_down"
            :label="t('d2r.knowledge.items.runewordMaterialType')" behavior="menu" dense outlined emit-value map-options
            no-error-icon options-dense />
        </div>
        <div class="col-12 col-sm-6 col-lg-3">
          <q-select color="primary" popup-content-style="border:solid 2px #b89c5b" v-model="selectedClass"
            :options="classesOptions" :label="t('d2r.knowledge.items.recommendedClass')"
            dropdown-icon="keyboard_arrow_down" behavior="menu" dense outlined emit-value map-options no-error-icon
            options-dense>
            <template #option="scope">
              <q-item v-bind="scope.itemProps">
                <q-item-section avatar>
                  <q-avatar v-if="scope.opt.src" size="60px" rounded>
                    <q-img :ratio="1" :src="scope.opt.src" />
                  </q-avatar>
                  <q-avatar v-else-if="scope.opt.icon" rounded size="60px" :icon="scope.opt.icon">
                  </q-avatar>
                </q-item-section>
                <q-item-section>
                  <q-item-label>
                    {{ scope.opt.label }}
                  </q-item-label>
                </q-item-section>
              </q-item>
            </template>
          </q-select>
        </div>
        <div class="col-12 col-sm-6 col-lg-3 row justify-center items-center">
          <q-range class="q-pt-lg" dense v-model="socket" color="green-9" label-text-color="text-weight-bold" :min="2"
            :max="6" snap label-always markers />
        </div>
      </div>
      <div class="col-12 col-md-4 row justify-end q-col-gutter-sm">
        <div class="col-12 col-lg-5">
          <q-select color="primary" popup-content-style="border:solid 2px #b89c5b" v-model="selectedSort"
            :options="sortOptions" dropdown-icon="keyboard_arrow_down" :label="t('d2r.knowledge.items.sort')"
            behavior="menu" dense outlined emit-value map-options no-error-icon options-dense />
        </div>
        <div class="col-12 col-lg-5">
          <q-input dense outlined debounce="400" :label="t('btn.search')" color="primary" v-model="filter">
            <template #append>
              <q-icon name="search" color="primary" />
            </template>
          </q-input>
        </div>
      </div>
    </div>
    <q-table class="no-shadow knowledge-table" table-header-class="word-keep"
      card-container-class="q-col-gutter-md justify-start" :grid="screen.lt.lg" :rows="filtering" :columns="columns"
      row-key="name" :pagination="pagination" :hide-header="screen.lt.sm" bordered dense hide-pagination wrap-cells>
      <template #no-data>
        <div class="row justify-center full-width text-body2">
          {{ t('d2r.knowledge.items.noData') }}</div>
      </template>
      <template #body="props">
        <q-tr :props="props">
          <q-td key="name" :props="props">
            <div class="text-h6 word-keep text-primary column">
              <div class="col">
                {{ props.row.name }}
              </div>
              <div v-if="props.row.oldName" class="text-body1 text-brown">({{ props.row.oldName }})</div>
              <div class="col text-teal-4 text-subtitle2">clvl
                {{ props.row.level }}
              </div>
              <div class="col q-gutter-x-xs">
                <q-badge color="red" v-if="props.row.hot === true">
                  {{ t('d2r.knowledge.items.hot') }}
                </q-badge>
                <q-badge color="blue" v-if="props.row.recc.includes('beginner')">{{ t('d2r.knowledge.items.beginner') }}
                </q-badge>
                <q-badge color="yellow" text-color="black" v-if="props.row.version">{{
                  'v'.concat(' ',
                    props.row.version)
                }}
                </q-badge>
              </div>
            </div>
          </q-td>
          <q-td key="material" :props="props">
            <div class="text-subtitle1 word-keep column">
              <div class="col" v-for="(m, idx) in parsMaterial(props.row.materials)" :key="idx">{{ m }}<span
                  class="text-red-5">({{ props.row.runeword.length }})</span>
              </div>
            </div>
          </q-td>
          <q-td key="stats" :props="props">
            <ul class="column text-body2 stats">
              <li v-for="(stat, idx) in props.row.stats" :key="idx" class="col word-keep" v-html="stat">
              </li>
            </ul>
            <ul v-if="props.row.part" class="column text-body2 stats">
              <li v-for="(p, idx) in props.row.part" :key="idx" class="col word-keep part" v-html="p">
              </li>
            </ul>
          </q-td>
          <q-td key="runeword" :props="props">
            <div class="row items-center">
              <template v-for="(rune, idx) in parsRuneWord(props.row.runeword)" :key="`img_${idx}`">
                <div v-if="idx !== 0" class="word-keep" :key="`name_${idx}`">
                  <q-icon size="xs" color="grey-8" name="add" />
                </div>
                <div class="col column items-center content-center" style="height:140px">
                  <div class="col">
                    <img :src="`/images/knowledge/items/runes/${rune.file}.png`" style="max-width:50px" />
                  </div>
                  <div class="col-4 row items-center text-body1 word-keep">
                    {{ rune.name }}
                  </div>
                  <div class="col text-body1">
                    ({{ rune.no }})
                  </div>
                </div>
              </template>
            </div>
          </q-td>
        </q-tr>
      </template>
      <template #item="props">
        <q-intersection transition="slide-up" once class="col-md-6 col-12 knowledge-item rune-item">
          <q-card class="no-shadow text-center">
            <q-card-section class="text-grey-6 text-h6 word-keep">
              <div class="text-h6 word-keep text-primary column">
                <div class="col">{{ props.row.name }}<span class="text-body1 text-brown" v-if="props.row.oldName">
                    ({{ props.row.oldName }})</span></div>
                <div class="col text-teal-4 text-subtitle2">clvl
                  {{ props.row.level }}
                </div>
                <div class="col q-gutter-x-xs">
                  <q-badge color="red" v-if="props.row.hot === true">{{ t('d2r.knowledge.items.hot') }}
                  </q-badge>
                  <q-badge color="blue" v-if="props.row.recc.includes('beginner')">
                    {{ t('d2r.knowledge.items.beginner') }}
                  </q-badge>
                  <q-badge color="yellow" text-color="black" v-if="props.row.version">{{
                    'v'.concat(' ',
                      props.row.version)
                  }}
                  </q-badge>
                </div>
              </div>
            </q-card-section>
            <q-separator />
            <q-card-section>
              <div class="text-subtitle2 word-keep row justify-around">
                <div v-for="(m, idx) in parsMaterial(props.row.materials)" :key="idx">{{ m }}<span class="text-red-5">({{
                  props.row.runeword.length }})</span>
                </div>
              </div>
            </q-card-section>
            <q-separator />
            <q-card-section>
              <ul class="column text-body2 stats">
                <li v-for="(stat, idx) in props.row.stats" :key="idx" class="col word-keep" v-html="stat">
                </li>
              </ul>
              <ul class="column text-body2 stats" v-if="props.row.part">
                <li v-for="(p, idx) in props.row.part" :key="idx" class="col word-keep part" v-html="p">
                </li>
              </ul>
            </q-card-section>
            <q-separator inset />
            <q-card-section>
              <div class="row justify-center full-width items-start content-center">
                <template v-for="(rune, idx) in parsRuneWord(props.row.runeword)" :key="`img_${idx}`">
                  <div class="col-2 column items-center content-center text-body2">
                    <div class="row items-center">
                      <img :src="`/images/knowledge/items/runes/${rune.file}.png`" style="width:30px" />
                    </div>
                    <div class="row items-center word-keep">
                      {{ rune.name }}
                    </div>
                    <div class="row items-center">
                      ({{ rune.no }})
                    </div>
                  </div>
                </template>
              </div>
            </q-card-section>
          </q-card>
        </q-intersection>
      </template>
    </q-table>
    <p class="q-mt-xl text-right text-grey-6 text-body2">
      {{ t('d2r.knowledge.source') }} : <a style="text-decoration: none;" class="text-green-4" target="_blank"
        href="https://namu.wiki/w/%EB%A3%AC%EC%96%B4%20%EC%95%84%EC%9D%B4%ED%85%9C">{{
          t('d2r.knowledge.namuWiki')
        }}</a>
      & <a style="text-decoration: none;" class="text-red-6" target="_blank"
        href="https://www.purediablo.com/diablo-2/runewords/">{{ t('d2r.knowledge.pureDiablo') }}</a>
    </p>
  </div>
</template>

<style scoped>
.stats {
  padding: 0;
  list-style: none;
}

.stats li {
  line-height: 1.4em;
  color: rgba(100, 100, 250, 1);
}

.stats li.part {
  color: rgba(150, 50, 0, 1);
}

.rune {
  min-width: 50px;
}

.rune .selected {
  border-radius: 10px;
  box-shadow: inset 0 0 0 2px rgba(184, 156, 91, 1);
  background-color: rgba(184, 156, 91, .2);
}

.rune .selected .rune-name {
  color: rgba(184, 106, 40, 1);
  font-weight: bold;
}

.rune-item {
  min-height: 350px;
}
</style>