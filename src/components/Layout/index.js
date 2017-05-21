import React, { Component } from 'react';
import PropTypes from 'prop-types';

import * as PlayerActions from '../../action-creators/PlayerActions';
import * as FileActions from '../../action-creators/FileActions';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Player from '../Player';
import { Line } from 'rc-progress';

import style from './style.scss';

export function mapStateToProps(state) {
  return { midi: state.midi, file: state.file, player: state.player };
}

export function mapDispatchToProps(dispatch) {
  return {
    playerActions: bindActionCreators(PlayerActions, dispatch),
    fileActions: bindActionCreators(FileActions, dispatch)
  };
}

export class Layout extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    const {
      midi,
      player,
      file
    } = this.props;

    const play = this.props.playerActions.play;
    const readMidiFile = this.props.fileActions.readMidiFile;

    return (
      <section className='section layout no-pad-bot'>
        <div className='container layout-container'>
          <h1 className='layout-title'>MIDI File Player</h1>
          <Player
            midi={midi}
            player={player}
            file={file}
            readMidiFile={readMidiFile}
            play={play}
          />
        </div>
      </section>
    );
  }
}

Layout.propTypes = {
  midi: PropTypes.object,
  player: PropTypes.object,
  file: PropTypes.object,
  playerActions: PropTypes.object,
  fileActions: PropTypes.object
}


export default connect(mapStateToProps, mapDispatchToProps)(Layout);
