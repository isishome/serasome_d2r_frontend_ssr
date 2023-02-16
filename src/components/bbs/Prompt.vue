<script setup>
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'

const props = defineProps({
  modelValue: {
    type: Boolean,
    required: true
  },
  title: {
    type: String,
    default: 'Confirm'
  },
  contents: {
    type: String,
    default: ''
  },
  prefix: {
    type: String,
    default: ''
  },
  rules: {
    type: Array,
    default: () => { }
  },
  confirmLabel: {
    type: String,
    default: null
  },
  color: {
    type: String,
    default: ''
  },
  dark: {
    type: Boolean,
    default: false
  },
  noPersistent: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['update:modelValue', 'cancel', 'ok'])

const { t } = useI18n()
const confirmLabelText = computed(() => props.confirmLabel ? props.confirmLabel : t('btn.confirm'))
const value = computed({
  get() {
    return props.modelValue
  },
  set(value) {
    emit('update:modelValue', value)
  }
})

const url = ref(props.contents)
</script>
<template>
  <div>
    <q-dialog v-model="value" :position="$q.screen.lt.md ? 'bottom' : 'standard'" :persistent="!noPersistent"
      @hide="cancel">
      <q-card :dark="dark" bordered class="full-width">
        <q-card-section>
          <div class="text-h6">{{title}}</div>
        </q-card-section>
        <q-card-section class="q-pt-none">
          <q-input :dark="dark" ref="contents" :color="color" v-model="url" :rules="rules" :prefix="prefix"
            @keyup.enter="emit('ok', url)" autofocus outlined hide-hint dense no-error-icon hide-bottom-space>
            <template v-slot:append>
              <q-icon v-if="url !== ''" name="close" @click="url = ''" class="cursor-pointer" />
            </template>
          </q-input>
        </q-card-section>
        <q-card-actions align="right">
          <q-btn flat :label="t('btn.cancel')" @click="emit('cancel')" />
          <q-btn flat :label="confirmLabelText" @click="emit('ok', url)" />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>
<style scoped>

</style>