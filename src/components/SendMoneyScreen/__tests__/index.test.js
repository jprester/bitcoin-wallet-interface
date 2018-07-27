import React from 'react';
import { shallow } from 'enzyme';
import { SendMoneyScreen } from '../index';

const wrapper = shallow((<SendMoneyScreen startCoinFetch={jest.fn()} />));

describe('index', () => {
  it('should render SendMoneyScreen correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
