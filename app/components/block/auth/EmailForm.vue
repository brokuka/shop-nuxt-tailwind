<script setup lang="ts">
import { toTypedSchema } from '@vee-validate/zod'
import { useForm } from 'vee-validate'

import { emailSchema } from '~/lib/schemas'

const emit = defineEmits<{
  action: [string]
}>()

const form = useForm({
  validationSchema: toTypedSchema(emailSchema),
})

const fieldOptions = {
  validateOnBlur: false,
  validateOnChange: false,
  validateOnInput: false,
  validateOnModelUpdate: false,
}

const onSubmit = form.handleSubmit((values) => {
  emit('action', values.email)
})
</script>

<template>
  <form class="flex flex-col gap-4" @submit="onSubmit">
    <UiFormField v-slot="{ componentField }" name="email" v-bind="fieldOptions">
      <UiFormItem>
        <UiFormLabel>Почта</UiFormLabel>

        <UiFormControl>
          <UiInput type="text" placeholder="igor@mail.ru" v-bind="componentField" />
        </UiFormControl>

        <UiFormMessage />
      </UiFormItem>
    </UiFormField>

    <UiButton type="submit" class="w-full">
      Войти
    </UiButton>
  </form>
</template>
