import { Outlet } from "react-router-dom";
import "./RootLayout.scss";

const RootLayout = () => {
    return (
        <div>
            <Outlet />
        </div>
    )
};

export default RootLayout;
