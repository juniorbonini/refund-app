import type React from "react";
import { tv, type VariantProps } from "tailwind-variants";

export const labelVariants = tv({
  base: "block font-medium leading-4 transiton-colors",
  variants: {
    size: {
      md: "text-md",
    },
    tone: {
      default: "text-gray-200",
      active: "text-green-200 font-semibold",
      error: "text-red-500 font-semibold",
    },
  },
  defaultVariants: {
    size: "md",
    tone: "default",
  },
});

export type LabelProps = React.LabelHTMLAttributes<HTMLLabelElement> &
  VariantProps<typeof labelVariants> & {
    children?: React.ReactNode;
    className?: string;
  };
