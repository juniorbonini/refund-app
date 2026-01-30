import { Outlet } from "react-router";

import Header from "../../components/Header";

export function Layout() {
  return (
    <div className="mt-10 px-50 w-full">
        <Header />
      <Outlet />
    </div>
  );
}
