import { CREATE_MESSAGE, FETCH_MESSAGES, FETCH_MESSAGE } from '../../state/Messages/Messages-ActionTypes';
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


    it('should handle FETCH_MESSAGE', () => {
        const newState = messagesReducer(initialState, {
            type: FETCH_MESSAGE,
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

    it('should handle CREATE_MESSAGE', () => {
        const newState = messagesReducer(initialState, {
            type: CREATE_MESSAGE,
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

    it('should handle FETCH_MESSAGES', () => {
        const newState = messagesReducer(initialState, {
            type: FETCH_MESSAGES,
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
