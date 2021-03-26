import { fetchThoughts, createThoughts, createThought } from '../../state/Thoughts/Thoughts-Actions';
import { FETCH_THOUGHTS }from '../../state/Thoughts/Thoughts-ActionTypes';
import fetchMock from 'fetch-mock';
import { mockStore } from '../../config/TestProvider';

const thought = {
    id: '1',
    type: 'thought',
    attributes: {
        text: 'asd'
    }
}

describe('async actions', () => {
    afterEach(() => {
      fetchMock.restore()
    })
  
    it('should dispatch fetchThoughts', () => {
      fetchMock.getOnce('/api/v1/messages/1/thoughts', {
        body: { thoughts: [thought] },
        headers: { 'content-type': 'application/json' }
      })
  
      const expectedActions = [
        { type: FETCH_THOUGHTS, payload: { thoughts: [thought] } }
      ]
      const store = mockStore({ thoughts: [] })
  
      return store.dispatch(fetchThoughts(1)).then(() => {
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

