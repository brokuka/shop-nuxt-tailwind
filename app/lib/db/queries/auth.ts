import { eq } from 'drizzle-orm'
import { db } from '..'
import { user } from '../schema'

export async function checkIfUserExistsByEmail(email: string) {
  return db.select().from(user).where(eq(user.email, email))
}
