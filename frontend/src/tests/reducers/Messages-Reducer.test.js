import { CREATE_MESSAGE_SUCCESS, GET_ALL_MESSAGES_FOR_CONVERSATION_SUCCESS, GET_SINGLE_MESSAGE_SUCCESS } from '../../state/Messages/Messages-ActionTypes';
import messagesReducer from '../../state/Messages/Messages-Reducer'



describe('messagesReducer', () => {
    const initialState = {
        messages: [],
        message: {},
        error: null,
    };

    const message = {
            id: '1',
            type: 'message',
            attributes: {
                text: 'asd'
            },
            relationships: {
                thoughts: [
                    {id: 1, type: 'thought'}
                ]
            }
    }

    it('should return the initial state', () => {
        expect(messagesReducer(undefined, {})).toEqual(initialState)
    })


    it('should handle GET_SINGLE_MESSAGE_SUCCESS', () => {
        const newState = messagesReducer(initialState, {
            type: GET_SINGLE_MESSAGE_SUCCESS,
            payload: {
                data: message
            }
        })

        expect(newState).toEqual({
            message,
            messages: [],
            error: '',
        })

    })

    it('should handle CREATE_MESSAGE_SUCCESS', () => {
        const newState = messagesReducer(initialState, {
            type: CREATE_MESSAGE_SUCCESS,
            payload: {
                data: {
                    id: '1',
                    type: 'message',
                    attributes: {
                        text: 'asd'
                    },
                    relationships: {
                        thoughts: [
                            {id: 1, type: 'thought'}
                        ]
                    }
                }
            }
        })

        expect(newState).toEqual({
            message: {},
            messages: [...initialState.messages, message],
            error: '',
        })

    })

    it('should handle GET_ALL_MESSAGES_FOR_CONVERSATION_SUCCESS', () => {
        const newState = messagesReducer(initialState, {
            type: GET_ALL_MESSAGES_FOR_CONVERSATION_SUCCESS,
            payload: {
                data: [{
                    id: '1',
                    type: 'message',
                    attributes: {
                        text: 'asd'
                    },
                    relationships: {
                        thoughts: [
                            {id: 1, type: 'thought'}
                        ]
                    }
                }]
            }
        })

        expect(newState).toEqual({
            message: {},
            messages: [message],
            error: '',
        })

    })
})
