import React, { Component } from 'react';
import { connect } from 'react-redux';

import style from './style.scss';

class InstrumentImage extends Component {
  static propTypes = {
    instrument: React.PropTypes.string
  }
  render() {
    const {
      instrument
    } = this.props;

    const className = `instrument instrument-${instrument} col s1`;

    return <div className={className} />
  }
}

export default connect()(InstrumentImage);
