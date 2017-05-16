import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import MusicFeedback from '../MusicFeedback';
import PlayButton from '../PlayButton';
import LoadFileButton from '../LoadFileButton';
import TrackInstruments from '../TrackInstruments';

import style from './style.scss';

class Player extends Component {
  static propTypes = {
    file: PropTypes.object,
    midi: PropTypes.object,
    player: PropTypes.object,
    readMidiFile: PropTypes.func,
    play: PropTypes.func
  }
  constructor(props) {
    super(props);
  }

  render() {
    const {
      file,
      midi,
      player,
      readMidiFile,
      play
    } = this.props;

    return (
      <section className='card player'>

        <header className='card-content center-align player-content'>
          <PlayButton
            play={play}
          />

          <LoadFileButton
            readMidiFile={readMidiFile}
            fileName={file.fileName}
          />

          <MusicFeedback
            song={file.song}
            tempo={midi.tempo}
            fileName={file.fileName}
            readMidiFile={readMidiFile}
            isMidiPlaying={midi.isPlaying}
            isPlayerPlaying={player.isPlaying}
          />

          <p>Song: {file.fileName}</p>
        </header>

        <section className='card-action player-action'>
          <TrackInstruments
            tracks={midi.tracks}
            deltaTime={midi.deltaTime}
            instruments={player.instruments}
          />
        </section>
      </section>
    );
  }
};

export default connect()(Player);
