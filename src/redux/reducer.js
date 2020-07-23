import {ADD_ELEM, DELETE, EQUAL} from './constant';

const INITIAL_STATE = {
    value: 0,
};

const reducer = (state = INITIAL_STATE, action) => {
    
    switch(action.type) {
        case ADD_ELEM:
            return {
                ...state,
                value: state.value === 0 ? action.text : state.value + action.text
            }
        case DELETE: 
            return {
                ...state,
                value: 0 
            }
        case EQUAL: 
            return {
                ...state,
                value: eval(state.value)
            }
        default:
            return state;
    }   
}

export default reducer;