import { buttonVariants, type ButtonProps } from "../../types/Button/button";
import { textVariants } from "../../types/Text/text";
import { Text } from "../Text";

export function Button({
  variant,
  size,
  disabled,
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={buttonVariants({ variant, size, disabled, className })}
      disabled={disabled as boolean}
      {...props}
    >
      <Text size="md" className={textVariants({ size })}>
        {children}
      </Text>
    </button>
  );
}
