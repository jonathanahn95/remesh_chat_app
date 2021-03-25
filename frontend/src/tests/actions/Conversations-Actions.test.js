import { fetchConversation, getConversationsRequest, createConversation } from '../../state/Conversations/Conversations-Actions';
import { SET_CREATED_CONVERSATION_REQUEST, FETCH_CONVERSATION, SET_CONVERSATIONS_REQUESTS } from '../../state/Conversations/Conversations-ActionTypes';

import configureMockStore from 'redux-mock-store';
import thunkMiddleWare from 'redux-thunk';
const nock = require('nock')
const scope = nock('http://localhost:3000')
  .get('/api/v1/conversations')
  .reply(200, {
      results: {
          id: '123'
      }
})


const mockStore = configureMockStore([thunkMiddleWare])

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

it('should dispatch an action to fetch all conversations', () => {
    const store = mockStore();
    return store.dispatch(getConversationsRequest())
    .then(() => {
        const action = store.getActions();
        const expectedAction = {
            type: SET_CONVERSATIONS_REQUESTS
        }

        expect(action[0]).toEqual(expectedAction)

    })
})
