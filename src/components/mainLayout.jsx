import { Outlet } from "react-router-dom";
import Navs from "./navs";
import AppTitle from "./AppTitle";

const MainLayout = () => {
  return (
    <div>
      <AppTitle />
      Hello world
      <Navs />
      <Outlet />
    </div>
  );
};

export default MainLayout;