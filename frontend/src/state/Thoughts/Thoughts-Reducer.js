import { CREATE_THOUGHT_FAILURE, GET_ALL_THOUGHTS_FOR_MESSAGE_SUCCESS, CREATE_THOUGHT_SUCCESS } from './Thoughts-ActionTypes';

const INITIAL_STATE = {
    thoughts: [],
    error: null,
};

export default function thoughtsReducer(state = INITIAL_STATE , action) { 
    switch (action.type) { 
        case GET_ALL_THOUGHTS_FOR_MESSAGE_SUCCESS: 
            return {
                ...state,
                thoughts: action.payload.data,
                error: ""
            }
        case CREATE_THOUGHT_SUCCESS: 
            return {
                ...state,
                thoughts: [...state.thoughts, action.payload.data],
                error: ""
            }
        case CREATE_THOUGHT_FAILURE: 
            return {
                error: action.payload
            }
        default: 
            return state;
    }
}

