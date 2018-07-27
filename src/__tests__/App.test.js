import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';

const wrapper = shallow((<App />));

describe('App', () => {
  it('should render App correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
