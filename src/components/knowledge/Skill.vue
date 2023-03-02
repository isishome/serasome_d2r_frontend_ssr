<script setup>
import { ref, computed, reactive, onMounted } from 'vue'
import { useQuasar } from 'quasar'
import { useStore } from 'stores/store'
import { useRoute } from 'vue-router'

const props = defineProps({
  treeId: {
    type: String,
    required: true
  },
  skillId: {
    type: String,
    required: true
  },
  data: {
    type: Object,
    default: () => { }
  },
  lang: {
    type: Object,
    default: () => { }
  },
  mobile: {
    type: Object,
    default: () => { }
  }
})

const emit = defineEmits(['selected', 'loaded'])

const $q = useQuasar()

const screen = computed(() => $q.screen)
const platform = computed(() => $q.platform)
const store = useStore()
const route = useRoute()

const part = route.params.part ? route.params.part.toLowerCase() : 'amazon'
const dialog = ref(false)
const points = computed(() => props.data[props.treeId] && props.data[props.treeId][props.skillId] ? props.data[props.treeId][props.skillId] : 0)
const skills = computed(() => store.skillsData)
const info = computed(() => store.skillsData[part].find(t => t.id === props.treeId).skills.find(s => s.id === props.skillId))
const disable = computed(() => points.value < 1 || points.value >= 20 || props.skillPoints < 1)

let calcs = {}
const bonuses = reactive([])
const adds = reactive([])
const stats = reactive([])
const nexts = reactive([])
const scrollTarget = ref(null)

const update = () => {
  // clear calcs
  calcs = {}

  // set bonuses info
  bonuses.splice(0, bonuses.length)
  const bonus = (info.value.bonus || [])
  bonus.some(b => {
    const bSkill = findSkill(b.skillId)
    const bSkillLevel = props.data[b.treeId] && props.data[b.treeId][b.skillId] ? Number(props.data[b.treeId][b.skillId]) : 0

    if (bSkill) {
      if (b.addIdx) {
        for (const i in b.addIdx) {
          const calc = { value: b.value[i], type: b.type[i], stat: bSkill.stat, points: bSkillLevel }

          if (calcs[`add_${b.addIdx[i]}`])
            calcs[`add_${b.addIdx[i]}`] = [...calcs[`add_${b.addIdx[i]}`], calc]
          else
            calcs[`add_${b.addIdx[i]}`] = [calc]
        }
      }
      else if (b.statIdx) {
        for (const i in b.statIdx) {
          const calc = { value: b.value[i], type: b.type[i], stat: bSkill.stat, points: bSkillLevel }
          if (calcs[`stat_${b.statIdx[i]}`])
            calcs[`stat_${b.statIdx[i]}`] = [...calcs[`stat_${b.statIdx[i]}`], calc]
          else
            calcs[`stat_${b.statIdx[i]}`] = [calc]
        }
      }

      let bn = null
      if (info.value.bonus.length === bonuses.length || b.hide === true)
        return false
      else if (b.text && b.value)
        bn = b.text.replace(/\{n\}/gi, bSkill.name).format(b.value[0])
      else
        bn = bSkill.name

      if (!bonuses.includes(bn) && bonus !== null)
        bonuses.push(bn)
    }
  })

  // set adds info
  adds.splice(0, adds.length)
  const add = (info.value.add || [])
  add.forEach((a, i) => {
    adds.push(a.value ? format('add', i, a.value[points.value]) : a.text)
  })

  // set stats info with nexts info
  stats.splice(0, stats.length)
  nexts.splice(0, nexts.length)
  const stat = (info.value.stat || [])
  stat.forEach((s, i) => {
    stats.push(s.value ? format('stat', i, s.value[points.value]) : s.text)
    nexts.push(s.value ? format('stat', i, s.value[points.value + 1]) : s.text)
  })
}

// find skill by skillId
const findSkill = (skillId) => {
  let result = null

  for (let tree of skills.value[part]) {
    for (let skill of tree.skills) {
      if (skill.id === skillId) {
        result = skill
        break
      }
    }

    if (result !== null)
      break
  }

  return result
}

const format = (type, idx, val) => {
  const calc = calcs[`${type}_${idx}`]
  let formatted = type === 'stat' ? info.value.stat[idx].text : type === 'add' ? info.value.add[idx].text : ''
  if (Array.isArray(val)) {
    for (const v in val) {
      const result = [val[v]]
      const rates = []
      const rateArray = []
      let origin = 0
      if (calc) {
        calc.forEach(c => {
          if (c.type === 'rate')
            rates.push(c.value * c.points / 100)
          else if (c.type === 'sum')
            result.push(c.value * c.points)
          else if (c.type === 'per_sum')
            result.push(c.value[0] * Math.floor(c.points / c.value[1]))
          else if (c.type === 'array')
            result.push(c.value[c.points])
          else if (c.type === 'rate_array')
            rateArray.push(c.stat[c.value].value[c.points] / 100)
          else if (c.type === 'origin_rate')
            origin = (type === 'stat' ? info.value.stat[idx].value[1][v] : type === 'add' ? info.value.add[idx].value[1][v] : 0) * (c.value * c.points / 100)
        })
      }

      if (rates.length > 0)
        result.push(rates.reduce((sum, x) => sum + x) * val[v])

      result.push(origin)

      const total = Math.floor(result.reduce((sum, x) => sum + x) * (1 + (rateArray.length > 0 ? rateArray.reduce((sum, x) => sum + x) : 0)) * 10) / 10

      formatted = formatted.replace('{' + v + '}', total)
    }
  }
  else {
    const result = [val]
    const rates = []
    const rateArray = []
    let origin = 0
    if (calc) {
      calc.forEach(c => {
        if (c.type === 'rate')
          rates.push(c.value * c.points / 100)
        else if (c.type === 'sum')
          result.push(c.value * c.points)
        else if (c.type === 'per_sum')
          result.push(c.value[0] * Math.floor(c.points / c.value[1]))
        else if (c.type === 'array')
          result.push(c.value[c.points])
        else if (c.type === 'rate_array')
          rateArray.push(c.stat[c.value].value[c.points] / 100)
        else if (c.type === 'origin_rate')
          origin = (type === 'stat' ? info.value.stat[idx].value[1] : type === 'add' ? info.value.add[idx].value[1] : 0) * (c.value * c.points / 100)
      })
    }

    if (rates.length > 0)
      result.push(rates.reduce((sum, x) => sum + x) * val)

    result.push(origin)

    const total = Math.floor(result.reduce((sum, x) => sum + x) * (1 + (rateArray.length > 0 ? rateArray.reduce((sum, x) => sum + x) : 0)) * 10) / 10

    formatted = formatted.replace('{0}', total)
  }
  return formatted
}

const selected = (p) => {
  if (platform.value.is.mobile) {
    if (props.mobile.max)
      p = 1000
    if (props.mobile.remove)
      p = -p
    if (props.mobile.info) {
      dialog.value = true
      return
    }
  }

  emit('selected', { treeId: props.treeId, skillId: props.skillId, points: p })
}

defineExpose({ update })

onMounted(() => {
  update()
  emit('loaded', props.treeId)
})
</script>

<template>
  <div ref="scrollTarget">
    <button class="btn relative-position" :style="`top:${info.top}%;left:${info.left}%`" @click.exact="selected(1)"
      @contextmenu.exact.prevent="selected(-1)" @click.shift.exact="selected(1000)"
      @contextmenu.shift.exact.prevent="selected(-1000)">
      <img class="img" :class="points > 0 ? 'learned' : ''" draggable="false"
        :src="`/images/knowledge/skills/${part}/${treeId}/${skillId}.jpg`" />
      <q-tooltip v-if="!platform.is.mobile" class="skill-tooltip text-body2 text-center" :scroll-target="scrollTarget"
        size="xs" :anchor="`bottom ${info.position || 'middle'}`" :self="`top ${info.position || 'middle'}`"
        :offset="[0, 0]" transition-show="none" transition-hide="none">
        <div class="full-width column items-center word-keep"
          :class="[disable ? 'text-red-5' : 'text-grey-4', screen.lt.sm ? 'q-gutter-xs' : 'q-gutter-md']">
          <div v-if="points === 0" class="d2r-green">
            {{ lang.notLearned }}
          </div>
          <div class="name d2r-green">
            {{ info.name }}
          </div>
          <div class="q-mt-none column items-center">
            <div v-for="(d, idx) in info.desc" :key="idx">{{ d }}</div>
            <div v-if="points !== 20">{{ lang.required }} {{ Number(info.level) + points }}
            </div>
            <div v-else>{{ lang.reached }}</div>
          </div>
          <div v-if="adds.length > 0" class="column items-center">
            <div v-for="(a, idx) in adds" :key="idx">
              {{ a }}
            </div>
          </div>
          <div v-if="points > 0" class="column items-center">
            <div>{{ lang.current }} : {{ points }}
            </div>
            <div v-for="(s, idx) in stats" :key="idx">
              {{ s }}
            </div>
          </div>
          <div v-if="points !== 20" class="column items-center">
            <div>{{ points > 0 ? lang.next : lang.first }} {{ lang.level }}
            </div>
            <div v-for="(n, idx) in nexts" :key="idx">
              {{ n }}
            </div>
          </div>
          <div v-if="bonuses.length > 0" class="column items-center q-gutter-y-sm">
            <div class="d2r-green row items-center q-gutter-sm">
              <div>{{ info.name }}</div>
              <div v-for="(l, idx) in lang.bonus.split(' ')" :key="idx">{{ l }}</div>
              <div class="q-ml-none">:</div>
            </div>
            <div class="q-mt-none column items-center">
              <div v-for="(b, idx) in bonuses" :key="idx">{{ b }}</div>
            </div>
          </div>
        </div>
      </q-tooltip>
      <template v-else>
        <q-dialog full-width v-model="dialog" class="text-body2 text-center">
          <div class="bg-black full-width no-scroll column items-center word-keep q-px-none q-py-sm"
            :class="[disable ? 'text-red-5' : 'text-grey-4', 'q-gutter-y-sm']">
            <div v-if="points === 0" class="d2r-green first-letter">
              {{ lang.notLearned }}
            </div>
            <div class="name d2r-green first-letter">
              {{ info.name }}
            </div>
            <div class="q-mt-none column items-center">
              <div v-for="(d, idx) in info.desc" :key="idx">{{ d }}</div>
              <div v-if="points !== 20">{{ lang.required }} {{ Number(info.level) + points }}
              </div>
              <div v-else>{{ lang.reached }}</div>
            </div>
            <div v-if="adds.length > 0" class="column items-center">
              <div v-for="(a, idx) in adds" :key="idx">{{ a }}
              </div>
            </div>
            <div v-if="points > 0" class="column items-center">
              <div>{{ lang.current }} : {{ points }}
              </div>
              <div v-for="(s, idx) in stats" :key="idx">{{ s }}
              </div>
            </div>
            <div v-if="points !== 20" class="column items-center">
              <div>{{ points > 0 ? lang.next : lang.first }} {{ lang.level }}
              </div>
              <div v-for="(n, idx) in nexts" :key="idx">{{ n }}
              </div>
            </div>
            <div v-if="bonuses.length > 0" class="column items-center q-gutter-y-xs">
              <div class="d2r-green row justify-center items-center q-gutter-xs">
                <div>{{ info.name }}</div>
                <div v-for="(l, idx) in lang.bonus.split(' ')" :key="idx">{{ l }}</div>
                <div class="q-ml-none">:</div>
              </div>
              <div class="q-mt-none column items-center">
                <div v-for="(b, idx) in bonuses" :key="idx">{{ b }}</div>
              </div>
            </div>
          </div>
        </q-dialog>
      </template>
    </button>
    <div v-if="points > 0" class="point row justify-center items-center"
      :style="`top:${Number(info.top) + 7.4}%;left:${Number(info.left) + 15.6}%`">
      {{ points }}
    </div>
  </div>
</template>

<style>
.skill-tooltip {
  background-color: rgba(10, 10, 10, .9) !important;
  border-radius: 0 !important;
}
</style>
<style scoped>
.btn {
  background-color: transparent !important;
  position: absolute;
  width: 14.7707%;
  height: 11.8528%;
  z-index: 2;
  padding: 0;
  margin: 0;
  border: none;
  cursor: pointer;
  outline: none;
  touch-action: manipulation;
}

.btn:active {
  transform: scale(95%, 95%);
}

.point {
  font-size: 1em;
  width: 8%;
  height: 5%;
  position: absolute;
  color: white;
}

.img {
  width: 100%;
  height: 100%;
}

.img.learned {
  filter: brightness(2.5);
  -webkit-filter: brightness(2.5);
}

@media (hover:hover) {
  .img:hover {
    filter: brightness(3);
    -webkit-filter: brightness(3);
  }
}


.d2r-green {
  color: rgb(9, 255, 0);
}
</style>