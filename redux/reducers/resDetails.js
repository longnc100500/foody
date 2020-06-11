import { LIKE, UNLIKE, ADD_ITEM, SUB_ITEM, REMOVE_ITEM } from '../actionTypes';
const initialState = {
    like: false,
    cart: {
        total: 0,
        amount: 0,
        items: []
    }
}
var it = {
    amount: 1,
    infor: {
        id: 1,
        name: 'Mieen xao bo',
        price: 150000,
    }
}
export default function (state = initialState, action) {
    switch (action.type) {
        case LIKE: {
            return {
                ...state,
                like: true,
            }
        }
        case UNLIKE: {
            return {
                ...state,
                like: false
            }
        }
        case ADD_ITEM: {
            var count = action.amount + state.cart.amount;
            var newItem = { ...action.item };
            let t = 0;
            state.cart.items.forEach(item => {
                if (item.infor.name === action.item.name) {
                    t++;
                }
            })
            let newCart = { ...state.cart };
            if (t == 0) {

                newCart.amount += item.amount;
                newCart.total += item.amount * item.price;
                newCart.items = [...newCart.items, item];
                return {
                    ...state,
                    cart: { ...newCart }
                }

            }
            else {
                newCart.amount += item.amount;
                newCart.total += item.amount * item.price;
                newCart.items.forEach(item => {
                    if (item.name == action.item.name) {
                        item.amount += action.item.amount;
                    }
                })
                return {
                    ...state,
                    cart: { ...newCart }
                }
            }
        }
        case SUB_ITEM: {
            let newCart = { ...state.cart };
            newCart.cart.amount -= 1;
            newCart.total -= action.item.price;
            newCart.cart.items.forEach(item => {
                if (item.name === action.item.name) {
                    item.amount -= 1;
                }
            })
            let arr = newCart.items.filter(item => {
                return item.amount !== 0;
            }
            )
            return {
                ...state,
                cart: { ...newCart, items: [...arr] }
            }

        }
        case REMOVE_ITEM: {
            let newItems = state.cart.items.filter(item => {
                return item.name !== action.item.name;
            });
            let newCart = { ...state.cart };
            newCart.amount -= action.item.amount;
            newCart.total -= action.item.amount * action.item.price;

            return {
                ...state,
                cart: { ...newCart }
            }

        }
        default: {
            return state;
        }
    }
}