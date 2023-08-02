import { Outlet } from "react-router-dom";
import BookAnAppointmentModal from "../../components/modal/book-an-appointment/BookAnAppointmentModal";
import ScrollToTop from "../../components/scroll-to-top/ScrollToTop";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Popup from "../../components/popup/Popup";
import "./RootLayout.scss";


const RootLayout = () => {
    
    return (
        <>
            <Header />
            <ScrollToTop />

            <BookAnAppointmentModal/>
            <Popup/>

            <div className="outlet">
                <Outlet />
            </div>

            <Footer />
        </>
    )
};

export default RootLayout;
