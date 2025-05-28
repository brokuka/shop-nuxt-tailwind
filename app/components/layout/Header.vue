<script setup lang="ts">
import type { SignInValues } from '~/lib/types'
import { User } from 'lucide-vue-next'

const isDialogOpened = ref(false)

const authStore = useAuthStore()

async function signIn(values: SignInValues, isLoading: Ref<boolean>) {
  isLoading.value = true

  await authStore.signIn('email', values)

  isLoading.value = false
}

async function sendOtp(email: string) {
  await authStore.sendOtp(email)
}
</script>

<template>
  <!-- banner -->
  <!-- top header -->
  <header class="bg-white gap-4 grid auto-cols-max grid-cols-9 items-center container">
    <div class="flex flex-col gap-1">
      <span class="text-lg font-bold">apteka</span>
      <span class="text-sm">Интернет-аптека</span>
    </div>

    <UiButton class="basis-full">
      Каталог
    </UiButton>

    <div class="col-span-5">
      <UiInput placeholder="Найти товар" />
    </div>

    <div class="justify-end flex gap-2 col-span-2">
      <UiTooltipProvider v-if="!authStore.user">
        <UiTooltip>
          <UiTooltipTrigger as-child>
            <UiButton size="icon" variant="outline" @click="isDialogOpened = !isDialogOpened">
              <User />
            </UiButton>

            <UiTooltipContent>
              <p>
                Вход
              </p>
            </UiTooltipContent>
          </uitooltiptrigger>
        </UiTooltip>
      </UiTooltipProvider>

      <BlockHeaderMiniProfile v-else v-bind="authStore.user" />

      <!-- <UiButton>Button2</UiButton>
      <UiButton>Button3</UiButton> -->
    </div>
  </header>

  <BlockAuthSignBase v-if="!authStore.user" v-model:open="isDialogOpened" @sign-in="signIn" @send-otp="sendOtp" />
</template>
