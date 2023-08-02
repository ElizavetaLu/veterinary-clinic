import { SHOW_MODAL } from "../actions/types";


const initialState = {
    isShown: false,
}

const modalReducer = (state = initialState, { type }: any) => {

    switch (type) {

        case SHOW_MODAL:
            return { ...state, isShown: !state.isShown };


        default:
            return state;
    }
}

export default modalReducer