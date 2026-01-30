import { cx } from "tailwind-variants";
import { buttonTextVariants } from "../../types/Button/button";
import { Button } from "../Button";
import { Text } from "../Text";

// @ts-expect-error: module declaration for SVG React import
import LogoImage from "../../assets/icons/logo.svg?react";

export default function Header() {
  return (
    <div className="flex items-center justify-between">
      <div>
        <LogoImage />
      </div>

      <div className="flex gap-4">
        <Button variant="ghost">
          <Text className={cx(
              "truncate",
              buttonTextVariants({ variant: "ghost" }),
            )}>
            Solicitções de reembolso
          </Text>
        </Button>
        <Button variant="primary" size="md">
          <Text
            className={cx(
              "truncate",
              buttonTextVariants({ variant: "primary" }),
            )}
          >
            Nova solicitação
          </Text>
        </Button>
      </div>
    </div>
  );
}
