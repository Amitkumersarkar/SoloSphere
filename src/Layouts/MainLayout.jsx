import { Outlet } from "react-router-dom";
import Navbar from "../Components/Header/Navbar";
import Footer from "../Components/Footer/Footer";

const MainLayout = () => {

    return (
        <div>
            <Navbar></Navbar>
            <div className="min-h-[calc(100vh-306px)]">
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;