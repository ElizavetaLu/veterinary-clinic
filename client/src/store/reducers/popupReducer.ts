import { SHOW_POPUP, SET_POPUP_MESSAGE, POPUP_STATUS } from "../actions/types";


const initialState = {
    isShown: false,
    message: '',
    status: true
}

const popupReducer = (state = initialState, { type, payload }: any) => {

    switch (type) {

        case SHOW_POPUP:
            return { ...state, isShown: !state.isShown };

        case SET_POPUP_MESSAGE:
            return { ...state, message: payload };

        case POPUP_STATUS:
            return { ...state, status: payload };

        default:
            return state;
    }
}

export default popupReducer