import { SHOW_MODAL, HIDE_MODAL } from '../actionTypes';
const initialState = {
    visible: false,
    modalData: {}
}
export default function (state = initialState, action) {
    switch (action.type) {
        case SHOW_MODAL:
            return {
                ...state,
                visible: true,
            }
        case HIDE_MODAL:
            return {
                ...state,
                visible: false,
            }
        default:
            return state;
    }
}
