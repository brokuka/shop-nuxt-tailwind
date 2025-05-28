import { neon } from '@neondatabase/serverless'
import { drizzle } from 'drizzle-orm/neon-http'
import EnvConfig from '../env'
import * as schema from './schema'

const sql = neon(EnvConfig.DATABASE_URL)
export const db = drizzle({ client: sql, schema })
