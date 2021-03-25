import { FETCH_THOUGHTS, CREATE_THOUGHT } from './Thoughts-ActionTypes';

const INITIAL_STATE = {
    thoughts: [],
    error: null,
};

export default function thoughtsReducer(state = INITIAL_STATE , action) { 
    switch (action.type) { 
        case FETCH_THOUGHTS: 
            return {
                ...state,
                thoughts: action.payload.data,
                error: ""
            }
        case CREATE_THOUGHT: 
            return {
                ...state,
                thoughts: [...state.thoughts, action.payload.data],
                error: ""
            }
        default: 
            return state;
    }
}

