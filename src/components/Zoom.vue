<script setup>
import { ref, reactive, watch, onMounted } from 'vue'
import { morph } from 'quasar'

const props = defineProps({
  images: {
    type: Array,
    default: () => []
  }
})

const indexZoomed = ref(void 0)
const imgLoaded = reactive({
  promise: Promise.resolve(),
  resolve: () => { },
  reject: () => { }
})
const imagesEl = reactive(props.images.map(i => i.element))
const imagesSrc = reactive(props.images.map(i => i.src))
const fullStyle = ref('')
const fullRef = ref(null)

const init = () => {
  for (const [index, img] of imagesEl.entries()) {
    if (img.style.cursor !== 'zoom-in') {
      img.style.cursor = 'zoom-in'
      img.addEventListener('click', function () {
        zoomImage(index)
      })
    }
    else
      continue
  }
}

const imgLoadedResolve = () => {
  imgLoaded.resolve()
  if (indexZoomed.value !== void 0 && imagesEl[indexZoomed.value]) {
    const base = 90
    const img = imagesEl[indexZoomed.value]
    const imgWidth = img.offsetWidth
    const imgHeight = img.offsetHeight
    const ratio = (imgWidth / imgHeight * base).toFixed(3)
    const rRatio = (imgHeight / imgWidth * base).toFixed(3)

    fullStyle.value = `width: ${base}vw;max-width: ${ratio}vh;height: ${rRatio}vw;max-height: ${base}vh`
  }
}

const imgLoadedReject = () => {
  imgLoaded.reject()
}

const zoomImage = (index) => {
  const indexZoomedState = indexZoomed.value
  let cancel = void 0

  imgLoaded.reject()

  const zoom = () => {
    if (index !== void 0 && index !== indexZoomedState) {
      imgLoaded.promise = new Promise((resolve, reject) => {
        imgLoaded.resolve = () => {
          imgLoaded.resolve = () => { }
          imgLoaded.reject = () => { }

          resolve()
        }
        imgLoaded.reject = () => {
          imgLoaded.resolve = () => { }
          imgLoaded.reject = () => { }

          reject()
        }
      })

      cancel = morph({
        from: imagesEl[index],
        to: fullRef.value.$el,
        onToggle: () => {
          indexZoomed.value = index
          imagesEl[index].style.opacity = 0.3
        },
        waitFor: imgLoaded.promise,
        duration: 400,
        hideFromClone: true,
        onEnd: end => {
          if (end === 'from' && indexZoomed.value === index)
            indexZoomed.value = void 0
        }
      })
    }
  }

  if (
    indexZoomedState !== void 0 &&
    (cancel === void 0 || cancel() === false)
  ) {
    morph({
      from: fullRef.value.$el,
      to: imagesEl[indexZoomedState],
      onToggle: () => {
        indexZoomed.value = void 0
        imagesEl[indexZoomedState].style.opacity = 1
      },
      duration: 200,
      keepToClone: true,
      onEnd: zoom
    })
  }
  else {
    zoom()
  }
}

watch(() => props.images, (val) => {
  imagesEl.splice(0, imagesEl.length)
  imagesSrc.splice(0, imagesSrc.length)
  imagesEl.push(...val.map(i => i.element))
  imagesSrc.push(...val.map(i => i.src))
  init()
}, {
  deep: true
})

onMounted(() => {
  init()
})
</script>

<template>
  <div v-show="indexZoomed !== void 0" class="q-pa-md">
    <div class="fixed-full image-gallery__blinder bg-black"
      :class="indexZoomed !== void 0 ? 'image-gallery__blinder--active' : void 0" @click="zoomImage()"></div>

    <q-img ref="fullRef" class="image-gallery__image image-gallery__image-full fixed-center" :style="fullStyle"
      :class="indexZoomed !== void 0 ? 'image-gallery__image-full--active' : void 0" :src="imagesSrc[indexZoomed]"
      @load="imgLoadedResolve" @error="imgLoadedReject" @click="zoomImage()" />
  </div>
</template>

<style scoped>
.image-gallery__image {
  width: 150px;
  max-width: 20vw;
  cursor: pointer;
}

.image-gallery__image-full {
  z-index: 2002;
  pointer-events: none;
  cursor: zoom-out;
}

.image-gallery__image-full--active {
  pointer-events: all;
}

.image-gallery__blinder {
  opacity: 0;
  z-index: 2000;
  pointer-events: none;
  transition: opacity 0.3s ease-in-out;
}

.image-gallery__blinder--active {
  opacity: 0.6;
  pointer-events: all;
}

.image-gallery__blinder--active+div>.image-gallery__image {
  z-index: 2001;
}
</style>