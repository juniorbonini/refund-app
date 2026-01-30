import React from "react";
import {
  containerVariants,
  type ContainerProps,
} from "../../types/Container/container";

export function Container({
  as = "div",
  className,
  size,
  children,
  ...props
}: ContainerProps) {
  return React.createElement(
    as,
    {
      className: containerVariants({ size, className }),
      ...props,
    },
    children,
  );
}
