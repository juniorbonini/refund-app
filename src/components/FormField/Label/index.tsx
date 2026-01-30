import {
  labelVariants,
  type LabelProps,
} from "../../../types/FormField/Label/label";

export function Label({
  size,
  tone,
  className,
  children,
  ...props
}: LabelProps) {
  return (
    <label className={labelVariants({ size, tone, className })} {...props}>
      {children}
    </label>
  );
}
