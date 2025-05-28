<script setup lang="ts">
import type { SignInValues } from '~/lib/types'
import { ArrowLeft, Store } from 'lucide-vue-next'

const emit = defineEmits<{
  sendOtp: [string]
  signIn: [SignInValues, Ref<boolean>]
}>()

const isDialogOpened = defineModel<boolean>('open')
const isPinFormLoading = ref(false)

const isSecondStep = ref(false)
const email = ref('')

function sendOtpAction(value: string) {
  emit('sendOtp', value)
  email.value = value
  isSecondStep.value = true
}

function signInAction(value: string) {
  emit('signIn', {
    email: email.value,
    otp: value,
  }, ref(isPinFormLoading))
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
          <div class="w-full">
            <BlockAuthEmailForm @action="sendOtpAction" />
          </div>
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
              <span>на <span class="text-primary">{{ email }}</span></span>
              <span>Если во входящих нет, проверьте спам</span>
            </div>
          </UiDialogTitle>
        </UiDialogHeader>

        <UiDialogFooter>
          <BlockAuthPinForm :email :is-loading="isPinFormLoading" @action="signInAction" />
        </UiDialogFooter>
      </template>
    </UiDialogContent>
  </UiDialog>
</template>
