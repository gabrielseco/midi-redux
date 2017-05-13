import MIDIPlayerReducer, { initialState } from './PlayerReducer';
import PlayerAction from '../actions/PlayerActions';

describe('PlayerReducer', () => {
  it('should play', () => {
    const action = {
      type: PlayerAction.PLAY,
      payload: {
        tracks: [1],
        ticksPerBeat: 55
      }
    }
    const result = MIDIPlayerReducer(initialState, action);

    expect(result.tracks[0]).toEqual(1);
    expect(result.ticksPerBeat).toEqual(55);
  });

  it('should load an instrument', () => {
    const action = {
      type: PlayerAction.LOAD_INSTRUMENT,
      payload: {
        instruments: ['PIANO']
      }
    }

    const result = MIDIPlayerReducer(initialState, action);

    expect(result.instruments[0]).toBe('PIANO');
  });

  it('should return the default state', () => {
    const action = {
      type: PlayerAction.PAUSE,
      payload: {}
    }

    expect(MIDIPlayerReducer(undefined, action)).toEqual(initialState);

  });

});