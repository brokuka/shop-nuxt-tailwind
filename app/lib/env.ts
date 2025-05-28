import * as z from 'zod'

const EnvConfig = z.object({
  DATABASE_URL: z.string(),
  BETTER_AUTH_SECRET: z.string(),
  BETTER_AUTH_URL: z.string(),
  GITHUB_CLIENT_ID: z.string(),
  GITHUB_CLIENT_SECRET: z.string(),
  RESEND_SECRET: z.string(),
  GMAIL_USER: z.string(),
  GMAIL_APP_PASSWORD: z.string(),
  GMAIL_PASSWORD: z.string(),

  GOOGLE_USER: z.string(),
  GOOGLE_CLIENT_ID: z.string(),
  GOOGLE_CLIENT_SECRET: z.string(),
  GOOGLE_REFRESH_TOKEN: z.string(),
})

export type EnvConfigType = z.infer<typeof EnvConfig>

// eslint-disable-next-line node/prefer-global/process
export default EnvConfig.parse(process.env)
