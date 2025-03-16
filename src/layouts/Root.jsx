import { Outlet } from "react-router-dom";

import MainHeader from "../ui/MainHeader";
import MainAside from "../ui/MainAside";

function Root() {
  return (
    <div className="layout-root grid min-h-screen">
      <MainHeader />
      <Outlet />
      <MainAside />
    </div>
  );
}

export default Root;
