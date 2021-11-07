import React, { Component } from "react";

/**
 * 一组选单框
 */
export default class RadioBoxGroup extends Component {
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
