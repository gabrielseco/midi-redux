import React from 'react';
import { shallow } from 'enzyme';
import { Player } from '.';

import * as PlayerActions from '../../action-creators/PlayerActions';
import * as FileActions from '../../action-creators/FileActions';


describe('Player test', () => {
  const file = {
    fileName: 'Pirates.mid'
  };
  const midi = {};
  const player = {};
  it('should test the Player', () => {
    const wrapper = shallow(<Player file={file} midi={midi} player={player} play={PlayerActions.play} readMidiFile={FileActions.readMidiFile} />);
    expect(wrapper.find('p').text()).toBe(`Song: ${file.fileName}`);
  });

});