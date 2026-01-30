import { Outlet } from "react-router";

import Header from "../../components/Header";
import { Icon } from "../../components/Icon";

// @ts-expect-error: module declaration for SVG React import
import SearchIcon from "../../assets/icons/search.svg?react";

// @ts-expect-error: module declaration for SVG React import
import ArrowLeft from "../../assets/icons/caret-left.svg?react";

// @ts-expect-error: module declaration for SVG React import
import ArrowRight from "../../assets/icons/caret-right.svg?react";
import { Label } from "../../components/FormField/Label";

export function Layout() {
  return (
    <div className="mt-10 px-50 w-full">
      <Header />
      <div className="flex flex-col gap-3"> 
        <Icon svg={SearchIcon} className="fill-white" size="md" />
        <Icon svg={ArrowLeft} className="fill-white" size="md" />
        <Icon svg={ArrowRight} className="fill-white" size="md" />
      </div>
      <div>
        <Label tone="error">
           E-mail
        </Label>
      </div>
      <Outlet />
    </div>
  );
}
