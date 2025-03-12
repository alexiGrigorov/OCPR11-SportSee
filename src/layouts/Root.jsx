import { Outlet } from "react-router-dom";

import MainHeader from "../ui/MainHeader";

function Root() {
  return (
    <>
      <MainHeader />
      <Outlet />
    </>
  );
}

export default Root;
