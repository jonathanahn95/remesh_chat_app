import { CREATE_CONVERSATION_SUCCESS, GET_SINGLE_CONVERSATION_SUCCESS, GET_ALL_CONVERSATIONS_SUCCESS } from '../../state/Conversations/Conversations-ActionTypes';
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


    it('should handle GET_SINGLE_CONVERSATION_SUCCESS', () => {
        const newState = conversationReducer(initialState, {
            type: GET_SINGLE_CONVERSATION_SUCCESS,
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

    it('should handle GET_ALL_CONVERSATIONS_SUCCESS', () => {
        const newState = conversationReducer(initialState, {
            type: GET_ALL_CONVERSATIONS_SUCCESS,
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

    it('should handle CREATE_CONVERSATION_SUCCESS', () => {
        const newState = conversationReducer(initialState, {
            type: CREATE_CONVERSATION_SUCCESS,
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
