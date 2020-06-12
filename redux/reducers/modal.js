import { SHOW_MODAL, HIDE_MODAL, INCREASE, DECREASE } from '../actionTypes';
const initialState = {
    visible: false,
    min: 1,
    max: 50,

    item: {
        amount: 0,
        infor: {
            id: 1,
            name: 'Bun reu cua',
            price: 20000,
        }
    }

}
export default function (state = initialState, action) {
    switch (action.type) {
        case SHOW_MODAL:
            return {
                ...state,
                visible: true,
                item: {
                    infor: { ...action.item.infor },
                    amount: 1,
                }
            }
        case HIDE_MODAL:
            return {
                ...state,
                visible: false,

            }
        case INCREASE: {
            return {
                ...state,
                item: {
                    ...state.item,
                    amount: state.item.amount + 1
                },
            }
        }
        case DECREASE: {
            return {
                ...state,
                item: {
                    ...state.item,
                    amount: state.item.amount - 1,
                }

            }
        }
        default:
            return state;
    }
}
