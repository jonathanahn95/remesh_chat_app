import { shallow } from 'enzyme';
import React from 'react';
import Message from '../../components/Message';


it('expect to render Conversation component', () => {
    expect(shallow(<Message />)).toMatchSnapshot()
})