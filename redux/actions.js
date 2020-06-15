import { ADD_ITEM, SUB_ITEM, REMOVE_ITEM, SHOW_MODAL, HIDE_MODAL, UPDATE_FOOD, CLEAR_CART_DATA } from './actionTypes';
export const addItem = item => ({
    type: ADD_ITEM,
    item: item,
})
export const subItem = item => ({
    type: SUB_ITEM,
    item: item
})
export const removeItem = item => ({
    type: REMOVE_ITEM,
    item: item
})
export const showModal = (data, flag) => ({
    type: SHOW_MODAL,
    modalData: data,
    flag: flag
})
export const hideModal = (flag) => ({
    type: HIDE_MODAL,
    flag: flag
})
export const updateFood = (item) => ({
    type: UPDATE_FOOD,
    item: item
})
export const clearCartData = () => ({
    type: CLEAR_CART_DATA,
})