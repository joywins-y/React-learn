import React, { Component } from "react";

/**
 * 一组多选框
 */
export default class CheckBoxGroup extends Component {
  handleChange = (e) => {
    let newArr;
    if (e.target.checked) {
      newArr = [...this.props.chooseDatas, e.target.value];
    } else {
      newArr = this.props.chooseDatas.filter((item) => item !== e.target.value);
    }
    this.props.onChange && this.props.onChange(newArr, this.props.name, e);
  };
  /**
   * 得到一组多选框
   * @memberof CheckBoxGroup
   */
  getCheckBox() {
    return this.props.datas.map((item) => (
      <label key={item.value}>
        <input
          type="checkbox"
          name={this.props.name}
          value={item.value}
          checked={this.props.chooseDatas.includes(item.value)}
          onChange={this.handleChange}
        />
        {item.text}
      </label>
    ));
  }
  render() {
    const boxs = this.getCheckBox();
    return <div>{boxs}</div>;
  }
}
