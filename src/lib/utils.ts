import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

// https://github.com/lukeed/clsx?tab=readme-ov-file#usage
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
