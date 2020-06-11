import { ADD_ITEM, SUB_ITEM, REMOVE_ITEM, SHOW_MODAL, HIDE_MODAL } from './actionTypes';
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
export const showModal = (data) => ({
    type: SHOW_MODAL,
    modalData: data
})
export const hideModal = () => ({
    type: HIDE_MODAL,
})