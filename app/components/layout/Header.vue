<script setup lang="ts">
import { User } from 'lucide-vue-next'

const isDialogOpened = ref(false)
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
      <UiTooltipProvider>
        <UiTooltip>
          <UiTooltipTrigger as-child>
            <UiButton size="icon" variant="outline" @click="isDialogOpened = !isDialogOpened">
              <User />
            </UiButton>
          </UiTooltipTrigger>

          <UiTooltipContent>
            <p>Вход</p>
          </UiTooltipContent>
        </UiTooltip>
      </UiTooltipProvider>

      <!-- <UiButton>Button2</UiButton>
      <UiButton>Button3</UiButton> -->
    </div>
  </header>

  <BlockAuthSignBase v-model:open="isDialogOpened" />
</template>
