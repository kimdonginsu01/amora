import clsx from "clsx";
import { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

interface ErrorObject {
  [key: string]: string | undefined;
}

export default function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const validateForm = (formData: any) => {
  const err: ErrorObject = {};
  for (let key in formData) {
    if (typeof formData[key] === "undefined") {
      err[key] = "Vui lòng nhập trường này";
    }

    if (typeof formData[key] === "number" && !Number.isFinite(formData[key])) {
      err[key] = "Vui lòng nhập trường này";
    }

    if (typeof formData[key] === "string") {
      const trimmedValue = formData[key]?.trim();
      if (!trimmedValue) {
        err[key] = "Vui lòng nhập trường này";
      }
    }
  }
  return err;
};
