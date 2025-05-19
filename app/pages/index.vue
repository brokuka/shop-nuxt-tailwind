<script setup lang="ts">
import Autoplay from 'embla-carousel-autoplay'
import { Truck } from 'lucide-vue-next'

const AutoPlayPlugin = Autoplay({
  delay: 5000,
  stopOnMouseEnter: true,
  stopOnInteraction: false,
})
</script>

<template>
  <LayoutSection title="Main carousel">
    <UiCarousel class="relative">
      <UiCarouselContent>
        <UiCarouselItem v-for="(_, index) in 5" :key="index" class="basis-full">
          <div class="p-1">
            <UiCard>
              <UiCardContent class="p-6 flex h-[400px] aspect-square items-center justify-center">
                <span class="text-4xl font-semibold">{{ index + 1 }}</span>
              </UiCardContent>
            </UiCard>
          </div>
        </UiCarouselItem>
      </UiCarouselContent>
      <UiCarouselPrevious />
      <UiCarouselNext />
    </UiCarousel>
  </LayoutSection>

  <LayoutSection title="Banner">
    <div class="grid grid-cols-3 gap-5">
      <UiCard v-for="(_, index) in 3" :key="index">
        <UiCardContent class="p-6 flex h-[180px] aspect-square items-center justify-center">
          <span class="text-4xl font-semibold">{{ index + 1 }}</span>
        </UiCardContent>
      </UiCard>
    </div>
  </LayoutSection>

  <LayoutSection title="Main information">
    <div class="bg-white rounded-4xl flex gap-4 px-6 py-7">
      <div v-for="(_, index) in 3" :key="index">
        <div class="flex gap-6 justify-between">
          <Truck :size="100" class="shrink-0" />

          <div class="flex flex-col gap-1 text-balance">
            <span class="text-lg font-semibold">Бесплатная доставка в аптеку</span>
            <span class="opacity-50">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, aliquam ipsa!
              Officia eos velit
              eligendi sequi ut placeat, error excepturi. Animi at voluptatum asperiores? Fugiat rem deleniti sed vero
              quibusdam?</span>
          </div>
        </div>
      </div>
    </div>
  </LayoutSection>

  <LayoutSection title="Categories">
    <UiCarousel class="relative">
      <UiCarouselContent>
        <UiCarouselItem v-for="(_, index) in 7" :key="index" class="basis-1/5">
          <div class="p-1">
            <UiCard>
              <UiCardContent class="p-6 flex h-[220px] aspect-square items-center justify-center">
                <span class="text-4xl font-semibold">{{ index + 1 }}</span>
              </UiCardContent>
            </UiCard>
          </div>
        </UiCarouselItem>
      </UiCarouselContent>
      <UiCarouselPrevious />
      <UiCarouselNext />
    </UiCarousel>
  </LayoutSection>

  <LayoutSection title="Internal carousel">
    <UiCarousel class="relative" :plugins="[AutoPlayPlugin]">
      <UiCarouselContent>
        <UiCarouselItem v-for="(_, index) in 3" :key="index" class="basis-full">
          <div class="p-1">
            <UiCard>
              <UiCardContent class="p-6 flex h-[220px] aspect-square items-center justify-center">
                <span class="text-4xl font-semibold">{{ index + 1 }}</span>
              </UiCardContent>
            </UiCard>
          </div>
        </UiCarouselItem>
      </UiCarouselContent>
      <UiCarouselPrevious />
      <UiCarouselNext />
    </UiCarousel>
  </LayoutSection>

  <LayoutSection title="Акции" :sr-only="false" :view-all-btn="{ text: 'Посмотреть все акции', href: '/' }">
    <UiCarousel class="relative" :plugins="[AutoPlayPlugin]">
      <UiCarouselContent>
        <UiCarouselItem v-for="(_, index) in 6" :key="index" class="basis-1/3">
          <div class="p-1">
            <UiCard>
              <UiCardContent class="p-6 flex h-[182px] aspect-square items-center justify-center">
                <span class="text-4xl font-semibold">{{ index + 1 }}</span>
              </UiCardContent>
            </UiCard>
          </div>
        </UiCarouselItem>
      </UiCarouselContent>
      <UiCarouselPrevious />
      <UiCarouselNext />
    </UiCarousel>
  </LayoutSection>

  <LayoutSection title="Статьи" :sr-only="false" :view-all-btn="{ text: 'Посмотреть все статьи', href: '/' }">
    <UiCarousel class="relative" :plugins="[AutoPlayPlugin]">
      <UiCarouselContent>
        <UiCarouselItem v-for="(_, index) in 6" :key="index" class="basis-1/3">
          <div class="p-1">
            <BlockCardArticle
              href="/"
              :tags="['Полезно', 'Супер']"
              title="От кишечника к здоровой коже: разгадываем тайну частых обострений аллергических заболеваний кожи От кишечника к здоровой коже: разгадываем тайну частых обострений аллергических заболеваний кожи"
            >
              {{ index + 1 }}
            </BlockCardArticle>
          </div>
        </UiCarouselItem>
      </UiCarouselContent>
      <UiCarouselPrevious />
      <UiCarouselNext />
    </UiCarousel>
  </LayoutSection>
</template>
