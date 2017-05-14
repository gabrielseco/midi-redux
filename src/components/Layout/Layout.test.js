import React from 'react';
import { mount, shallow } from 'enzyme';
import store from '../../store/configureStore';
import { Layout, mapStateToProps, mapDispatchToProps } from '.';
import * as PlayerActions from '../../action-creators/PlayerActions';
import * as FileActions from '../../action-creators/FileActions';


 
describe('Layout test', () => {
  it('should find the h1 title', () => {
    const wrapper = shallow(<Layout playerActions={PlayerActions} fileActions={FileActions}/>);
    expect(wrapper.find('h1').text()).toBe('MIDI File Player');
  });

  it('should test mapStateToProps', () => {
    const state = {
      midi: {},
      file: {},
      player: {}
    }
    expect(mapStateToProps(state)).toEqual({
      midi: state.midi,
      file: state.file,
      player: state.player
    });
  });

  xit('should test mapDispatchToProps', () => {
    const mock = {
      playerActions: {
        play: null,
        stop: null,
        pause: null
      },
      fileActions: {
        readMidiFile: null
      }
    };
    
    mock.playerActions.play = function(){};
    mock.playerActions.stop = function(){};
    mock.playerActions.pause = function(){};
    mock.fileActions.readMidiFile = function(){};

    expect(mapDispatchToProps(store({}).dispatch)).toEqual(mock);
  });
})