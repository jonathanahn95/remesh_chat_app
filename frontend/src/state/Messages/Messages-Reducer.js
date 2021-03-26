import { CREATE_MESSAGE_FAILURE, CREATE_MESSAGE_SUCCESS, GET_ALL_MESSAGES_FOR_CONVERSATION_SUCCESS, GET_SINGLE_MESSAGE_SUCCESS } from './Messages-ActionTypes';

const INITIAL_STATE = {
    messages: [],
    message: {},
    error: null,
};

export default function messagesReducer(state = INITIAL_STATE , action) { 
    switch (action.type) { 
        case CREATE_MESSAGE_SUCCESS: 
            return {
                ...state,
                messages: [...state.messages, action.payload.data],
                error: ""
            }
        case GET_ALL_MESSAGES_FOR_CONVERSATION_SUCCESS: 
            return {
                ...state,
                messages: action.payload.data,
                error: ""
            }
        case GET_SINGLE_MESSAGE_SUCCESS: 
            return {
                ...state,
                message: action.payload.data,
                error: ""
            }
        case CREATE_MESSAGE_FAILURE: 
            return {
                error: action.payload
            }
        default: 
            return state;
    }
}

