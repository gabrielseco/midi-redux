import React, { Component } from 'react';
import { connect } from 'react-redux';
import LoadFileButton from '../LoadFileButton';
import { Circle } from 'rc-progress';
import style from './style.scss';

class MusicFeedback extends Component {
  static propTypes = {
    song: React.PropTypes.string,
    isMidiPlaying: React.PropTypes.bool,
    isPlayerPlaying: React.PropTypes.bool,
    deltaTime: React.PropTypes.number,
    readMidiFile: React.PropTypes.func,
    fileName: React.PropTypes.string,
    maxDeltaTime: React.PropTypes.number,
    tempo: React.PropTypes.number
  }
  constructor(props) {
    super(props);
  }

  render() {
    const {
      song,
      isMidiPlaying,
      isPlayerPlaying,
      deltaTime,
      readMidiFile,
      fileName,
      maxDeltaTime,
      tempo
    } = this.props;

    const isPlaying   = song && isMidiPlaying;
    const isLoading   = song && !isMidiPlaying && isPlayerPlaying;
    const strokeWidth = 3;
    const strokeColor = '#ff6c4f';

    let percent, className, feedback;

    if (isLoading) {
      percent   = 10;
      className = 'loading loading-spin';
      feedback  = "";
    } else if (isPlaying) {
      percent   = 100;
      className = 'loading';
      feedback  = tempo;
    } else {
      percent   = 0;
      className = 'loading';
      feedback  = "";
    }

    return (
      <div className='feedback'>
        <p className='feedback-tempo'>{feedback}</p>
        <Circle
          percent={percent}
          strokeWidth={strokeWidth}
          strokeColor={strokeColor}
          className={className} />
        <p>Tempo</p>
      </div>
    );
  }
};

export default connect()(MusicFeedback);
