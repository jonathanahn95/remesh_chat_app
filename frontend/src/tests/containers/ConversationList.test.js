import { createConversation, getAllConversations } from '../../state/Conversations/Conversations-Actions'
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



describe('The ConversationList Component', () => {
  afterEach(() => {
    fetchMock.restore()
  })

 
  it('creates a conversation', () => {
    fetchMock.postOnce('/api/v1/conversations', conversation)
    const store = mockStore({ conversations: conversation })


    store.dispatch(createConversation())
    return expect(store.getState()).toEqual({ conversations: conversation})
  })
 
  it('compDidMount fills the state with conversations', () => {
    fetchMock.getOnce('/api/v1/conversations', {
      body: { conversations: conversation },
      headers: { 'content-type': 'application/json' }
    })
    const store = mockStore({ conversations: conversation })


    store.dispatch(getAllConversations())
    expect(store.getState()).toEqual({ conversations: conversation})
    expect(fetchMock.called('/api/v1/conversations')).toBe(true);
  })
})


