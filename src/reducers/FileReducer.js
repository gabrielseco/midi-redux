import FileAction from '../actions/FileActions';

export const initialState = {
  song: null,
  fileName: null
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
    default:
      return state;
  }
}
