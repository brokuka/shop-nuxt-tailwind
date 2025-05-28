import type { ClassValue } from 'clsx'
import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatToInitials(input: string): string {
  const clean = input.split('@')[0]?.trim() || ''

  if (!clean.length)
    return ''

  let result = clean[0]?.toUpperCase() || ''

  const spaceIndex = clean.indexOf(' ')

  if (spaceIndex !== -1 && spaceIndex + 1 < clean.length && clean[spaceIndex + 1]) {
    result += clean[spaceIndex + 1]?.toUpperCase()
  }
  else if (clean.length > 1 && clean[1]) {
    result += clean[1].toUpperCase()
  }

  return result
}

export function secondsToReadableTime(seconds: number, locale: string = 'ru'): string {
  if (!Number.isInteger(seconds) || seconds < 0)
    return locale === 'ru' ? '0 секунд' : '0'

  const hours = seconds / 3600 | 0
  const minutes = (seconds % 3600) / 60 | 0
  const remainingSeconds = seconds % 60
  const parts: string[] = []

  if (locale === 'ru') {
    if (hours) {
      const form = hours % 10 === 1 && hours % 100 !== 11 ? 'час' : hours % 10 >= 2 && hours % 10 <= 4 && (hours % 100 < 10 || hours % 100 > 20) ? 'часа' : 'часов'

      parts.push(`${hours} ${form}`)
    }

    if (minutes) {
      const form = minutes % 10 === 1 && minutes % 100 !== 11 ? 'минута' : minutes % 10 >= 2 && minutes % 10 <= 4 && (minutes % 100 < 10 || minutes % 100 > 20) ? 'минуты' : 'минут'

      parts.push(`${minutes} ${form}`)
    }

    if (remainingSeconds) {
      const form = remainingSeconds % 10 === 1 && remainingSeconds % 100 !== 11 ? 'секунда' : remainingSeconds % 10 >= 2 && remainingSeconds % 10 <= 4 && (remainingSeconds % 100 < 10 || remainingSeconds % 100 > 20) ? 'секунды' : 'секунд'

      parts.push(`${remainingSeconds} ${form}`)
    }
    return parts.join(' ') || '0 секунд'
  }

  const formatter = new Intl.NumberFormat(locale)

  if (hours)
    parts.push(`${formatter.format(hours)} hour${hours > 1 ? 's' : ''}`)

  if (minutes)
    parts.push(`${formatter.format(minutes)} minute${minutes > 1 ? 's' : ''}`)

  if (remainingSeconds)
    parts.push(`${formatter.format(remainingSeconds)} second${remainingSeconds > 1 ? 's' : ''}`)

  return parts.join(' ') || '0'
}
