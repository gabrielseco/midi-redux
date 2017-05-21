import React from 'react';
import { shallow } from 'enzyme';
import { PlayButton } from '.';

import * as PlayerActions from '../../action-creators/PlayerActions';


describe('PlayButton test', () => {
  it('should test the PlayButton', () => {
    const wrapper = shallow(<PlayButton play={PlayerActions.play} />);
    expect(wrapper.find('button.play-button')).toBeTruthy();
  });

  it('should simulate click ', () => {
    spyOn(PlayerActions, 'play')
      .and.returnValue({});
    const wrapper = shallow(<PlayButton play={PlayerActions.play} />);
    const btn = wrapper.find('button.play-button');
    btn.simulate('click');
    expect(PlayerActions.play).toHaveBeenCalled();
  });
});