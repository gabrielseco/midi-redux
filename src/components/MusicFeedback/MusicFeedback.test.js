import React from 'react';
import { shallow } from 'enzyme';
import { Circle } from 'rc-progress';
import { MusicFeedback } from '.';

import * as FileActions from '../../action-creators/FileActions';


describe('MusicFeedback test', () => {

  it('should test the MusicFeedback when is Loading', () => {
    const wrapper = shallow(<MusicFeedback tempo={120} isPlayerPlaying song='Pirates.midi' />);
    expect(wrapper.find('p.feedback-tempo').text()).toBe("");
    expect(wrapper.find(Circle).prop('percent')).toBe(10);
    expect(wrapper.find(Circle).prop('className')).toBe('loading loading-spin');
  });

  it('should test the MusicFeedback when midi is Playing', () => {
    const wrapper = shallow(<MusicFeedback tempo={120} isMidiPlaying song='Pirates.midi' />);
    expect(wrapper.find('p.feedback-tempo').text()).toBe("120");
    expect(wrapper.find(Circle).prop('percent')).toBe(100);
    expect(wrapper.find(Circle).prop('className')).toBe('loading');
  });

  it('should test the MusicFeedback when is not Playing nor Loading', () => {
    const wrapper = shallow(<MusicFeedback tempo={120} song='Pirates.midi' />);
    expect(wrapper.find('p.feedback-tempo').text()).toBe("");
    expect(wrapper.find(Circle).prop('percent')).toBe(0);
    expect(wrapper.find(Circle).prop('className')).toBe('loading');
  });
  
});