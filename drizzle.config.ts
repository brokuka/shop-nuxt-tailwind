import { defineConfig } from 'drizzle-kit'
import EnvConfig from './app/lib/env'

export default defineConfig({
  out: './app/lib/db/migrations',
  schema: './app/lib/db/schema/index.ts',
  dialect: 'postgresql',
  dbCredentials: {
		url: EnvConfig.DATABASE_URL,
  },
})
