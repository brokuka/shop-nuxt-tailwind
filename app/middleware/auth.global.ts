export default defineNuxtRouteMiddleware(async (to) => {
  const authStore = useAuthStore()

  await authStore.init()

  if (!authStore.user && to.path.startsWith('/user')) {
    return navigateTo('/')
  }
})
