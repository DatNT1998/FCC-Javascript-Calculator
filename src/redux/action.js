import {ADD_ELEM, DELETE, EQUAL} from './constant';

export const addElem = (text) => {
    return {
        type: ADD_ELEM,
        text
    }
}

export const deleteText = (value) => {
    return {
        type: DELETE,
        value
    }
}

export const equal = (value) => {
    return {
        type: EQUAL,
        value
    }
}