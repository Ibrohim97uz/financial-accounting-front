import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import * as XLSX from "xlsx";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function handleCloseModal() {
  document.getElementById("closeDialog")?.click();
}

export function AddSpaceToThousands(num: string) {
  if (!num) {
    return 0;
  }
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}
export function RemoveSpaceFromNumber(num: string) {
  return num.replace(/(?!\d) +(?=\d)/g, "");
}
export function AddZeroToOneDigit(num: number) {
  if (num >= 0 && num <= 9) {
    return `0${num}`;
  }
  return num;
}
