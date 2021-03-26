import { getSingleConversation } from "../../state/Conversations/Conversations-Actions";
import { getAllMessagesForConversation } from "../../state/Messages/Messages-Actions";

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


describe('The ConversationList Component', () => {
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


