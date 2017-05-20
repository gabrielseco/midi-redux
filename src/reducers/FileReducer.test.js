import MIDIFileReducer, { initialState } from './FileReducer';
import FileAction from '../actions/FileActions';
import { TestUtils } from '../utils/TestUtils';

describe('FileAction', () => {
  it('should dispatch LOAD_FILE', () => {
    const song = 'Hedwig\'s theme';
    const fileName = 'Harry_Potter.mp3';

    const action = {
      type: FileAction.LOAD_FILE,
      payload: {
        song,
        fileName
      }
    }
    const result = MIDIFileReducer(initialState, action);

    expect(result.song).toEqual(song);
    expect(result.fileName).toEqual(fileName);
  });

  it('it should dispatch INCORRECT_FILE', () => {
    const action = {
    type: FileAction.INCORRECT_FILE,
      payload: null
    }
    const result = MIDIFileReducer(initialState, action);

    expect(result.incorrectFile).toBeTruthy();
  });

  it('should return the default state ', () => {
    expect(MIDIFileReducer(undefined, TestUtils.ActionNullable())).toEqual(initialState);
  });
  

});