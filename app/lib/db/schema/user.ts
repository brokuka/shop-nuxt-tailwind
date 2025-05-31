import { boolean, integer, pgTable, text, timestamp, varchar } from 'drizzle-orm/pg-core'

export const user = pgTable('user', {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: text().notNull(),
  email: text().notNull().unique(),
  emailVerified: boolean().$defaultFn(() => false).notNull(),
  image: text(),
  createdAt: timestamp().$defaultFn(() => /* @__PURE__ */ new Date()).notNull(),
  updatedAt: timestamp().$defaultFn(() => /* @__PURE__ */ new Date()).notNull(),
})

export const image = pgTable('image', {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  userId: integer().notNull().references(() => user.id, { onDelete: 'cascade' }),
  url: varchar('url', { length: 255 }).notNull(), // URL изображения из Supabase Storage
  filePath: varchar('file_path', { length: 255 }).notNull(), // Путь к файлу в Supabase (для удаления)
  createdAt: timestamp().notNull(),
})
