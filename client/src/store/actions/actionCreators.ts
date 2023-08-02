import {
    SHOW_MODAL,
    POPUP_STATUS,
    SHOW_POPUP,
    SET_POPUP_MESSAGE
} from "./types";


// popup
export const showPopup = () => ({ type: SHOW_POPUP });
export const setPopupMessage = (message: string) => ({ type: SET_POPUP_MESSAGE, payload: message });
export const setPopupStatus = (status: boolean) => ({ type: POPUP_STATUS, payload: status });


// modal
export const showModal = () => ({ type: SHOW_MODAL });