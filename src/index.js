import React from "react";
import ReactDOM from "react-dom";
import StudentList from "./components/StudentList";

const appkey = "despair_1593934729887";
const container = document.getElementById("root");

/**
 * 获取所有的学生数据
 */
async function fetchAllStudents() {
  const students = await fetch(
    "http://api.duyiedu.com/api/student/findAll?appkey=" + appkey
  )
    .then((resp) => resp.json())
    .then((resp) => resp.data);
  return students;
}

async function render() {
  // 获取学生数据
  const stus = await fetchAllStudents();
  ReactDOM.render(<StudentList stus={stus} />, container);
}

render();
