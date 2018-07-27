import React from 'react';
import { shallow } from 'enzyme';
import { SpendingStatusWidget } from '../SpendingStatusWidget';

const wrapper =
  shallow((<SpendingStatusWidget classes={{}} btcSent={1.2} btcAvailable={10} />));

describe('SpendingStatusWidget', () => {
  it('should render SpendingStatusWidget correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
