import React from "react";
import { tv, type VariantProps } from "tailwind-variants";

export const iconVariants = tv({
  base: "flex items-center justify-center rounded-md transition bg-green-100 hover:bg-green-200 cursor-pointer",
  variants: {
    animate: {
      false: "",
      true: "animate-spin",
    },
    size: {
        sm: "w-8 h-8 px-1 py-1",
        md: "w-10 h-10 px-2 py-2"
    },
    disabled: {
      true: "opacity-50 pointer-events-none",
    },
  },

  defaultVariants: {
    animate: false,
    disabled: false,
    size: "sm"
  },
});

export type IconProps = VariantProps<typeof iconVariants> & React.ComponentProps<"svg"> & {
  svg: React.FC<React.ComponentProps<"svg">>;
};
