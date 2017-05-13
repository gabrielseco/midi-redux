import MIDIFileReducer, { initialState } from './FileReducer';
import FileAction from '../actions/FileActions';
import { TestUtils } from '../utils/TestUtils';

describe('FileAction', () => {
  it('should load a file', () => {
    const action = {
      type: FileAction.LOAD_FILE,
      payload: {
        song: 'Hedwig\'s theme',
        fileName: 'Harry_Potter.mp3'
      }
    }
    const result = MIDIFileReducer(initialState, action);

    expect(result.song).toEqual('Hedwig\'s theme');
    expect(result.fileName).toEqual('Harry_Potter.mp3');
  });

  it('should return the default state ', () => {
    expect(MIDIFileReducer(undefined, TestUtils.ActionNullable())).toEqual(initialState);
  });

});