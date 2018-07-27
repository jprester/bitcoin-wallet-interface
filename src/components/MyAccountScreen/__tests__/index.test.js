import React from 'react';
import { shallow } from 'enzyme';
import MyAccountScreen from '../index';

const wrapper = shallow((<MyAccountScreen />));

describe('index', () => {
  it('should render MyAccountScreen correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
