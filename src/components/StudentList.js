import React, { Component } from "react";
import Student from "./Student";

export default class StudentList extends Component {
  render() {
    // 获取组件数组
    const students = this.props.stus.map((item) => <Student {...item} key={item.id}/>);
    return <div>{students}</div>;
  }
}
