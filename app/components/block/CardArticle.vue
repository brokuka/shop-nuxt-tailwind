<script setup lang="ts">
import { Calendar, Eye } from 'lucide-vue-next'

const { tagAlign = 'top-left' } = defineProps<{
  tags?: string[]
  tagAlign?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'
  title: string
  href: string
}>()
</script>

<template>
  <article>
    <NuxtLink :to="href">
      <UiCard class="relative group hover:border-primary/30 transition-colors h-[325px]">
        <div class="absolute top-5 left-5 flex gap-1 pointer-events-none">
          <span v-for="tag in tags" :key="tag" class="p-2 rounded-md text-xs bg-primary text-white font-bold">
            {{ tag }}
          </span>
        </div>

        <UiCardContent class="p-6 flex h-[182px] aspect-square items-center justify-center select-none">
          <span class="text-4xl font-semibold">
            <slot />
          </span>
        </UiCardContent>

        <div
          class="bg-primary rounded-xl flex flex-col justify-between gap-2.5 absolute bottom-0 text-white px-3 pt-3 w-full h-1/3 group-hover:h-1/2 pb-2 transition-all"
        >
          <h3 class="font-medium text-xl line-clamp-2 group-hover:line-clamp-4">
            {{ title }}
          </h3>

          <div class="flex justify-between">
            <div class="flex gap-2 text-sm items-center">
              <Calendar :size="16" />
              15.04.25
            </div>

            <div class="flex gap-2 text-sm items-center">
              <Eye :size="20" />
              2159
            </div>
          </div>
        </div>
      </UiCard>
    </NuxtLink>
  </article>
</template>
