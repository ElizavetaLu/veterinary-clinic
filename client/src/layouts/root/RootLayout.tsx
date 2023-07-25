import { Outlet } from "react-router-dom";
import "./RootLayout.scss";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

const RootLayout = () => {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
};

export default RootLayout;
