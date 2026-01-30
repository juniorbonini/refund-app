import type React from "react";
import { tv, type VariantProps } from "tailwind-variants";

export const containerVariants = tv({
  base: "mx-auto mt-[3%] rounded-md bg-white p-10.5 h-fit",
  variants: {
    size: {
      small: "max-w-[32rem]",
      full: "max-w-[87.625rem]",
    },
  },
  defaultVariants: {
    size: "full"
  }
});

export type ContainerProps = React.ComponentProps<"div"> &
  VariantProps<typeof containerVariants> & {
    as?: keyof React.JSX.IntrinsicElements;
  };
