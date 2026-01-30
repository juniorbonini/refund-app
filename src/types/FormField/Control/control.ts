import { tv, type VariantProps } from "tailwind-variants";

export const controlVariants = tv({
  base: "flex items-center gap-2 rounded-lg border transition-all bg-transparent",
  variants: {
    state: {
      default: "border-gray-100 ",
      error: "border-red-500",
      active: "border-green-200",
      filled: "border-green-200",
    },
    size: {
      sm: "h-12 py-3 px-3 w-45",
    },
  },
  defaultVariants: {
    state: "default",
    size: "sm",
  },
});

export type FormControlProps = React.HtmlHTMLAttributes<HTMLDivElement> &
  VariantProps<typeof controlVariants>;
