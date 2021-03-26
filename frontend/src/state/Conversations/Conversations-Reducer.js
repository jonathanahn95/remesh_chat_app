import { CREATE_CONVERSATION_FAILURE, GET_ALL_CONVERSATIONS_SUCCESS, CREATE_CONVERSATION_SUCCESS, GET_SINGLE_CONVERSATION_SUCCESS } from './Conversations-ActionTypes';

const INITIAL_STATE = {
    conversations: [],
    conversation: {},
    error: null,
};

export default function conversationsReducer(state = INITIAL_STATE , action) { 
    switch (action.type) { 
        case GET_SINGLE_CONVERSATION_SUCCESS: 
            return {
                ...state,
                conversation: action.payload.data,
                error: ""
            }
        case GET_ALL_CONVERSATIONS_SUCCESS: 
            return {
                ...state,
                conversations: action.payload.data,
                error: ""
            }
        case CREATE_CONVERSATION_SUCCESS: 
            return {
                ...state,
                conversations: [...state.conversations, action.payload.data],
                error: ""
            }
        case CREATE_CONVERSATION_FAILURE: 
            return {
                ...state,
                conversations: [...state.conversations, action.payload.data],
                error: action.payload
            }
        default: 
            return state;
    }
}

