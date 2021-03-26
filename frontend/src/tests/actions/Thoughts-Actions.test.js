import { getAllThoughtsForMessage, createThought } from '../../state/Thoughts/Thoughts-Actions';
import { GET_ALL_THOUGHTS_FOR_MESSAGE_SUCCESS }from '../../state/Thoughts/Thoughts-ActionTypes';
import fetchMock from 'fetch-mock';
import { mockStore } from '../../config/TestProvider';
import { thought } from '../../config/mocks/TestData';

describe('async actions', () => {
    afterEach(() => {
      fetchMock.restore()
    })
  
    it('should dispatch getAllThoughtsForMessage', () => {
      fetchMock.getOnce('/api/v1/messages/1/thoughts', {
        body: { thoughts: [thought] },
        headers: { 'content-type': 'application/json' }
      })
  
      const expectedActions = [
        { type: GET_ALL_THOUGHTS_FOR_MESSAGE_SUCCESS, payload: { thoughts: [thought] } }
      ]
      const store = mockStore({ thoughts: [] })
  
      return store.dispatch(getAllThoughtsForMessage(1)).then(() => {
        expect(store.getActions()).toEqual(expectedActions)
      })
    })
    


    it('should dispatch createThought', () => {
      fetchMock.postOnce('/api/v1/thoughts', thought)
      const store = mockStore({ thoughts: thought })
  
      return store.dispatch(createThought()).then(() => {
        expect(fetchMock.called('/api/v1/thoughts')).toBe(true);
      });
      
    })
  })

