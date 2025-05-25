import * as z from 'zod'
import { PIN_SLOT_LENGTH } from './constants'

export const emailSchema = z.object({
  email: z.string().min(2).max(50).email(),
})

export type EmailSchemaType = z.infer<typeof emailSchema>

export const pinSchema = z.object({
  pin: z.array(z.string({ required_error: 'Код должен быть полностью введён' })).length(PIN_SLOT_LENGTH, { message: 'Код должен быть полностью введён' }),
})

export type PinSchemaType = z.infer<typeof pinSchema>
