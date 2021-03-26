import { GET_SEARCH_QUERY, CLEAR_DROPDOWN_RESULT, GET_SEARCH_QUERY_FAILURE } from './Search-ActionTypes';

const INITIAL_STATE = {
    dropdown: [],
    error: null,
};

export default function searchReducer(state = INITIAL_STATE , action) { 
    switch (action.type) { 
        case GET_SEARCH_QUERY: 
            return {
                ...state,
                dropdown: action.payload.data,
                error: ""
            }
        case CLEAR_DROPDOWN_RESULT: 
            return {
                ...state,
                dropdown: [],
                error: ""
            }
        case GET_SEARCH_QUERY_FAILURE: 
            return {
                error: action.payload
            }
        default: 
            return state;
    }
}

