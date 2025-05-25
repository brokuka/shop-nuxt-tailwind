<script setup lang="ts">
import type { EmailSchemaType } from '~/lib/types'
import { toTypedSchema } from '@vee-validate/zod'
import { useForm } from 'vee-validate'
import { emailSchema } from '~/lib/types'

const emit = defineEmits<{
  action: [EmailSchemaType]
}>()

const form = useForm({
  validationSchema: toTypedSchema(emailSchema),
})

const onSubmit = form.handleSubmit((values) => {
  emit('action', values)
})
</script>

<template>
  <form class="flex flex-col gap-4" @submit="onSubmit">
    <UiFormField v-slot="{ componentField }" name="email">
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
