import React, { Component } from "react";

/**
 * Select
 */
export default class Select extends Component {
  handleChange = (e) => {
    this.props.onChange &&
      this.props.onChange(e.target.value, this.props.name, e);
  };

  /**
   *
   * 得到一组Select
   * @memberof Select
   */
  getOptions() {
    return this.props.datas.map((item) => (
      <option key={item.value} value={item.value}>
        {item.text}
      </option>
    ));
  }

  render() {
    const options = this.getOptions();
    return (
      <select name={this.props.name} value={this.props.value} onChange={this.handleChange}>
        {options}
      </select>
    );
  }
}
