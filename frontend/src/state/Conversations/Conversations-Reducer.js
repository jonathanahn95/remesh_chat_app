import { SET_CONVERSATIONS_REQUESTS, SET_CREATED_CONVERSATION_REQUEST, FETCH_CONVERSATION } from './Conversations-ActionTypes';

const INITIAL_STATE = {
    conversations: [],
    conversation: {},
    error: null,
};

export default function conversationsReducer(state = INITIAL_STATE , action) { 
    switch (action.type) { 
        case FETCH_CONVERSATION: 
            return {
                ...state,
                conversation: action.payload.data,
                error: ""
            }
        case SET_CONVERSATIONS_REQUESTS: 
            return {
                ...state,
                conversations: action.payload.data,
                error: ""
            }
        case SET_CREATED_CONVERSATION_REQUEST: 
            return {
                ...state,
                conversations: [...state.conversations, action.payload.data],
                error: ""
            }
        default: 
            return state;
    }
}

