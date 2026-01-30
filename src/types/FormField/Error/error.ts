import type React from "react";
import { tv } from "tailwind-variants";

export const errorVariants = tv({
  base: "mt-1 text-xs text-red-500 leading-tight",
});

export type ErrorProps = {
  message?: React.ReactNode;
  className?: string;
};
