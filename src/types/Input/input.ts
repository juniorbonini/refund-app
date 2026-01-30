import type React from "react";
import { tv } from "tailwind-variants";

export const inputTextVariants = tv({
  base: "flex-1 bg-transparent outline-none text-sm text-gray-100 placeholder:text-gray-200",
});

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>;
