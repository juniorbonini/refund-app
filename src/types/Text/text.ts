import type React from "react";
import { tv, type VariantProps } from "tailwind-variants";

export const textVariants = tv({
  base: "font-sans text-gray-200",
  variants: {
    size: {
      xs: "text-sx leading-4",
      sm: "text-sm leading-5",
      md: "text-md leading-6",
      lg: "text-lg leading-6",
      xl: "text-xl leading-6",
    },
    color: {
      title: "text-gray-100",
    },
    weight: {
      regular: "font-normal",
      medium: "font-medium",
      semiBold: "font-semibold",
      bold: "font-bold",
    },
  },

  defaultVariants: {
    size: "sm",
    color: "title",
    weight: "regular",
  },
});

export type TextProps = VariantProps<typeof textVariants> & {
  as?: keyof React.JSX.IntrinsicElements;
  className?: string;
  children?: React.ReactNode;
};
