import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classes from '../../utils/Classes';

export function mapStateToProps(state) {
  return { file: state.file };
}

export const Notification = ({ file }) => (
  <div className={classes({ 'notification': true, 'hidden': !file.incorrectFile })}>
    <h1>hola</h1>
    <h2>{JSON.stringify(file, null, 4)}</h2>
  </div>
);

Notification.propTypes = {
  file: PropTypes.object
}

export default connect(mapStateToProps, {})(Notification);