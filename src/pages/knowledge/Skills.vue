<script setup>
import { ref, reactive, computed, inject, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useQuasar, copyToClipboard } from 'quasar'
import { useI18n } from 'vue-i18n'
import { useStore } from 'stores/store'
import Tree from 'components/knowledge/Tree.vue'
import Skill from 'components/knowledge/Skill.vue'


String.prototype.format = function () {
  var formatted = this
  for (var i = 0; i < arguments.length; i++) {
    var regexp = new RegExp('\\{' + i + '\\}', 'gi')
    formatted = formatted.replace(regexp, arguments[i])
  }
  return formatted
}

// module variables
const axios = inject('axios')
const route = useRoute()
const { t, tm } = useI18n()
const $q = useQuasar()
const store = useStore()

const platform = computed(() => $q.platform)
const loading = ref(false)
const data = reactive({})
const shareUrl = ref('')
const part = route.params.part ? route.params.part.toLowerCase() : 'amazon'
const skills = computed(() => store.skillsData)
const skillPoints = ref(110)
const skillRefs = reactive({})


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

const reset = (treeId) => {
  skills.value[part].some(t => {
    if (t.id === treeId) {
      t.skills.forEach(s => {
        selected({ treeId: t.id, skillId: s.id, points: -1000 })
      })

      return t.id === treeId
    }
  })
}

const selected = ({ treeId, skillId, points }) => {
  const required = findSkill(skillId).required || []
  const requiredFilter = required.filter(r => data[r.treeId] && data[r.treeId][r.skillId] && data[r.treeId][r.skillId] > 0)

  if (!data[treeId])
    data[treeId] = {}

  if (!data[treeId][skillId])
    data[treeId][skillId] = 0

  if (requiredFilter.length !== required.length) {
    data[treeId][skillId] = 0
    return
  }

  let currentPoint = data[treeId][skillId]

  if ((currentPoint === 20 && points > 0) || (currentPoint === 0 && points < 0))
    return

  points = points > 999 ? 20 - currentPoint : points < -999 ? -currentPoint : points
  let remain = skillPoints.value - points
  const skillRemain = currentPoint + points

  if (remain < 0) {
    points += remain
    remain = 0
  }

  if (data[treeId][skillId] + points === 0) {
    for (let tree in data) {
      for (let skill in data[tree]) {
        const req = (findSkill(skill).required || []).map(r => r.skillId)
        if (req.includes(skillId))
          selected({ treeId: tree, skillId: skill, points: -1000 })
      }
    }
  }

  if (remain >= 0 && skillRemain >= 0 && skillRemain <= 20) {
    skillPoints.value -= points
    data[treeId][skillId] += points
  }

  // affected skill
  skillRefs[`${treeId}-${skillId}`].update()
  const affected = findSkill(skillId).affected || []
  affected.forEach(a => {
    skillRefs[`${a.treeId}-${a.skillId}`].update()
  })

  shareUrl.value = ''
}

const share = () => {
  shareUrl.value = ''
  loading.value = true
  axios
    .post('/d2r/knowledge/skillshare', {
      cls: part,
      data: JSON.stringify(data)
    })
    .then((response) => {
      if (response.data && response.data !== '') {
        shareUrl.value = `${location.host}/knowledge/skills/${part}/${response.data}`

        copyToClipboard(shareUrl.value)
          .then(() => {
            $q.notify({
              type: 'positive',
              color: 'positive',
              message: t('d2r.knowledge.skills.message.successClipboard')
            })
          })
          .catch(() => { })
      }
    })
    .catch(() => { })
    .then(() => {
      loading.value = false
    })
}

const bindData = () => {
  for (let tree in data) {
    for (let skill in data[tree]) {
      const points = data[tree][skill]
      data[tree][skill] = 0
      selected({ treeId: tree, skillId: skill, points: points })
    }
  }
  loading.value = false
}

const loadData = (sid) => {
  loading.value = true
  axios
    .get('/d2r/knowledge/skills', {
      params: {
        sid: sid,
      }
    }).then(function (response) {
      Object.assign(data, response.data[0] && response.data[0].data ? response.data[0].data : {})
    })
    .catch(() => { })
    .then(() => {
      setTimeout(() => {
        bindData()
      }, 1000)
    })
}

const complete = ref(false)
const loadedSkill = reactive({})
const loaded = (treeId) => {
  if (!loadedSkill[treeId])
    loadedSkill[treeId] = 1
  else
    loadedSkill[treeId]++
}

watch(() => complete.value, (val) => {
  const sid = route.params.sid
  if (val && sid)
    loadData(sid)
})

Object.keys(data).forEach(k => delete data[k])
shareUrl.value = ''
store.setSkillsData(tm('skillsData'))
const allSkillCnt = skills.value[part].reduce((t, s) => t + s.skills.length, 0)
complete.value = computed(() => Object.keys(loadedSkill).map(k => loadedSkill[k]).reduce((t, s) => t + s, 0) === allSkillCnt)
</script>

<template>
  <div class="full-width non-selectable no-touch">
    <div class="column q-gutter-y-sm">
      <div class="q-mb-md">
        <ul class="desc text-weight-bold column q-gutter-y-sm">
          <li v-for="(d, idx) in tm('desc')[platform.is.mobile ? 'mobile' : 'desktop']" :key="idx"
            class="row items-center q-gutter-x-xs text-html2 text-weight-bold no-wrap">
            <div v-for="(k, idx1) in d.key" :key="`k${idx}_${idx1}`"
              class="row justify-center items-center q-gutter-x-xs no-wrap">
              <div>
                <q-btn aria-label="Key" dense push size="12px" color="grey-5" text-color="black">{{ k }}</q-btn>
              </div>
              <div v-if="idx1 !== d.key.length" class="text-grey-6">
                <q-icon name="add" color="grey-6" />
              </div>
            </div>
            <div v-for="(i, idx2) in d.img" :key="`$i{idx}_${idx2}`"
              class="row justify-center items-center q-gutter-x-xs q-gutter-x-xs no-wrap">
              <div v-if="idx2 !== 0" class="text-grey-6">/</div>
              <div>
                <img :src="`/images/knowledge/skills/${i}`" />
              </div>
            </div>
            <div class="row items-center q-gutter-x-xs no-wrap">
              <div v-if="!platform.is.mobile">
                <q-icon color="grey-6" name="east" />
              </div>
              <div class="word-keep">
                {{ d.text }}
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div class="row justify-center items-center q-col-gutter-lg">
        <div class="col-12 col-md-6 col-lg-4" v-for="tree in skills[part]" :key="tree.id">
          <Tree :loading="loadedSkill[tree.id] !== tree.skills.length || loading" :tree-id="tree.id" :data="data"
            :lang="tm('lang')" :skill-points="skillPoints" @reset="reset">
            <template #default="props">
              <Skill :ref="c => skillRefs[`${tree.id}-${skill.id}`] = c" v-for="skill in tree.skills" :key="skill.id"
                :tree-id="tree.id" :skill-id="skill.id" :data="data" :lang="tm('lang')" :mobile="props.mobile"
                @loaded="loaded" @selected="selected" />
            </template>
          </Tree>
        </div>
      </div>
      <div v-if="skillPoints < 110" class="full-width row justify-end items-center q-gutter-sm">
        <div class="text-left">
          <q-input v-if="shareUrl !== ''" color="primary" type="text" v-model="shareUrl" dense standout outlined
            hide-bottom-space no-error-icon>
            <template v-slot:prepend>
              <q-icon color="primary" name="link" />
            </template>
          </q-input>
        </div>
        <div>
          <q-btn aria-label="Share" unelevated icon="share" color="primary" :label="t('d2r.knowledge.skills.btn.share')"
            @click="share" :loading="loading" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.body--dark .desc img {
  filter: invert(100%);
  -webkit-filter: invert(100%);
  width: 24px;
  height: 24px;
}

.no-touch {
  user-select: none !important;
  -moz-user-select: none !important;
  -webkit-user-select: none !important;
  -ms-user-select: none !important;
}

.tab {
  color: #999999;
  box-shadow: inset 0 0 0 1px rgba(100, 100, 100, .5);
  border-radius: 0 10px 10px 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s;
}

.fade-enter,
.fade-leave-to

/* .fade-leave-active below version 2.1.8 */
  {
  opacity: 0;
}

.desc {
  list-style: none;
  margin: 0;
  padding: 0;
  font-size: 1em;
}

@media screen and (max-width:599px) {
  .desc {
    font-size: 0.8em !important;
    line-height: 1.6em;
  }

  .desc li {
    margin-bottom: 2px;
  }
}
</style>