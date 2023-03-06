<script setup>
import { ref, computed, reactive, inject } from 'vue'
import { useQuasar } from 'quasar'
import { useRoute, useRouter } from 'vue-router'
import { useStore } from 'stores/store'
import { useI18n } from 'vue-i18n'
import { getYoutubeId } from 'src/common'
import Editor from 'components/Editor.vue'
//import Prompt from 'components/bbs/Prompt.vue'

const props = defineProps({
  sec: {
    type: String,
    required: true
  },
  pid: {
    type: String,
    deafult: null
  }
})

// module variables
const $q = useQuasar()
const axios = inject('axios')
const route = useRoute()
const router = useRouter()
const store = useStore()
const { t } = useI18n()

// common variables
const loading = ref(false)
const editor = ref(null)
const writeInfo = reactive({
  classify: '',
  pid: props.pid,
  title: '',
  contents: '',
  youtube: '',
  files: [],
  fileList: [],
  blobList: [],
  deleteList: [],
  owner: false,
  quiz: {
    enable: false,
    question: null,
    answer: null,
    reward: null
  }
})

const info = computed(() => store.getInfo)
const authority = computed(() => store.getAuthority)
const classifies = computed(() => {
  const findClassifies = info.value && info.value.section.filter(s => s.value === props.sec).length > 0 ? info.value.section.filter(s => s.value === props.sec)[0].classifies : []
  return findClassifies.filter(c => c.auth <= info.value.grade)
})

if (props.pid) {
  loading.value = true

  axios.get('/d2r/board/cont', {
    params: {
      sec: props.sec,
      pid: props.pid
    }
  }).then(function (response) {
    if (response.data) {
      writeInfo.classify = response.data.classify
      writeInfo.quiz = response.data.quiz || writeInfo.quiz
      writeInfo.title = response.data.title
      writeInfo.contents = response.data.contents
      writeInfo.youtube = response.data.youtube
      writeInfo.files = response.data.files
      writeInfo.owner = response.data.owner

      if (writeInfo.owner === false) {
        $q.notify({
          type: 'negative',
          color: 'negative',
          message: t('d2r.message.noPermission')
        })
        router.go(-1)
      }
    }
  })
    .catch(function () { })
    .then(function () {
      loading.value = false
      if (writeInfo.owner === false && authority(props.sec, 'write') === false) {
        $q.notify({
          type: 'negative',
          color: 'negative',
          message: t('d2r.message.noPermission')
        })
        router.replace(route.path.replace(/write/i, 'read'))
      }
    })
}

const invalidContents = computed(() => writeInfo.contents.trim() === '' || writeInfo.contents.replace(/\s/gi, '').replace(/<\/?p>/gi, '') === '')

const onSubmit = () => {
  if (invalidContents.value) {
    editor.value.focus()
    return
  }
  else {
    if (editor.value.getAttach().length > 0)
      editor.value.upload()
    else
      post()
  }
}

const deleteFile = (file) => {
  const findIndex = writeInfo.files.findIndex(f => f.fid === file.fid)

  if (findIndex !== -1) {
    const newContents = writeInfo.contents.replace(file.path, 'remove_image').replace(new RegExp('<(\\w+)\\s[^>]*src=\\"remove_image\\"[^>]*>', 'igm'), '')
    file.deleted = true
    writeInfo.deleteList.push(file.fid)
    writeInfo.files.splice(findIndex, 1)
    editor.value.setContent(newContents, true)
  }
}

const factoryFn = () => {
  return new Promise((resolve) => {
    resolve({
      url: `${axios.defaults.baseURL}/d2r/board/write`,
      method: 'POST',
      withCredentials: true,
      formFields: [
        {
          'name': 'sec',
          'value': encodeURIComponent(props.sec)
        },
        {
          'name': 'classify',
          'value': encodeURIComponent(writeInfo.classify)
        },
        {
          'name': 'pid',
          'value': writeInfo.pid
        },
        {
          'name': 'quiz',
          'value': encodeURIComponent(JSON.stringify(writeInfo.quiz))
        },
        {
          'name': 'title',
          'value': encodeURIComponent(writeInfo.title)
        },
        {
          'name': 'contents',
          'value': encodeURIComponent(writeInfo.contents)
        },
        {
          'name': 'youtube',
          'value': encodeURIComponent(writeInfo.youtube)
        },
        {
          'name': 'deleteList',
          'value': encodeURIComponent(JSON.stringify(writeInfo.deleteList))
        }
      ]
    })
  })
}

const post = () => {
  loading.value = true
  axios.post('/d2r/board/write', {
    sec: props.sec,
    classify: encodeURIComponent(writeInfo.classify),
    pid: writeInfo.pid,
    quiz: encodeURIComponent(JSON.stringify(writeInfo.quiz)),
    title: encodeURIComponent(writeInfo.title),
    contents: encodeURIComponent(writeInfo.contents),
    youtube: encodeURIComponent(writeInfo.youtube),
    deleteList: encodeURIComponent(JSON.stringify(writeInfo.deleteList))
  }).then(function () {
    complete()
  })
    .catch(function () {
      failed()
    })
    .then(function () {
      loading.value = false
    })
}

const complete = () => {
  $q.notify({
    type: 'positive',
    color: 'positive',
    message: t('post.message.completePosting')
  })

  router.push({ name: 'd2r-bbs', params: { sec: props.sec }, query: { page: route.query.page || 1 } })
}

const failed = (msg) => {
  $q.notify({
    type: 'negative',
    color: 'negative',
    message: t('post.message.failedPosting') + (msg ? ` [${msg}]` : '')
  })
}
</script>
<template>
  <div class="card-wrap">
    <q-card class="write-card">
      <q-card-section>
        <q-form class="no-wrap column q-gutter-y-sm" @submit="onSubmit">
          <div class="row justify-start q-col-gutter-x-sm">
            <div class="col col-md-3 col-lg-3">
              <q-select dense outlined emit-value no-error-icon hide-bottom-space map-options class="col-12 col-lg-3"
                color="grey-5" v-model="writeInfo.classify" :options="classifies" :label="t('d2r.bbs.classify')"
                behavior="menu" :rules="[val => val && val.trim() !== '']" />
            </div>
            <div v-if="writeInfo.classify === 'give'" class="col col-md-3 col-lg-3">
              <q-checkbox :label="t('d2r.bbs.quiz')" v-model="writeInfo.quiz.enable" />
            </div>
          </div>
          <q-separator v-if="writeInfo.quiz.enable" />
          <q-slide-transition>
            <div v-if="writeInfo.quiz.enable" class="row justify-start q-col-gutter-x-sm">
              <div class="col-8 col-sm-9">
                <q-input dense outlined hide-bottom-space no-error-icon class="quiz" color="grey-5" :disable="loading"
                  maxlength="80" type="text" :label="t('d2r.bbs.question')" v-model="writeInfo.quiz.question"
                  :rules="[val => val && val.trim() !== '']" />
              </div>
              <div class="col col-sm">
                <q-input dense outlined hide-bottom-space no-error-icon class="quiz" color="grey-5" :disable="loading"
                  maxlength="20" type="text" :label="t('d2r.bbs.answer')" v-model="writeInfo.quiz.answer"
                  :rules="[val => val && val.trim() !== '']" />
              </div>
            </div>
          </q-slide-transition>
          <q-slide-transition>
            <div v-if="writeInfo.quiz.enable">
              <q-input dense outlined hide-bottom-space no-error-icon class="quiz" color="grey-5" :disable="loading"
                maxlength="100" type="text" :label="t('d2r.bbs.reward')" v-model="writeInfo.quiz.reward"
                :rules="[val => val && val.trim() !== '']" />
            </div>
          </q-slide-transition>
          <q-separator />
          <div>
            <q-input dense outlined hide-bottom-space no-error-icon color="grey-5" :disable="loading" maxlength="200"
              type="text" :label="t('post.title')" v-model="writeInfo.title" :rules="[val => val && val.trim() !== '']" />
          </div>
          <div>
            <Editor ref="editor" :contents="writeInfo.contents" :factory-fn="factoryFn" :disable="loading"
              @update="val => writeInfo.contents = val" @complete="complete" @failed="failed">
              <template #attach="{ files, insert, remove, clear }">
                <div class="column items-start">
                  <div class="full-width row items-center q-col-gutter-xs">
                    <div v-for="f in files" :key="f.name" class="col-4 col-md-2">
                      <q-chip removable clickable color="grey-9" text-color="white" icon="image" :label="f.name"
                        @click="insert(f.__img.src)" @remove="remove(f)" />
                    </div>
                  </div>
                  <q-btn aria-label="Clear All" v-if="files.length > 0" no-caps unelevated dense color="grey-9"
                    class="self-end" @click="clear" label="Clear All" />
                </div>
              </template>
            </Editor>
          </div>
          <div v-if="sec !== 'trade'" class="row q-gutter-x-sm">
            <q-input class="col" outlined dense hide-bottom-space no-error-icon color="grey-5" :disable="loading"
              type="text" v-model="writeInfo.youtube" :label="t('post.youtubeUrl')"
              :rules="[val => (!val || val.trim() === '' || getYoutubeId(val) !== null) || '']" />
          </div>
          <div v-if="pid && writeInfo.files.length > 0" class="full-width scroll" style="max-height: 25vh;">
            <q-list bordered separator class="q-pa-sm">
              <template v-for="file in writeInfo.files">
                <q-item dense v-if="file.deleted !== true" :key="file.fid">
                  <q-item-section v-if="file.type === 'image'" thumbnail>
                    <img :src="file.path">
                  </q-item-section>
                  <q-item-section>
                    <q-item-label class="gt-xs ellipsis">
                      {{ file.origin }}
                    </q-item-label>
                  </q-item-section>
                  <q-item-section center side>
                    <q-btn aria-label="Delete File" size="md" flat round dense icon="delete" @click="deleteFile(file)" />
                  </q-item-section>
                </q-item>
              </template>
            </q-list>
          </div>
          <div class="row justify-end q-gutter-x-sm">
            <q-btn aria-label="Cancel Write" dense outline :disable="loading" :label="t('btn.cancel')"
              :to="pid !== null ? { name: 'd2r-read', params: { sec: sec, pid: pid } } : { name: 'd2r-bbs', params: { sec: sec } }" />
            <q-btn aria-label="Submit Write" dense unelevated color="primary" :loading="loading" type="submit"
              :label="pid ? t('btn.modify') : t('btn.posting')" />
          </div>
        </q-form>
      </q-card-section>
    </q-card>
  </div>
</template>

<style scoped>
.card-wrap {
  padding: 1em 1em 2em 1em;
  box-shadow: 0 0 0 1px rgba(230, 230, 230, 1);
  background-color: rgba(250, 250, 250, 1);
}

.body--dark .card-wrap {
  box-shadow: 0 0 0 1px rgba(60, 60, 60, 1) !important;
  background-color: rgba(24, 24, 24, 1) !important;
}

.write-card {
  background-color: rgba(254, 254, 254, .8);
  box-shadow: none;
}

.body--dark .write-card {
  background-color: rgba(20, 20, 20, .5) !important;
}

@keyframes wiggle {
  0% {
    margin-left: -4px;
  }

  25% {
    margin-left: 3px;
  }

  50% {
    margin-left: -3px;
  }

  75% {
    margin-left: 2px;
  }

  100% {
    margin-left: 0;
  }
}

.editor-menu-bar {
  position: sticky;
  position: -webkit-sticky;
  top: 77px;
  z-index: 1;
  background-color: #fafafa !important;
  border-radius: 4px;
}

.body--dark .editor-menu-bar {
  background-color: #202020 !important;
}

@media screen and (max-width:1439px) {
  .editor-menu-bar {
    top: 58px !important;
  }
}

.quiz {
  background-color: rgba(122, 92, 35, 0.3) !important;
}

.editor-menu-bar .is-active {
  background-color: rgba(255, 0, 0, 0.3);
}

.editor-contents {
  height: calc(60vh - 30px) !important;
  padding: 12px 8px;
}

.contents-label {
  position: absolute;
  color: rgba(255, 255, 255, 0.7);
  transition: all 0.4s;
  left: 8px;
  top: 4px;
}

.body--light .contents-label {
  color: rgba(0, 0, 0, 0.7);
}

.contents-label.focused {
  top: -4px;
  font-size: 0.8em;
}

.contents-label.invalid {
  color: #C10015;
  animation: wiggle 0.2s linear 1 alternate;
}

.textarea {
  color: #FFFFFF;
}

.body--light .textarea {
  color: #000000;
}
</style>