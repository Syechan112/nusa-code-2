import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

const WA_NUMBER = '+628979673149'

export function buildWhatsAppUrl(text) {
  const encodedText = encodeURIComponent(text)
  return `https://wa.me/${WA_NUMBER}?text=${encodedText}`
}

export function openWhatsApp(text) {
  const url = buildWhatsAppUrl(text)
  window.open(url, '_blank', 'noopener,noreferrer')
}

export const WA_LABEL = 'WhatsApp'