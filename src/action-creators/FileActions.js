import FileAction from '../actions/FileActions';

export function readMidiFile(_event) {
  return (dispatch) => {
    let reader, file;

    file = _event.target.files[0];
    reader = new FileReader();

    if (!isIncorrectFile(dispatch, file)) {
      reader.onload = function() {
        let song, fileName;

        song = reader.result;
        fileName = file.name;

        dispatch({
          type: FileAction.LOAD_FILE,
          payload: { song, fileName }
        });
      };

      reader.readAsBinaryString(file);
    }
  };
}

function isIncorrectFile(dispatch, file) {
  return file.type !== '.mid' || file.type !== '.midi' ?
    dispatch({
      type: FileAction.INCORRECT_FILE
    }) :
    false
}