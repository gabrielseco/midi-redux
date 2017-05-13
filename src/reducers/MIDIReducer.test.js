import MIDIEventsReducer, { initialState } from './MIDIReducer';
import MIDIAction from '../actions/MIDIActions';
import { TestUtils } from '../utils/TestUtils';

describe('MIDIReducer', () => {
  it('should test the general case', () => {
    Object.keys(MIDIAction).map(key => {
      if(key === 'CONTROLLER') return
      const action = {
        type: MIDIAction[key],
        payload: {
          isPlaying: true
        }
      }
      const result = MIDIEventsReducer(initialState, action);

      expect(result.isPlaying).toBeTruthy();
    });

  });

  it('should return the initialState', () => {
    expect(MIDIEventsReducer(undefined, TestUtils.ActionNullable())).toEqual(initialState);
  });

});