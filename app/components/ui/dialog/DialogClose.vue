<script setup lang="ts">
import type { DialogCloseProps } from 'reka-ui'
import { DialogClose } from 'reka-ui'

const props = defineProps<DialogCloseProps>()
</script>

<template>
  <UiButton size="icon" variant="ghost" class="top-4 right-4 [&_svg:not([class*='size-'])]:size-5 absolute" as-child>
    <DialogClose data-slot="dialog-close" v-bind="props">
      <slot />
    </DialogClose>
  </UiButton>
</template>
