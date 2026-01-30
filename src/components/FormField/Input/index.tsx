import { inputTextVariants, type InputProps } from "../../../types/Input/input";

export function InputText({ className, ...props }: InputProps) {
  return (
    <input
      type="text"
      className={inputTextVariants({ className })}
      {...props}
    />
  );
}
