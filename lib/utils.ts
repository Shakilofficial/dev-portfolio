import clsx from "clsx";
import { twMerge } from "tailwind-merge";

type ClassValue = string | number | boolean | null | undefined;

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(...inputs));
}
