import { NavLink, Outlet } from "react-router-dom";
import BusesListComponent from "./BusesListComponent";

function BusesLayout(){
    return(
        <>
        <div>
         
        <nav className="bts-layout-nav">
       <BusesListComponent/>
       
        </nav>
        </div>
        <Outlet/>
        </>
    )
}
export default BusesLayout;