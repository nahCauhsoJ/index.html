import Navbar from "../Components/NavigationBar/Navbar.js";
import { Outlet } from "react-router-dom";

export default function Layout() {
    return (
        <>
            <Navbar />
            <Outlet />
        </>
    )
}