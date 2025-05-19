<script setup lang="ts">
import { ArrowRight } from 'lucide-vue-next'
import { cn } from '~/lib/utils'

interface ViewAllButton {
  text: string
  href: string
}

const { srOnly = true } = defineProps<{
  title: string
  srOnly?: boolean
  viewAllBtn?: ViewAllButton
}>()

interface ViewAllButton {
  text: string
  href: string
}
</script>

<template>
  <section class="mt-5">
    <div :class="cn({ 'sr-only': srOnly }, 'flex gap-5 mb-4')">
      <h2 class="font-medium text-2xl">
        {{ title }}
      </h2>

      <UiTooltipProvider v-if="viewAllBtn">
        <UiTooltip>
          <UiTooltipTrigger as-child>
            <UiButton size="icon" variant="outline" as-child class="rounded-full">
              <NuxtLink :to="viewAllBtn.href">
                <ArrowRight />
              </NuxtLink>
            </UiButton>
          </UiTooltipTrigger>

          <UiTooltipContent>
            <p>{{ viewAllBtn.text }}</p>
          </UiTooltipContent>
        </UiTooltip>
      </UiTooltipProvider>
    </div>

    <slot />
  </section>
</template>
