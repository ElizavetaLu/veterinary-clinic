import {
    SHOW_MODAL,
    POPUP_STATUS,
    SHOW_POPUP
} from "./types";


// popup
export const showPopup = (message: string) => ({ type: SHOW_POPUP, payload: message }); 
export const setPopupStatus = (status: boolean) => ({ type: POPUP_STATUS, payload: status });


// modal
export const showModal = () => ({ type: SHOW_MODAL });