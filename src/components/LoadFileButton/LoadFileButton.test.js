import React from 'react';
import { shallow } from 'enzyme';
import { LoadFileButton } from '.';

import * as FileActions from '../../action-creators/FileActions';


describe('LoadFileButton test', () => {
  it('should test the LoadFileButton', () => {
    const wrapper = shallow(<LoadFileButton readMidiFile={FileActions.readMidiFile} />);
    expect(wrapper.find('input')).toBeTruthy();
    expect(wrapper.find('button.load-file-button')).toBeTruthy();
  });
});