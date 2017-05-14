import React from 'react';
import { shallow } from 'enzyme';
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

  it('should test mapDispatchToProps', () => {

    const props = mapDispatchToProps(store({}).dispatch);

    expect(typeof props.fileActions.readMidiFile).toBe('function')
    expect(typeof props.playerActions.play).toBe('function')
    expect(typeof props.playerActions.stop).toBe('function')
    expect(typeof props.playerActions.pause).toBe('function')
  });
})