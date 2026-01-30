import {
  controlVariants,
  type FormControlProps,
} from "../../../types/FormField/Control/control";

export function FormFieldControl({
  className,
  state,
  ...props
}: FormControlProps) {
  return <div className={controlVariants({ state, className })} {...props} />;
}
