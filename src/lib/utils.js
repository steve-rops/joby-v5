import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const isNew = (date, threshold = 7) => {
  const createdAt = new Date(date).getTime();
  const now = new Date().getTime();

  const msPerDay = 1000 * 60 * 60 * 24;
  const dif = (now - createdAt) / msPerDay;

  return dif <= threshold;
};
