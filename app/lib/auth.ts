import { betterAuth } from 'better-auth'
import { drizzleAdapter } from 'better-auth/adapters/drizzle'
import { emailOTP } from 'better-auth/plugins/email-otp'
import nodemailer from 'nodemailer'
import EnvConfig from '~/lib/env'
import { PIN_EXPIRES_IN, PIN_SLOT_LENGTH } from './constants'
import { db } from './db'
import { secondsToReadableTime } from './utils'

export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: 'pg',
  }),
  advanced: {
    database: {
      generateId: false,
    },
  },
  plugins: [
    emailOTP({
      otpLength: PIN_SLOT_LENGTH,
      expiresIn: PIN_EXPIRES_IN,
      async sendVerificationOTP({ email, otp }) {
        const transporter = nodemailer.createTransport({
          service: 'gmail',
          auth: {
            type: 'OAuth2',
            user: EnvConfig.GOOGLE_USER,
            clientId: EnvConfig.GOOGLE_CLIENT_ID,
            clientSecret: EnvConfig.GOOGLE_CLIENT_SECRET,
            refreshToken: EnvConfig.GOOGLE_REFRESH_TOKEN,
          },
        })

        const mailOptions = {
          from: EnvConfig.GMAIL_USER,
          to: email,
          subject: 'Ваш код подтверждения',
          html:
					`
						<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
							<h2>Код подтверждения</h2>
							<p>Ваш одноразовый код подтверждения:</p>
							<h3 style="background: #f0f0f0; padding: 15px; text-align: center;">${otp}</h3>
							<p>Код действителен в течение ${secondsToReadableTime(PIN_EXPIRES_IN)}.</p>
							<p>Если вы не запрашивали этот код, проигнорируйте это письмо.</p>
						</div>
					`,
        }

        await transporter.sendMail(mailOptions)
      },
    }),
  ],
})
