import { GET_SEARCH_RESULT, GET_DROPDOWN_RESULT } from './Search-ActionTypes';

const INITIAL_STATE = {
    result: '',
    dropdown: [],
    error: null,
};

export default function searchReducer(state = INITIAL_STATE , action) { 
    switch (action.type) { 
        case GET_SEARCH_RESULT: 
            return {
                ...state,
                result: action.payload.data[0],
                error: ""
            }
        case GET_DROPDOWN_RESULT: 
        console.log(action, 'redc')
            return {
                ...state,
                dropdown: action.payload.data,
                error: ""
            }
        default: 
            return state;
    }
}

