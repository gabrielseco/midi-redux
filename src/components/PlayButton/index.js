import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import style from './style.scss';

class PlayButton extends Component {
  static propTypes = {
    play: PropTypes.func
  }
  constructor(props) {
    super(props);
  }

  render() {
    const { play } = this.props;

    return (
      <button
        className='btn play-button'
        onClick={play}
      />
    );
  }
};

export default connect()(PlayButton);
