import { Outlet } from "react-router";

import Header from "../../components/Header";
import { Container } from "../../components/Container";
import { ContentHeader } from "../../components/ContentHeader";

export function Layout() {
  return (
    <div className="mt-10 px-50 w-full">
      <Header />
      <Container> 
        <ContentHeader />
        <Outlet />
      </Container>
    </div>
  );
}
