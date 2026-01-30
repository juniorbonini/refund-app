import {
  errorVariants,
  type ErrorProps,
} from "../../../types/FormField/Error/error";

export function ErroFormField({ className, message }: ErrorProps) {
  if (!message) return null;
  return <span className={errorVariants({ className })}>{message}</span>;
}
