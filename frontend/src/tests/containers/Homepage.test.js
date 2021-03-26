import { createMessage } from '../../state/Messages/Messages-Actions'
import fetchMock from 'fetch-mock';
import { mockStore } from '../../config/TestProvider';
import { message } from '../../config/mocks/TestData';


describe('The Homepage Component', () => {
  afterEach(() => {
    fetchMock.restore()
  })
 
  it('can create a message', () => {
    fetchMock.postOnce('/api/v1/messages', {
        body: { message: message },
        headers: { 'content-type': 'application/json' }
    })
    const store = mockStore({ messages: message })

    store.dispatch(createMessage(message))
    expect(store.getState()).toEqual({ messages: message})
    expect(fetchMock.called('/api/v1/messages')).toBe(true);
  })
})


