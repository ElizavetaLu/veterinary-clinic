import { Outlet } from "react-router-dom";
import ScrollToTop from "../../components/scroll-to-top/ScrollToTop";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import "./RootLayout.scss";

const RootLayout = () => {
    return (
        <>
            <Header />
            <ScrollToTop />
            <div className="outlet">
                <Outlet />
            </div>
            <Footer />
        </>
    )
};

export default RootLayout;
