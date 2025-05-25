<script setup lang="ts">
import { toTypedSchema } from '@vee-validate/zod'
import { useForm } from 'vee-validate'
import { PIN_SLOT_LENGTH } from '~/lib/constants'
import { pinSchema } from '~/lib/types'

defineProps<{ email: string }>()

const { handleSubmit, setFieldValue } = useForm({
  validationSchema: toTypedSchema(pinSchema),
})

const onSubmit = handleSubmit(({ pin }) => {
  console.log('@pin', pin.join('')) // Объединяем массив в строку
})

const fieldOptions = {
  validateOnBlur: false,
  validateOnChange: false,
  validateOnInput: false,
  validateOnModelUpdate: false,
}

function updatePinInputValue(arr: string[]) {
  setFieldValue('pin', arr, false)
}

const selectedPinElement = ref<ComponentPublicInstance>()

function isVueComponent(element: unknown): element is ComponentPublicInstance {
  return typeof element === 'object' && element !== null && '$el' in element
}

function selectPinElement(index: number, element: unknown) {
  if (!element)
    return

  if (isVueComponent(element) && index === 0) {
    selectedPinElement.value = element
  }
}

onMounted(() => {
  selectedPinElement.value?.$el.focus()
})
</script>

<template>
  <form class="flex flex-col gap-4 w-full" @submit="onSubmit">
    <UiFormField v-slot="{ componentField, value }" name="pin" v-bind="fieldOptions">
      <UiFormItem>
        <UiFormControl>
          <UiPinInput
            id="pin-input" :model-value="value" placeholder="○" class="flex gap-2 items-center flex-1" otp
            :name="componentField.name" @update:model-value="updatePinInputValue"
          >
            <UiPinInputGroup class="w-full">
              <UiPinInputSlot
                v-for="(_, index) in PIN_SLOT_LENGTH" :key="index" :ref="(el) => selectPinElement(index, el)"
                class="flex-1" :index="index"
              />
            </UiPinInputGroup>
          </UiPinInput>
        </UiFormControl>
        <UiFormMessage />
      </UiFormItem>
    </UiFormField>

    <UiButton class="w-full" type="submit">
      Проверить
    </UiButton>
  </form>
</template>
