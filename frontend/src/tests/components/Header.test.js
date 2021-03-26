import { shallow } from 'enzyme';
import React from 'react';
import Header from '../../components/Header';


it('expect to render Conversation component', () => {
    expect(shallow(<Header />)).toMatchSnapshot()
})