import { shallow } from 'enzyme';
import React from 'react';
import Conversation from '../../components/Conversation';


it('expect to render Conversation component', () => {
    expect(shallow(<Conversation />)).toMatchSnapshot()
})