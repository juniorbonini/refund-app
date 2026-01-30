import { tv, type VariantProps } from "tailwind-variants";

export const buttonVariants = tv({
  base: "flex items-center justify-center transition rounded-md cursor-pointer",
  variants: {
    variant: {
      primary: "bg-green-100 hover:bg-green-200 text-gray-500",
      ghost: "bg-transparent ",
    },
    size: {
      sm: "px-1 w-full",
      md: "w-full px-7 py-3",
    },
    disabled: {
      true: "opacity-50 point-events-none",
    },
  },

  defaultVariants: {
    variant: "primary",
    size: "sm",
    disabled: false,
  },
});

export const buttonTextVariants = tv({
  base: "",
  variants: {
    variant: {
      primary: "text-white",
      ghost: "text-green-100",
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});

export type ButtonProps = Omit<
  React.ComponentProps<"button">,
  "size" | "disabled"
> &
  VariantProps<typeof buttonVariants> & {
    handling?: boolean;
  };
