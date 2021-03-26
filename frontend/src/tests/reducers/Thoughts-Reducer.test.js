import { GET_ALL_THOUGHTS_FOR_MESSAGE_SUCCESS, CREATE_THOUGHT_SUCCESS } from '../../state/Thoughts/Thoughts-ActionTypes';
import thoughtsReducer from '../../state/Thoughts/Thoughts-Reducer'



describe('thoughtsReducer', () => {
    const initialState = {
        thoughts: [],
        error: null,
    };

    const thought = {
            id: '1',
            type: 'thought',
            attributes: {
                text: 'asd'
            }
    }

    it('should return the initial state', () => {
        expect(thoughtsReducer(undefined, {})).toEqual(initialState)
    })


    it('should handle GET_ALL_THOUGHTS_FOR_MESSAGE_SUCCESS', () => {
        const newState = thoughtsReducer(initialState, {
            type: GET_ALL_THOUGHTS_FOR_MESSAGE_SUCCESS,
            payload: {
                data: thought
            }
        })

        expect(newState).toEqual({
            thoughts: thought,
            error: '',
        })

    })

    it('should handle CREATE_THOUGHT_SUCCESS', () => {
        const newState = thoughtsReducer(initialState, {
            type: CREATE_THOUGHT_SUCCESS,
            payload: {
                data: {
                    id: '1',
                    type: 'thought',
                    attributes: {
                        text: 'asd'
                    },
                }
            }
        })

        expect(newState).toEqual({
            thoughts: [...initialState.thoughts, thought],
            error: '',
        })

    })

})
