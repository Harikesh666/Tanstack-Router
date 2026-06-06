import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function wait(): Promise<void> {
    const delay: number = 1000;
    return new Promise((resolve) => setTimeout(resolve, delay));
}
