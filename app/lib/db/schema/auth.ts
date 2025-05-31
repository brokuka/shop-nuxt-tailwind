import { integer, pgTable, text, timestamp } from 'drizzle-orm/pg-core'
import { user } from './user'

export const session = pgTable('session', {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  expiresAt: timestamp().notNull(),
  token: text().notNull().unique(),
  createdAt: timestamp().notNull(),
  updatedAt: timestamp().notNull(),
  ipAddress: text(),
  userAgent: text(),
  userId: integer().notNull().references(() => user.id, { onDelete: 'cascade' }),
})

export const account = pgTable('account', {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  accountId: text().notNull(),
  providerId: text().notNull(),
  userId: integer().notNull().references(() => user.id, { onDelete: 'cascade' }),
  accessToken: text(),
  refreshToken: text(),
  idToken: text(),
  accessTokenExpiresAt: timestamp(),
  refreshTokenExpiresAt: timestamp(),
  scope: text(),
  password: text(),
  createdAt: timestamp().notNull(),
  updatedAt: timestamp().notNull(),
})

export const verification = pgTable('verification', {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  identifier: text().notNull(),
  value: text().notNull(),
  expiresAt: timestamp().notNull(),
  createdAt: timestamp().$defaultFn(() => new Date()),
  updatedAt: timestamp().$defaultFn(() => new Date()),
})
