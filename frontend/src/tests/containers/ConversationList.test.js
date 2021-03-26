import { shallow, mount } from 'enzyme';
import { render } from '@testing-library/react';
import React from 'react';
import ConversationList from '../../containers/ConversationsList';
import TestProvider from '../../utils/index';
import configureMockStore from 'redux-mock-store';
import thunkMiddleWare from 'redux-thunk';
import renderer from 'react-test-renderer';
import { createConversation } from '../../state/Conversations/Conversations-Actions'


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


describe('The ConversationList Component', () => {
    let store;
    let component;

    beforeEach(() => {
      store = mockStore({
        myState: 'sample text',
      });

      store.dispatch = jest.fn();
       
    component = renderer.create(
        <TestProvider store={store}>
          <ConversationList />
        </TestProvider>
      );
    });

    it('should render with given state from Redux store', () => {
        expect(component.toJSON()).toMatchSnapshot();
    });
})