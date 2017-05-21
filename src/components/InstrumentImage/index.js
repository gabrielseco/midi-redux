import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import style from './style.scss';

export class InstrumentImage extends Component {
  render() {
    const {
      instrument
    } = this.props;

    const className = `instrument instrument-${instrument} col s1`;

    return <div className={className} />
  }
}

InstrumentImage.propTypes = {
  instrument: PropTypes.string
}

export default connect()(InstrumentImage);
