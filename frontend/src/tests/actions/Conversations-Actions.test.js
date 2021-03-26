import { getSingleConversation, getAllConversations, createConversation } from '../../state/Conversations/Conversations-Actions';
import { GET_SINGLE_CONVERSATION_SUCCESS, GET_ALL_CONVERSATIONS_SUCCESS } from '../../state/Conversations/Conversations-ActionTypes';
import fetchMock from 'fetch-mock';
import { mockStore } from '../../config/TestProvider';
import { conversation } from '../../config/mocks/TestData';

describe('async actions', () => {
    afterEach(() => {
      fetchMock.restore()
    })
  
    it('should dispatch setAllConversations', () => {
      fetchMock.getOnce('/api/v1/conversations', {
        body: { conversations: [conversation] },
        headers: { 'content-type': 'application/json' }
      })
  
      const expectedActions = [
        { type: GET_ALL_CONVERSATIONS_SUCCESS, payload: { conversations: [conversation] } }
      ]
      const store = mockStore({ conversations: [] })
  
      return store.dispatch(getAllConversations()).then(() => {
        expect(store.getActions()).toEqual(expectedActions)
      })
    })

    it('should dispatch setSingleConversation', () => {
      fetchMock.getOnce('/api/v1/conversations/1', {
        body: { conversations: conversation },
        headers: { 'content-type': 'application/json' }
      })
  
      const expectedActions = [
        { type: GET_SINGLE_CONVERSATION_SUCCESS, payload: { conversations: conversation } }
      ]
      const store = mockStore({ conversations: [] })
  
      return store.dispatch(getSingleConversation(1)).then(() => {
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

