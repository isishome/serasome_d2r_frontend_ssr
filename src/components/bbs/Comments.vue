<script setup>
import { computed, ref, reactive, watch, onUnmounted, nextTick } from 'vue'
import { useQuasar } from 'quasar'
import { useStore } from 'stores/store'
import { isNew, parsDateTime } from 'src/common'
import { useI18n } from 'vue-i18n'

defineProps({
  data: {
    type: Array,
    required: true,
    default: () => []
  },
  authority: {
    type: Boolean,
    required: true
  },
  owner: {
    type: Boolean,
    required: true
  },
  all: {
    type: Number,
    default: 0
  },
  loading: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['process', 'refresh', 'all'])

// module variables
const $q = useQuasar()
const store = useStore()
const { t } = useI18n()

// common variables
const screen = computed(() => $q.screen)
const isDark = computed(() => $q.dark.isActive)

const dialog = ref(false)
const desktop = reactive({
  error: false,
  contents: null,
  secret: false
})
const isSwap = ref(false)
const info = reactive({
  mode: 'leave',
  error: false,
  cid: null,
  pcid: null,
  tcid: null,
  contents: null,
  secret: false,
  owner: false,
  delete: false
})

const signStatus = computed(() => store.signStatus)
const commentLabel = computed(() =>  info.mode === 'reply' || (info.mode === 'modify' && info.cid !== info.pcid) ? t('d2r.comments.replyContents') : t('d2r.comments.contents') )

watch(() => desktop.contents, (val) => {
  desktop.error = check(val)
  info.contents = val
})

watch(() => desktop.secret, (val) => {
  info.secret = val
})

const dom = (contents) => {
  return contents.replace(/\n/gi, '<br />')
}

const check = (val) => {
  if (info.mode === 'delete')
    return false

  const contents = val || ''
  return !(contents.trim() !== '' && /^[가-힣ㄱ-ㅎㅏ-ㅣa-zA-Z0-9\s\r\n!@#$%^&*()_=\-+,.<>/?;':"~`{}[\]]{1,500}$/.test(contents))
}

const hide = () => {
  if (isSwap.value !== true) {
    info.mode = 'leave'
    info.error = false
    info.cid = null
    info.pcid = null
    info.tcid = null
    info.contents = null
    info.secret = false
    info.owner = false
    info.delete = false
  }
  else
    isSwap.value = false
}

const show = (mode, newInfo) => {
  info.mode = mode
  if (mode === 'reply' && newInfo && (newInfo.pcid || newInfo.cid)) {
    info.contents = null
    info.cid = null
    info.pcid = newInfo.pcid || newInfo.cid
    info.tcid = newInfo.cid
    info.secret = newInfo.tsecret || newInfo.secret
  }
  else if (mode === 'modify' && newInfo) {
    info.cid = newInfo.cid
    info.contents = newInfo.contents
    info.secret = newInfo.secret
  }
  else if (mode === 'delete' && newInfo) {
    info.cid = newInfo.cid
  }
  else if (mode === 'change') {
    info.cid = newInfo.cid
    info.pcid = newInfo.pcid || newInfo.cid
    info.tcid = newInfo.cid
    info.contents = newInfo.contents
    info.secret = newInfo.tsecret || newInfo.secret
    info.owner = newInfo.owner
    info.delete = newInfo.delete
  }

  dialog.value = true
}

let timer
const swap = (mode) => {
  isSwap.value = true
  dialog.value = false
  timer = setTimeout(() => {
    show(mode, info)
  }, 200)
}

const process = () => {
  info.error = check(info.contents)
  if (info.error === false)
    emit('process', info)
}

const processDesktop = () => {
  desktop.error = check(desktop.contents)
  if (desktop.error === false) {
    info.secret = desktop.secret
    emit('process', info, true)
  }
}

const reset = () => {
  dialog.value = false
}

const resetDesktop = () => {
  desktop.contents = null
  desktop.secret = false

  nextTick(() => {
    desktop.error = false
  })
}

onUnmounted(() => {
  clearTimeout(timer)
})

defineExpose({
  reset,
  resetDesktop
})
</script>

<template>
  <div class="comments-wrap">
    <q-list>
      <template v-if="data.length > 0 || authority">
        <q-item-label header class="no-padding">
          <div class="row justify-between">
            <div></div>
            <q-btn class="text-weight-bold " :disable="loading" v-if="all > 0"
              :label="`${t('d2r.comments.all')} (${all})`" @click="emit('all')" flat dense />
            <q-btn dense flat round :disable="loading" icon="refresh" @click="emit('refresh')" />
          </div>
        </q-item-label>
      </template>
      <q-item v-if="loading === true" class="row justify-center">
        <q-spinner-dots color="grey-6" size="4em" />
      </q-item>
      <template v-for="(c, index) in data" :key="`ci_${c.cid}`">
        <q-separator v-if="index !== 0" :key="`cs_${c.cid}`" class="lt-sm separator" />
        <q-item :class="[screen.lt.sm ? 'q-pa-sm' : 'q-pa-md']">
          <q-item-section>
            <q-item-label class="row justify-between items-center">
              <div class="row justify-start items-center q-gutter-x-sm">
                <q-avatar rounded class="avatar text-uppercase" size="sm">
                  <q-icon v-if="c.secret === true && c.owner === false && owner === false" name="lock" />
                  <q-img v-else-if="c.avatar" :src="c.avatar" :ratio="1">
                    <template #error>
                      {{ c.name.substring(0, 1) }}
                    </template>
                  </q-img>
                  <template v-else>{{ c.name.substring(0, 1) }}</template>
                </q-avatar>
                <div class="info">
                  <div class="text-caption" t>{{ c.name }}</div>
                  <div class="text-caption row justify-start items-center q-gutter-x-xs">
                    <q-avatar round v-if="isNew(c.upd_date)" color="red-14" size="3px" />
                    <div>{{ parsDateTime(c.upd_date) }}</div>
                    <div v-if="c.modify">({{ t('d2r.comments.modify') }})</div>
                  </div>
                </div>
              </div>
              <div v-if="signStatus" class="row justify-end">
                <div v-if="(c.secret === false || c.owner === true) && c.delete === false"
                  class="lt-sm row justify-end q-gutter-x-md">
                  <q-btn dense flat round icon="more_vert" padding="6px">
                    <q-menu auto-close>
                      <q-btn-group push>
                        <q-btn v-if="c.owner === true && c.delete === false" :disable="loading" round dense flat
                          icon="delete" color="grey-6" @click="show('delete', c)" />
                        <q-btn v-if="c.owner === true && c.delete === false" :disable="loading" round dense flat
                          icon="edit" color="grey-6" @click="show('modify', c)" />
                        <q-btn v-if="c.delete === false && (c.secret === false || c.owner === true || c.reply)"
                          :disable="loading" round dense flat icon="reply" color="grey-6" @click="show('reply', c)" />
                      </q-btn-group>
                    </q-menu>
                  </q-btn>
                </div>
                <div class="gt-xs row justify-end q-gutter-x-sm">
                  <q-btn v-if="c.owner === true && c.delete === false" :disable="loading" round dense flat icon="delete"
                    color="grey-6" @click="show('delete', c)" />
                  <q-btn v-if="c.owner === true && c.delete === false" :disable="loading" round dense flat icon="edit"
                    color="grey-6" @click="show('modify', c)" />
                  <q-btn v-if="c.delete === false && (c.secret === false || c.owner === true || c.reply)"
                    :disable="loading" round dense flat icon="reply" color="grey-6" @click="show('reply', c)" />
                </div>
              </div>
            </q-item-label>
            <q-item-label class="q-pt-xs">
              <div class="row items-center q-gutter-x-xs">
                <q-icon v-if="c.secret === true && (c.owner === true || owner === true || c.towner === true)"
                  name="lock" />
                <div class="word-wrap" v-html="dom(c.contents)"></div>
              </div>
            </q-item-label>
          </q-item-section>
        </q-item>
        <template v-for="r in c.replies" :key="`ccs_${c.cid}_${r.cid}`">
          <q-separator class="lt-sm separator" />
          <q-item :class="['reply', screen.lt.sm ? 'q-pa-sm' : 'q-pa-md']">
            <q-item-section side top class="no-padding">
              <q-avatar size="sm" color="transparent" text-color="grey-7">L
              </q-avatar>
            </q-item-section>
            <q-item-section>
              <q-item-label class="row justify-between items-center">
                <div class="row justify-start items-center q-gutter-x-sm">
                  <q-avatar rounded class="avatar text-uppercase" size="sm">
                    <q-icon v-if="r.secret === true && r.owner === false && owner === false && r.towner !== true"
                      name="lock" />
                    <q-img v-else-if="r.avatar" :src="r.avatar" :ratio="1">
                      <template #error>
                        {{ c.name.substring(0, 1) }}
                      </template>
                    </q-img>
                    <template v-else>{{ c.name.substring(0, 1) }}</template>
                  </q-avatar>
                  <div class="info">
                    <div class="text-caption">{{ r.name }}</div>
                    <div class="text-caption row justify-start items-center q-gutter-x-xs">
                      <q-avatar v-if="isNew(r.upd_date)" color="red-14" size="3px" />
                      <div>{{ parsDateTime(r.upd_date) }}</div>
                      <div v-if="r.modify">({{ t('d2r.comments.modify') }})</div>
                    </div>
                  </div>
                </div>
                <div v-if="signStatus" class="row justify-end">
                  <div v-if="(r.secret === false || r.owner === true) && r.delete === false"
                    class="lt-sm row justify-end q-gutter-x-md">
                    <q-btn dense flat round icon="more_vert" padding="6px">
                      <q-menu auto-close>
                        <q-btn-group push>
                          <q-btn v-if="r.owner === true && r.delete === false" :disable="loading" round dense flat
                            icon="delete" color="grey-6" @click="show('delete', r)" />
                          <q-btn v-if="r.owner === true && r.delete === false" :disable="loading" round dense flat
                            icon="edit" color="grey-6" @click="show('modify', r)" />
                          <q-btn v-if="r.delete === false && (r.secret === false || r.owner === true || c.reply)"
                            :disable="loading" round dense flat icon="reply" color="grey-6" @click="show('reply', r)" />
                        </q-btn-group>
                      </q-menu>
                    </q-btn>
                  </div>
                  <div class="gt-xs row justify-end q-gutter-x-sm">
                    <q-btn v-if="r.owner === true && r.delete === false" :disable="loading" round dense flat
                      icon="delete" color="grey-6" @click="show('delete', r)" />
                    <q-btn v-if="r.owner === true && r.delete === false" :disable="loading" round dense flat icon="edit"
                      color="grey-6" @click="show('modify', r)" />
                    <q-btn v-if="r.delete === false && (r.secret === false || r.owner === true || c.reply)"
                      :disable="loading" round dense flat icon="reply" color="grey-6" @click="show('reply', r)" />
                  </div>
                </div>
              </q-item-label>
              <q-item-label class="q-pt-xs">
                <div class="row items-center no-wrap q-gutter-x-xs">
                  <q-icon v-if="r.secret === true && (r.owner === true || owner === true || r.towner === true)"
                    name="lock" />
                  <div>
                    <span v-if="r.tname" class="text-caption info q-mr-xs">@{{ r.tname }}</span>
                    <span class="word-wrap" style="line-height:1.6em" v-html="dom(r.contents)"></span>
                  </div>
                </div>
              </q-item-label>
            </q-item-section>
          </q-item>
        </template>
      </template>
      <q-item class="no-padding">
        <q-item-section class="q-py-md">
          <div class="row justify-center">
            <q-btn v-if="signStatus && authority" class="lt-sm" :disable="loading" dense :label="t('btn.leave')"
              @click="show('leave')" />
            <q-form autocorrect="off" autocapitalize="off" autocomplete="off" spellcheck="false" class="gt-xs textarea">
              <q-input :disable="loading" v-if="signStatus" v-model="desktop.contents" color="grey-6"
                :error="desktop.error" input-class="no-scroll" :bg-color="isDark ? 'black' : 'white'"
                :error-message="t('d2r.comments.message.invalidContents')" :hint="t('d2r.comments.contentsHint')"
                maxlength="500" :label="t('d2r.comments.contents')" spellcheck="false"
                @keydown.enter.exact="processDesktop" @keypress.enter.exact.prevent outlined no-error-icon clearable
                autogrow>
                <template #append>
                  <div class="">
                    <q-toggle :disable="loading" v-model="desktop.secret" unchecked-icon="lock_open" checked-icon="lock"
                      color="primary" />
                  </div>
                </template>
                <template #counter>
                  {{ info.contents ? info.contents.length : 0 }} / 500
                </template>
              </q-input>
            </q-form>
          </div>
        </q-item-section>
      </q-item>
    </q-list>
  </div>
  <q-dialog v-if="signStatus" v-model="dialog"
    :position="screen.lt.sm && info.mode === 'change' ? 'bottom' : 'standard'" @before-hide="hide">
    <q-card v-if="['leave', 'modify', 'reply'].includes(info.mode)" style="width:90vw;max-width:500px">
      <q-card-section>
        <q-form autocorrect="off" autocapitalize="off" autocomplete="off" spellcheck="false" autofocus>
          <q-input :disable="loading" v-if="signStatus" v-model="info.contents" color="grey-6" :error="info.error"
            input-class="no-scroll" :bg-color="isDark ? 'black' : 'white'"
            :error-message="t('d2r.comments.message.invalidContents')" :hint="t('d2r.comments.contentsHint')"
            maxlength="500" :label="t('d2r.comments.contents')" spellcheck="false" @keydown.enter.exact="process"
            @keypress.enter.exact.prevent outlined no-error-icon clearable autogrow autofocus>
            <template #append>
              <div class="">
                <q-toggle :disable="loading" v-model="info.secret" unchecked-icon="lock_open" checked-icon="lock"
                  color="primary" />
              </div>
            </template>
            <template #counter>
              {{ info.contents ? info.contents.length : 0 }} / 500
            </template>
          </q-input>
        </q-form>
      </q-card-section>
    </q-card>
    <q-card v-else>
      <q-card-section>
        {{ t('d2r.comments.message.confirmDelete') }}
      </q-card-section>
      <q-card-actions align="right">
        <q-btn :disable="loading" dense outline :label="t('btn.cancel')" v-close-popup />
        <q-btn :disable="loading" dense color="secondary" :label="t('btn.confirm')" @click="process" />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<style scoped>
.comments-wrap {
  width: 100%;
  background-color: rgba(0, 0, 0, .02);
  padding: 1em;
  border-radius: 4px;
}

.body--dark .comments-wrap {
  background-color: rgba(255, 255, 255, .02);
}

.separator {
  background-color: rgba(0, 0, 0, .05);
}


.body--dark .separator {
  background-color: rgba(255, 255, 255, .05);
}

.reply {
  background-color: rgba(0, 0, 0, .01);
}

.body--dark .reply {
  background-color: rgba(255, 255, 255, .01);
}

.textarea {
  width: 100% !important;
  height: 100% !important;
}

.info {
  color: rgba(150, 150, 150, 1);
}
</style>