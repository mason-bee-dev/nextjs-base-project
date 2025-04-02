import { APP_ENVIRONMENTS } from "@/configs"
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

const { ASSETS } = APP_ENVIRONMENTS

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const determineImage = (image: string) => {
  if (image) {
    return `${ASSETS.ROOT_URL}/${image}`
  }
  return image
}
