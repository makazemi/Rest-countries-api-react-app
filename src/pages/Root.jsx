import Header from "../components/Header";
import { Outlet } from "react-router-dom";
function Root() {
  return (
    <div className="bg-veryLightGray dark:bg-veryDarkBlueBg min-h-screen flex flex-col pb-8">
      <Header />
      <Outlet />ّ
    </div>
  );
}

export default Root;
