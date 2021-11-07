import React, { Component } from 'react';
import types from '../../utils/commonTypes';
import PropTypes from 'prop-types';
import withDataGroup from '../HocComp/withDataGroup';

class Radio extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    info: types.singleData,
    onChange: PropTypes.func,
  };
  render() {
    return (
      <label>
        <input
          type="radio"
          name={this.props.name}
          value={this.props.info.value}
          checked={this.props.value === this.props.info.value}
          onChange={() =>
            this.props.onChange && this.props.onChange(this.props.info.value)
          }
        />
        {this.props.info.text}
      </label>
    );
  }
}

export default withDataGroup(Radio);