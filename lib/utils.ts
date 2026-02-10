import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Utility to conditionally merge TailwindCSS class names
 * Used across the entire application (Shadcn standard)
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}
