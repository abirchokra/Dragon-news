import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";


const AuthLayout = () => {
    return (
        <div className="font-poppins bg-[rgb(236,234,234)]">
            <header className="py-3 max-w-7xl mx-auto">
                <Navbar></Navbar>
            </header>
            <Outlet></Outlet>
        </div>
    );
};

export default AuthLayout;