import { GET_SEARCH_RESULT } from './Search-ActionTypes';

const INITIAL_STATE = {
    result: '',
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
        default: 
            return state;
    }
}

