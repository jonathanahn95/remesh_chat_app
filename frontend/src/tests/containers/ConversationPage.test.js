import { getSingleConversation } from "../../state/Conversations/Conversations-Actions";
import { getAllMessagesForConversation } from "../../state/Messages/Messages-Actions";

import fetchMock from 'fetch-mock';
import { mockStore } from '../../config/TestProvider';
import { conversation, message } from '../../config/mocks/TestData';


describe('The ConversationPage Component', () => {
  afterEach(() => {
    fetchMock.restore()
  })

 
  it('fetches the conversations data', () => {
    fetchMock.getOnce('/api/v1/conversations/1', {
      body: { conversations: conversation },
      headers: { 'content-type': 'application/json' }
    })
    const store = mockStore({ conversations: conversation })


    store.dispatch(getSingleConversation(1))
    expect(store.getState()).toEqual({ conversations: conversation})
    expect(fetchMock.called('/api/v1/conversations/1')).toBe(true);
  })
 
  it('fetches a conversations messages', () => {
    fetchMock.getOnce('/api/v1/conversations/1/messages', {
      body: { messages: message },
      headers: { 'content-type': 'application/json' }
    })
    const store = mockStore({ conversations: conversation })


    store.dispatch(getAllMessagesForConversation(1))
    expect(store.getState()).toEqual({ conversations: conversation})
    expect(fetchMock.called('/api/v1/conversations/1/messages')).toBe(true);
  })
})


