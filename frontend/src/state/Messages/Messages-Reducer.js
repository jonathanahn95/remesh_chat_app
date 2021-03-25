import { CREATE_MESSAGE, FETCH_MESSAGES, FETCH_MESSAGE } from './Messages-ActionTypes';

const INITIAL_STATE = {
    messages: [],
    message: {},
    error: null,
};

export default function messagesReducer(state = INITIAL_STATE , action) { 
    switch (action.type) { 
        case CREATE_MESSAGE: 
            return {
                ...state,
                messages: [...state.messages, action.payload.data],
                error: ""
            }
        case FETCH_MESSAGES: 
            return {
                ...state,
                messages: action.payload.data,
                error: ""
            }
        case FETCH_MESSAGE: 
            return {
                ...state,
                message: action.payload.data,
                error: ""
            }
        default: 
            return state;
    }
}

