import FileAction from '../actions/FileActions';

export const initialState = {
  song: null,
  fileName: null,
  incorrectFile: false
};

export default function MIDIFileReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case FileAction.LOAD_FILE:
      return {
        ...state,
        song:     payload.song,
        fileName: payload.fileName
      };
    case FileAction.INCORRECT_FILE:
      return {
        ...state,
        incorrectFile: true
      }
    default:
      return state;
  }
}
