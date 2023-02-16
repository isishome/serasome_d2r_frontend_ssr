<script setup>
import { computed, ref } from 'vue'
import { useQuasar } from 'quasar'
import { useI18n } from 'vue-i18n'

const $q = useQuasar()
const { t, tm, rt } = useI18n()
const slide = ref('first')

const imgURL = (path) => {
  return new URL(`/images/${ltmd.value}${path}.jpg`, import.meta.url).href
}

const ltmd = computed(() => {
  return $q.screen.lt.sm ? '1024_' : $q.screen.lt.md ? '1440_' : $q.screen.lt.lg ? '1920_' : ''
})

const textFlame = computed(() => {
  return $q.screen.lt.sm ? 'font-size:22px;line-height:23px;' : 'font-size:48px;'
})

const textSub = computed(() => {
  return $q.screen.lt.sm ? 'font-size:12px;line-height:16px;' : 'font-size:20px;'
})
</script>

<template>
  <div>
    <q-carousel class="full-width bg-transparent" :height="$q.screen.gt.xs ? '350px' : '150px'" animated
      :autoplay="10000" infinite v-model="slide" transition-duration="2000">
      <q-carousel-slide class="no-padding" v-for="(no, index) in tm('d2r.main.carousel')" :key="index"
        :name="rt(no.name)">
        <q-img :src="`/images/${rt(no.img)}.jpg`" :srcset="`/images/${rt(no.img)}_1x.jpg 400w,
        /images/${rt(no.img)}_2x.jpg 800w,
        /images/${rt(no.img)}_3x.jpg 1200w,
        /images/${rt(no.img)}_4x.jpg 1600w`" class="fit absolute" sizes="(max-width: 400px) 400w,
              (min-width: 400px) and (max-width: 800px) 800w,
              (min-width: 800px) and (max-width: 1200px) 1200w,
              (min-width: 1200px) 1600w" />
        <div class="full-width bg-transparent custom-caption"
          :class="$q.screen.lt.sm ? 'absolute-center no-padding' : 'absolute-center'">
          <div class="d2r-top-title q-mb-sm word-keep" :style="textFlame">{{ rt(no.title) }}</div>
          <div class="row justify-center">
            <div class="d2r-top-desc col-6 col-xs-10 word-keep" :style="textSub">{{ rt(no.sub) }}</div>
          </div>
        </div>
      </q-carousel-slide>
    </q-carousel>
  </div>
</template>

<style scoped>
.custom-caption {
  text-align: center;
  padding: 12px;
  color: white;
  background-color: rgba(0, 0, 0, .3);
}

.d2r-top-title {
  font-family: 'Kodia';
  /* font-family: 'New Rocker', 'Do Hyeon', cursive; */
  font-weight: bolder;
  color: #000000 !important;
  text-shadow: 1px 1px 1px rgb(0, 0, 0), 0 0 3px rgb(251, 255, 0), 0 -1px 5px rgb(255, 136, 0), 0 -3px 10px rgb(255, 38, 0);
  filter: invert(90%);
  -webkit-filter: invert(90%);
}

@media screen and (max-width:599px) {
  .d2r-top-title {
    text-shadow: 0 0 1px rgb(0, 0, 0), 1px 0 1px rgb(251, 255, 0), -1px -1px 1px rgb(255, 102, 0), 1px -1px 1px rgb(255, 38, 0);
  }
}

.d2r-top-desc {
  font-family: 'Kodia';
  /* font-family: 'Nosifer', 'Black Han Sans', cursive; */
  font-weight: bolder;
  text-shadow: 0 0 8px rgba(0, 0, 0, 1);
  color: rgb(240, 156, 0);
  text-shadow: 2px 0 3px rgb(0, 0, 0), 0 2px 3px rgb(0, 0, 0), 0 -2px 3px rgb(0, 0, 0), 0 -2px 3px rgb(0, 0, 0);
}
</style>