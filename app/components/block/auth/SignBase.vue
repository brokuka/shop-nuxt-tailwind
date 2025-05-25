<script setup lang="ts">
import type { EmailSchemaType } from '~/lib/types'
import { ArrowLeft, Store } from 'lucide-vue-next'

const emit = defineEmits<{
  signUp: []
  signIn: []
}>()

const isDialogOpened = defineModel<boolean>('open')

const isSecondStep = ref(false)
const signValues = ref<EmailSchemaType>({ email: '' })

function singUpAction(values: EmailSchemaType) {
  emit('signUp')
  isSecondStep.value = true
  signValues.value = values
}

function singInAction(values: EmailSchemaType) {
  emit('signIn')
  isSecondStep.value = true
  signValues.value = values
}

function backToFirstStep() {
  isSecondStep.value = false
}

function preventOutsideClick(event: Event) {
  if (!isSecondStep.value)
    return

  event.preventDefault()
}
</script>

<template>
  <UiDialog v-model:open="isDialogOpened">
    <UiDialogContent @pointer-down-outside="preventOutsideClick">
      <template v-if="!isSecondStep">
        <UiDialogHeader>
          <UiDialogTitle class="justify-center items-center flex flex-col gap-3">
            <Store :size="48" />
            <span class="text-xl">Вход</span>
          </UiDialogTitle>
        </UiDialogHeader>

        <UiDialogFooter>
          <UiTabs default-value="sign-in" class="w-full gap-4">
            <UiTabsList class="w-full">
              <UiTabsTrigger value="sign-in">
                Авторизация
              </UiTabsTrigger>

              <UiTabsTrigger value="sign-up">
                Регистрация
              </UiTabsTrigger>
            </UiTabsList>

            <UiTabsContent value="sign-in">
              <BlockAuthSignIn @action="singInAction" />
            </UiTabsContent>

            <UiTabsContent value="sign-up">
              <BlockAuthSignUp @action="singUpAction" />
            </UiTabsContent>
          </UiTabs>
        </UiDialogFooter>
      </template>

      <template v-else>
        <UiDialogHeader>
          <UiButton
            class="absolute top-4 left-4 [&_svg:not([class*='size-'])]:size-5" size="icon" variant="ghost"
            @click="backToFirstStep"
          >
            <ArrowLeft />
          </UiButton>

          <UiDialogTitle class="justify-center items-center flex flex-col gap-3">
            <span class="text-xl">Введите код из письма</span>

            <div class="flex flex-col justify-center items-center text-sm text-gray-500">
              <span>Отправили</span>
              <span>на <span class="text-primary">{{ signValues.email }}</span></span>
              <span>Если во входящих нет, проверьте спам</span>
            </div>
          </UiDialogTitle>
        </UiDialogHeader>

        <UiDialogFooter>
          <BlockAuthSignPin :email="signValues.email" />
        </UiDialogFooter>
      </template>
    </UiDialogContent>
  </UiDialog>
</template>
