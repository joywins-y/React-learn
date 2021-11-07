import React, { Component } from 'react';
import types from '../../utils/commonTypes';
import PropTypes from 'prop-types';

/**
 * 一组选单框
 */
export default class RadioBoxGroup extends Component {
  static defaultProps = {
    datas: [],
    value: '',
  };

  static propTypes = {
    datas: types.groupDatas.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func,
  };

  handleChange = (e) => {
    this.props.onChange &&
      this.props.onChange(e.target.value, this.props.name, e);
  };

  /**
   *
   * 得到一组单选框
   * @memberof RadioBoxGroup
   */
  getRadios() {
    return this.props.datas.map((item) => (
      <label key={item.value}>
        <input
          type="radio"
          name={this.props.name}
          value={item.value}
          checked={this.props.value === item.value}
          onChange={this.handleChange}
        />
        {item.text}
      </label>
    ));
  }

  render() {
    const boxs = this.getRadios();
    return <div>{boxs}</div>;
  }
}
