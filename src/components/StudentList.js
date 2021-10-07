import React from "react";
import Student from "./Student";

// 学生列表
export default function StudentList(props) {
  const stus = props.stus.map((item) => <Student key={item.id} {...item} />);
  return <ul>{stus}</ul>;
}
