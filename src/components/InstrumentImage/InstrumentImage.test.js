import React from 'react';
import { shallow } from 'enzyme';
import { InstrumentImage } from '.';

describe('InstrumentImage component', () => {
  it('should initialize the component', () => {
    const wrapper = shallow(<InstrumentImage instrument='violin' />);
    expect(wrapper.find('div.instrument.instrument-violin')).toBeTruthy();
  });
});