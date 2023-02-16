<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const props = defineProps({
  modelValue: {
    type: Boolean,
    required: true
  },
  message: {
    type: String,
    defaut: null
  }
})

const emit = defineEmits(['update:modelValue', 'cancel', 'confirm'])

const { t } = useI18n()
const value = computed({
  get() {
    return props.modelValue
  },
  set(value) {
    emit('update:modelValue', value)
  }
})
</script>
<template>
  <div>
    <q-dialog v-model="value">
      <q-card class="d2r-confirm">
        <q-card-section>
          <span class="col q-ml-sm">{{message}}</span>
        </q-card-section>
        <q-card-actions align="right">
          <q-btn outline :label="t('btn.cancel')" @click="emit('cancel')" />
          <q-btn color="negative" :label="t('btn.confirm')" @click="emit('confirm')" />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>

<style scoped>

</style>