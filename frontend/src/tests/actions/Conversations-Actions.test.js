import { fetchConversation, getConversationsRequest, createConversation } from '../../state/Conversations/Conversations-Actions';
import { FETCH_CONVERSATION, SET_CONVERSATIONS_REQUESTS } from '../../state/Conversations/Conversations-ActionTypes';
import fetchMock from 'fetch-mock';
import { mockStore } from '../../config/TestProvider';

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

describe('async actions', () => {
    afterEach(() => {
      fetchMock.restore()
    })
  
    it('should dispatch setConversationsRequest', () => {
      fetchMock.getOnce('/api/v1/conversations', {
        body: { conversations: [conversation] },
        headers: { 'content-type': 'application/json' }
      })
  
      const expectedActions = [
        { type: SET_CONVERSATIONS_REQUESTS, payload: { conversations: [conversation] } }
      ]
      const store = mockStore({ conversations: [] })
  
      return store.dispatch(getConversationsRequest()).then(() => {
        expect(store.getActions()).toEqual(expectedActions)
      })
    })

    it('should dispatch fetchConversationRequest', () => {
      fetchMock.getOnce('/api/v1/conversations/1', {
        body: { conversations: conversation },
        headers: { 'content-type': 'application/json' }
      })
  
      const expectedActions = [
        { type: FETCH_CONVERSATION, payload: { conversations: conversation } }
      ]
      const store = mockStore({ conversations: [] })
  
      return store.dispatch(fetchConversation(1)).then(() => {
        expect(store.getActions()).toEqual(expectedActions)
      })
    })

    it('should dispatch createConversation', () => {
      fetchMock.postOnce('/api/v1/conversations', conversation)
      const store = mockStore({ conversations: conversation })
  
      return store.dispatch(createConversation()).then(() => {
        expect(fetchMock.called('/api/v1/conversations')).toBe(true);
      });
    })
  })

