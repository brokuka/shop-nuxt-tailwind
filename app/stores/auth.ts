import type { AcceptedAuthMethods, SignInValues } from '~/lib/types'
import { emailOTPClient } from 'better-auth/client/plugins'
import { createAuthClient } from 'better-auth/vue'

const authClient = createAuthClient({
  plugins: [
    emailOTPClient(),
  ],
})

export const useAuthStore = defineStore('useAuthStore', () => {
  const session = ref<Awaited<ReturnType<typeof authClient.useSession>> | null>(null)
  const user = computed(() => session.value?.data?.user)

  async function init() {
    const data = await authClient.useSession(useFetch)
    session.value = data
  }

  async function sendOtp(email: string) {
    await authClient.emailOtp.sendVerificationOtp({
      email,
      type: 'sign-in',
    })
  }

  async function signIn(method: AcceptedAuthMethods, values?: SignInValues) {
    if (method !== 'email') {
      await authClient.signIn.social({
        provider: method,
      })
    }

    if (!values)
      return

    await authClient.signIn.emailOtp({
      email: values.email,
      otp: values.otp,
    })
  }

  async function signOut() {
    await authClient.signOut()
  }

  return {
    init,
    signIn,
    sendOtp,
    signOut,
    user,
  }
})
