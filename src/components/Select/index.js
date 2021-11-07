import React, { Component } from 'react';
import PropTypes from 'prop-types';
import types from '../../utils/commonTypes';
import withDataGroup from '../HocComp/withDataGroup';

class Option extends Component {
  static propTypes = {
    info: types.singleData,
  };

  render() {
    return (
      <option value={this.props.info.value}>{this.props.info.text}</option>
    );
  }
}

const Options = withDataGroup(Option);

class Select extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func,
  };

  render() {
    return (
      <select
        name={this.name}
        value={this.props.value}
        onChange={(e) =>
          this.props.onChange && this.props.onChange(e.target.value)
        }
      >
        <Options {...this.props}></Options>
      </select>
    );
  }
}

export default Select;
