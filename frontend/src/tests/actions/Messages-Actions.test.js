import { createMessage, getAllMessagesForConversation, getSingleMessage } from '../../state/Messages/Messages-Actions';
import { CREATE_MESSAGE_SUCCESS, GET_ALL_MESSAGES_FOR_CONVERSATION_SUCCESS, GET_SINGLE_MESSAGE_SUCCESS } from '../../state/Messages/Messages-ActionTypes';
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
  
    it('should dispatch getAllMessagesForConversation', () => {
        fetchMock.getOnce('/api/v1/conversations/1/messages', {
          body: { messages: [message] },
          headers: { 'content-type': 'application/json' }
        })
    
        const expectedActions = [
          { type: GET_ALL_MESSAGES_FOR_CONVERSATION_SUCCESS, payload: { messages: [message] } }
        ]
        const store = mockStore({ messages: [] })
    
        return store.dispatch(getAllMessagesForConversation(1)).then(() => {
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

