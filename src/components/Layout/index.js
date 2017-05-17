import React, { Component } from 'react';
<<<<<<< .merge_file_pKrvcA
=======
import PropTypes from 'prop-types';
>>>>>>> .merge_file_nKoiLl

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

<<<<<<< .merge_file_pKrvcA
export class Layout extends Component {
=======
class Layout extends Component {
  static propTypes = {
    midi: PropTypes.object,
    player: PropTypes.object,
    file: PropTypes.object,
    playerActions: PropTypes.object,
    fileActions: PropTypes.object
  }
>>>>>>> .merge_file_nKoiLl
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
<<<<<<< .merge_file_pKrvcA
      <section className="section layout no-pad-bot">
        <div className="container layout-container">
          <h1 class="layout-title">MIDI File Player</h1>
         <Player
=======
      <section className='section layout no-pad-bot'>
        <div className='container layout-container'>
          <h1 className='layout-title'>MIDI File Player</h1>
          <Player
>>>>>>> .merge_file_nKoiLl
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


export default connect(mapStateToProps, mapDispatchToProps)(Layout);
