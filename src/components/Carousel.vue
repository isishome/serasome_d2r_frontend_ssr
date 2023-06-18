<script setup>
import { computed, ref, watch } from 'vue'
import { useQuasar } from 'quasar'
import { useI18n } from 'vue-i18n'
import { useRoute } from 'vue-router'
import { useStore } from 'stores/store'
import AdSense from 'components/AdSense.vue'

// environment variables
const isProduction = import.meta.env.PROD

const $q = useQuasar()
const { t, tm, rt } = useI18n()
const route = useRoute()
const store = useStore()
const routeName = computed(() => route.name)
const noAD = computed(() => store.noAD)
const key = computed(() => store.key)

const slide = ref('first')

const textFlame = computed(() => {
  return $q.screen.lt.sm ? 'font-size:22px;line-height:23px;' : 'font-size:48px;'
})

const textSub = computed(() => {
  return $q.screen.lt.sm ? 'font-size:12px;line-height:16px;' : 'font-size:20px;'
})

const key2 = ref(0)
const width = computed(() => $q.screen.width < 758 ? 320 : $q.screen.width < 960 ? 728 : $q.screen.width < 1000 ? 930 : $q.screen.width < 1010 ? 970 : 980)
const height = computed(() => $q.screen.width < 758 ? 100 : $q.screen.width < 960 ? 90 : $q.screen.width < 1000 ? 180 : $q.screen.width < 1010 ? 90 : 120)

watch(width, () => {
  key2.value++
})
</script>

<template>
  <div v-if="routeName === 'd2r-main'" class="wrap-carousel">
    <q-carousel class="carousel full-width bg-transparent" :height="$q.screen.gt.xs ? '400px' : '200px'" animated
      :autoplay="10000" infinite v-model="slide" transition-duration="2000">
      <q-carousel-slide class="no-padding" v-for="(no, index) in tm('d2r.main.carousel')" :key="index"
        :name="rt(no.name)">
        <q-img :src="`/images/${rt(no.img)}.jpg`"
          :srcset="`/images/${rt(no.img)}_1x.jpg 400w, /images/${rt(no.img)}_2x.jpg 800w, /images/${rt(no.img)}_3x.jpg 1200w, /images/${rt(no.img)}_4x.jpg 1600w`"
          class="fit absolute"
          sizes="(max-width: 400px) 400w, (min-width: 400px) and (max-width: 800px) 800w, (min-width: 800px) and (max-width: 1200px) 1200w, (min-width: 1200px) 1600w" />
        <div class="full-width bg-transparent custom-caption absolute"
          :style="$q.screen.lt.sm ? 'no-padding' : 'top:50%;transform:translateY(-100%)'">
          <div class="d2r-top-title q-mb-sm word-keep" :style="textFlame">{{ rt(no.title) }}</div>
          <div class="row justify-center">
            <div class="d2r-top-desc col-6 col-xs-10 word-keep" :style="textSub">{{ rt(no.sub) }}</div>
          </div>
        </div>
      </q-carousel-slide>
    </q-carousel>
  </div>
  <div v-else-if="!noAD" class="row justify-center ad-wrap">
    <div class="col-12 col-lg-8 col-xl-7 text-center">
      <AdSense v-if="$q.platform.is.mobile || $q.screen.lt.sm" class="text-center"
        data-ad-client="ca-pub-5110777286519562" data-ad-slot="7884972370" data-ad-format="auto"
        data-full-width-responsive="true" :height="$q.screen.width <= 300 ? '50px' : '100px'"
        :data-adtest="isProduction ? null : 'on'" :key="`m-${key}${key2}`" />
      <AdSense v-else class="text-center" data-ad-client="ca-pub-5110777286519562" data-ad-slot="7884972370"
        :data-adtest="isProduction ? null : 'on'" :width="`${width}px`" :height="`${height}px`"
        :key="`d-${key}${key2}`" />
    </div>
  </div>
</template>

<style scoped>
.ad-wrap {
  margin-top: 8px;
  line-height: 0;
}

.wrap-carousel {
  height: 250px;
  position: relative;
}

.carousel::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  height: 100%;
  background: linear-gradient(to bottom, transparent 50%, #080808);
}

.body--light .carousel::after {
  background: linear-gradient(to bottom, transparent 50%, #ffffff);
}


.custom-caption {
  text-align: center;
  padding: 12px;
  color: white;
  background-color: rgba(0, 0, 0, .3);
}

.d2r-top-title {
  font-weight: bolder;
  color: #000000 !important;
  text-shadow: 1px 1px 1px rgb(0, 0, 0), 0 0 3px rgb(251, 255, 0), 0 -1px 5px rgb(255, 136, 0), 0 -3px 10px rgb(255, 38, 0);
  filter: invert(90%);
  -webkit-filter: invert(90%);
}

@media screen and (max-width:599px) {
  .wrap-carousel {
    height: 100px;
  }

  .d2r-top-title {
    text-shadow: 0 0 1px rgb(0, 0, 0), 1px 0 1px rgb(251, 255, 0), -1px -1px 1px rgb(255, 102, 0), 1px -1px 1px rgb(255, 38, 0);
  }
}

.d2r-top-desc {
  font-weight: bolder;
  text-shadow: 0 0 8px rgba(0, 0, 0, 1);
  color: rgb(240, 156, 0);
  text-shadow: 2px 0 3px rgb(0, 0, 0), 0 2px 3px rgb(0, 0, 0), 0 -2px 3px rgb(0, 0, 0), 0 -2px 3px rgb(0, 0, 0);
}
</style>