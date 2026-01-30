import React from "react";
import { textVariants, type TextProps } from "../../types/Text/text";

export function Text({
  size,
  color,
  weight,
  className,
  children,
  as = "span",
  ...props
}: TextProps) {
  return React.createElement(
    as,
    {
      className: textVariants({ size, color, weight, className }),
      ...props,
    },
    children,
  );
}
