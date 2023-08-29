import { Outlet } from "react-router-dom";
import Navs from "./navs";

const MainLayout = () => {
  return (
    <div>
      Hello world
      <Navs />
      <Outlet />
    </div>
  );
};

export default MainLayout;
