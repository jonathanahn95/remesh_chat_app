import { SET_CREATED_CONVERSATION_REQUEST, FETCH_CONVERSATION, SET_CONVERSATIONS_REQUESTS } from '../../state/Conversations/Conversations-ActionTypes';
import conversationReducer from '../../state/Conversations/Conversations-Reducer'


describe('conversationReducer', () => {
    const initialState = {
        conversations: [],
        conversation: {},
        error: null,
    };

    const conversation = {
            id: '1',
            type: 'conversation',
            attributes: {
                title: 'General'
            },
            relationships: {
                messages: [
                    {id: 1, type: 'message'}
                ]
            }
    }

    it('should return the initial state', () => {
        expect(conversationReducer(undefined, {})).toEqual(initialState)
    })


    it('should handle FETCH_CONVERSATION', () => {
        const newState = conversationReducer(initialState, {
            type: FETCH_CONVERSATION,
            payload: {
                data: {
                    id: '1',
                    type: 'conversation',
                    attributes: {
                        title: 'General'
                    },
                    relationships: {
                        messages: [
                            {id: 1, type: 'message'}
                        ]
                    }
                }
            }
        })

        expect(newState).toEqual({
            conversation,
            conversations: [],
            error: '',
        })

    })

    it('should handle SET_CONVERSATIONS_REQUESTS', () => {
        const newState = conversationReducer(initialState, {
            type: SET_CONVERSATIONS_REQUESTS,
            payload: {
                data: [{
                    id: '1',
                    type: 'conversation',
                    attributes: {
                        title: 'General'
                    },
                    relationships: {
                        messages: [
                            {id: 1, type: 'message'}
                        ]
                    }
                }]
            }
        })

        expect(newState).toEqual({
            conversation: {},
            conversations: [conversation],
            error: '',
        })

    })

    it('should handle SET_CREATED_CONVERSATION_REQUEST', () => {
        const newState = conversationReducer(initialState, {
            type: SET_CREATED_CONVERSATION_REQUEST,
            payload: {
                data: {
                    id: '1',
                    type: 'conversation',
                    attributes: {
                        title: 'General'
                    },
                    relationships: {
                        messages: [
                            {id: 1, type: 'message'}
                        ]
                    }
                }
            }
        })

        expect(newState).toEqual({
            conversation: {},
            conversations: [...initialState.conversations, conversation],
            error: '',
        })

    })
})
