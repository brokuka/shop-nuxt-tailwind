<script setup lang="ts">
import { formatToInitials } from '~/lib/utils'

const props = defineProps<{
  image?: string | null
  name: string
  email: string
}>()

const authStore = useAuthStore()

const ITEMS = [
  {
    label: 'Cart',
    props: {
      to: '/',
    },
  },
  {
    label: 'Account Settings',
    props: {
      to: '/',
    },
  },
  {
    label: 'Home Page',
    props: {
      to: '/',
    },
  },
  {
    label: 'Log Out',
    props: {
      click: () => authStore.signOut(),
    },
  },
]

const Link = resolveComponent('NuxtLink')

const avatarFallbackText = computed(() => props.name.length ? props.name : props.email)
</script>

<template>
  <UiDropdownMenu>
    <UiDropdownMenuTrigger as-child>
      <UiButton size="icon" variant="ghost" class="rounded-full">
        <UiAvatar>
          <UiAvatarImage v-if="image" :src="image" :alt="name" />
          <UiAvatarFallback>{{ formatToInitials(avatarFallbackText) }}</UiAvatarFallback>
        </UiAvatar>
      </UiButton>
    </UiDropdownMenuTrigger>

    <UiDropdownMenuContent as="ul">
      <UiDropdownMenuLabel class="text-muted-foreground">
        {{ email }}
      </UiDropdownMenuLabel>

      <UiDropdownMenuSeparator />

      <template v-for="(item, index) in ITEMS" :key="item.label">
        <UiDropdownMenuItem as="li" class="p-0">
          <Component
            :is="item.props.to ? Link : 'button'" v-bind="item.props"
            class="p-2 text-gray-600 hover:text-primary w-full text-left cursor-pointer" @click="item.props.click"
          >
            {{ item.label }}
          </Component>
        </UiDropdownMenuItem>

        <UiDropdownMenuSeparator v-if="index === ITEMS.length - 3" />
      </template>
    </UiDropdownMenuContent>
  </UiDropdownMenu>
</template>
