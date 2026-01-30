import { tv, type VariantProps } from "tailwind-variants";

export const controlVariants = tv({
  base: "flex items-center gap-2 rounded-lg border-1 border-gray-300 px-3 h-12 bg-transparent transition-all",
  variants: {
    state: {
      default: "",
      active: "border-green-200",
      error: "border-red-500 focus-within:ring-red-500/30",
      disabled: "border-gray-200 opacity-60",
    },
  },
  defaultVariants: {
    state: "default",
  },
});

export type FormControlProps = React.HtmlHTMLAttributes<HTMLDivElement> &
  VariantProps<typeof controlVariants>;
