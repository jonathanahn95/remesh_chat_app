import { createMessage, fetchMessages, fetchMessage } from '../../state/Messages/Messages-Actions';
import { CREATE_MESSAGE, FETCH_MESSAGES, FETCH_MESSAGE } from '../../state/Messages/Messages-ActionTypes';
import fetchMock from 'fetch-mock'
import { mockStore } from '../../config/TestProvider';


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


describe('async actions', () => {
    afterEach(() => {
      fetchMock.restore()
    })
  
    it('should dispatch fetchMessages', () => {
        fetchMock.getOnce('/api/v1/conversations/1/messages', {
          body: { messages: [message] },
          headers: { 'content-type': 'application/json' }
        })
    
        const expectedActions = [
          { type: FETCH_MESSAGES, payload: { messages: [message] } }
        ]
        const store = mockStore({ messages: [] })
    
        return store.dispatch(fetchMessages(1)).then(() => {
          expect(store.getActions()).toEqual(expectedActions)
        })
      })
  
      it('should dispatch createMessage', () => {
        fetchMock.postOnce('/api/v1/messages', message)
        const store = mockStore({ messages: message })
    
        return store.dispatch(createMessage()).then(() => {
          expect(fetchMock.called('/api/v1/messages')).toBe(true);
        });
      })
  })

