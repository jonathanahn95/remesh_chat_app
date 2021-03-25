import { FETCH_THOUGHTS, CREATE_THOUGHT } from '../../state/Thoughts/Thoughts-ActionTypes';
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


    it('should handle FETCH_THOUGHTS', () => {
        const newState = thoughtsReducer(initialState, {
            type: FETCH_THOUGHTS,
            payload: {
                data: thought
            }
        })

        expect(newState).toEqual({
            thoughts: thought,
            error: '',
        })

    })

    it('should handle CREATE_THOUGHT', () => {
        const newState = thoughtsReducer(initialState, {
            type: CREATE_THOUGHT,
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
