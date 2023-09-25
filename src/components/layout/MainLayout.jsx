import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

export default function MainLayout() {
    return (
      <>
            <Navbar/>
            <div className="max-w-[1400px] px-8 mx-auto">
                <Outlet/>
            </div>
      </>
  )
}
