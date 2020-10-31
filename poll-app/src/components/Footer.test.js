import React from 'react';
import { shallow } from 'enzyme';
import Footer from './Footer';

it('should render Created by Monika Swidzinska', () => {
    const wrapper = shallow(<Footer />);
    const paragraph = wrapper.find('p').text();
    expect(paragraph).toBe('Created by Monika Swidzinska');
})