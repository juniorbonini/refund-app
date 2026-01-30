import { iconVariants, type IconProps } from "../../types/Icon/icon";

export function Icon({
  animate,
  className,
  svg: SvgComponent,
  size,
  ...props
}: IconProps) {
  return (
    <SvgComponent className={iconVariants({ animate, className, size })} {...props} />
  );
}
