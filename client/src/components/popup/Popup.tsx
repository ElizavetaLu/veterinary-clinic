import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { showPopup } from "../../store/actions/actionCreators";
import "./Popup.scss";


const Popup = () => {

    const dispatch = useDispatch();
    const { isShown, message, status } = useSelector((state: any) => state.popup);

    useEffect(() => {
        if (isShown) {
            setTimeout(() => {
                dispatch(showPopup(''));
            }, 4000)
        }
    }, [isShown])

    return (
        <div className={`popup ${isShown && 'popup--active'} ${!status && 'popup--error'}`}>

            {
                status
                    ? <img className="popup__icon" src="/images/icons/checked.png" alt="success" />
                    : <img className="popup__icon" src="/images/icons/checked.png" alt="error" />
            }

            <p className="popup__message">{message}</p>
        </div>
    );
};

export default Popup;
