import { shallow } from 'enzyme';
import React from 'react';
import Thought from '../../components/Thought';


it('expect to render Conversation component', () => {
    expect(shallow(<Thought />)).toMatchSnapshot()
})