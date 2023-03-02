<script setup>
import { computed, reactive } from 'vue'
import { useQuasar } from 'quasar'
import { useRoute } from 'vue-router'
import { useStore } from 'stores/store'

const props = defineProps({
  loading: {
    type: Boolean,
    default: true
  },
  treeId: {
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
  skillPoints: {
    type: Number,
    required: true
  }
})
const emit = defineEmits(['reset'])

const $q = useQuasar()
const route = useRoute()
const store = useStore()

const part = route.params.part ? route.params.part.toLowerCase() : 'amazon'
const screen = computed(() => $q.screen)
const platform = computed(() => $q.platform)
const info = computed(() => store.skillsData[part].find(t => t.id === props.treeId))
const mobile = reactive({
  max: false,
  remove: false,
  info: false
})
const treePoints = computed(() => props.data[props.treeId] ? Object.keys(props.data[props.treeId]).reduce((a, c) => a + props.data[props.treeId][c], 0) : 0)

const reset = () => {
  mobile.max = false
  mobile.remove = false
  mobile.info = false
  emit('reset', props.treeId)
}
</script>

<template>
  <div class="row justify-center">
    <div class="relative-position" @contextmenu.prevent>
      <q-inner-loading :showing="loading" class="loading">
        <q-spinner-ball size="16%" color="secondary" />
      </q-inner-loading>
      <div class="tree-back">
        <div class="row justify-between items-center word-keep">
          <div class="col-1"></div>
          <div class="col row justify-center q-gutter-sm">
            <div v-for="(i, idx) in info.name.split(' ')" :key="idx" class="first-letter">
              {{ i }}</div>
          </div>
          <div class="col-1 text-right relative-position" style="z-index: 2;">
            <q-btn v-if="treePoints > 0" :size="platform.is.mobile ? '7px' : '10px'" padding="2px" unelevated dense
              color="secondary" class="text-weight-bold" @click="reset">
              <q-icon name="close" />
            </q-btn>
          </div>
        </div>
      </div>
      <div class="tree-center">
        <img :src="`/images/knowledge/skills/${part}/${info.id}/back.jpg`" class="img no-pointer-events" />
        <slot name="default" :mobile="mobile"></slot>
      </div>
      <div class="tree-back tree-bottom">
        <div v-if="platform.is.mobile" class="row justify-center items-center q-gutter-y-xs relative-position"
          :class="screen.lt.sm ? 'q-gutter-x-xs' : 'q-gutter-x-md'" style="z-index: 2;">
          <div>
            <q-checkbox dark dense size="xs" v-model="mobile.max" color="primary" :label="lang.max" />
          </div>
          <div>
            <q-checkbox dark dense size="xs" v-model="mobile.remove" color="primary" :label="lang.back" />
          </div>
          <div>
            <q-checkbox dark dense size="xs" v-model="mobile.info" color="primary" :label="lang.info" />
          </div>
          <div class="col-12">
            <q-separator color="grey-9" />
          </div>
          <div class="col-12"></div>
        </div>
        <div class="row justify-center items-center" :class="screen.gt.sm ? ' q-gutter-x-sm' : 'q-gutter-x-xs'">
          <div>{{ skillPoints }}</div>
          <div v-for="(r, idx) in lang.remain.split(' ')" :key="idx" class="first-letter">
            {{ r }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.tree-back {
  position: relative;
  max-width: 589px;
  font-size: 1.4em;
  line-height: 1.5em;
  color: rgb(230, 230, 230);
  text-align: center;
  padding: 10px;
  box-shadow: inset 0 0 10px 5px rgb(0, 0, 0), 0 0 0 1px rgb(146, 127, 100);
  background-size: cover !important;
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, .4), rgba(0, 0, 0, .1), rgba(10, 10, 10, .4)),
    url('/images/knowledge/skills/title.jpg');
}

.body--dark .tree-back {
  box-shadow: inset 0 0 10px 5px rgb(0, 0, 0), 0 0 0 1px rgb(46, 27, 0);
}

@media screen and (max-width:599px) {
  .tree-back {
    font-size: 1em;
    line-height: 2em;
  }
}

@media screen and (max-width:320px) {
  .tree-back {
    font-size: .6em;
  }
}

.tree-center {
  position: relative;
  max-width: 589px;
  line-height: 0;
  box-shadow: inset 0 0 0 1px rgb(0, 0, 0), 0 0 0 1px rgb(146, 127, 100);
}

.body--dark .tree-center {
  box-shadow: inset 0 0 0 1px rgb(0, 0, 0), 0 0 0 1px rgb(46, 27, 0);
}

.tree-bottom {
  font-weight: bold;
  color: rgb(97, 112, 131);
  text-shadow: none;
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, .7), rgba(10, 10, 10, 1)), url('/images/knowledge/skills/title.jpg');
}

.img {
  width: 100%;
}

.first-letter:lang(en)::first-letter {
  font-size: 1.4em;
}

.loading {
  z-index: 3;
  background-color: rgba(255, 255, 255, .1);
  -webkit-backdrop-filter: blur(2px);
  backdrop-filter: blur(2px);
}

.body--dark .loading {
  z-index: 3;

  background-color: rgba(0, 0, 0, .1);
}
</style>