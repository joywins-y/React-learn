import React, { Component } from "react";
import Modal from "./Modal";
import Pager from "./Pager";
import StudentList from "./StudentList";

export default class PagerTest extends Component {
  state = {
    current: 1, // 初始页码
    total: 1, // 总数据量
    pageSize: 1, // 每页显示的数据量
    panelNumber: 5, // 数字页码最多显示多少个
    students: [], 
    isLoading: false,
  };

  constructor(props) {
    super(props);
    this.fetchStudents();
  }

  /**
   * 获取学生数据，设置每页数据
   */
  fetchStudents = async () => {
    this.setState({
      isLoading: true,
    });
    const resp = await fetch(
      `http://api.duyiedu.com/api/student/findByPage?appkey=despair_1593934729887&page=${this.state.current}&size=${this.state.pageSize}`
    )
      .then((resp) => resp.json())
      .then((resp) => resp.data);
    this.setState({
      total: resp.cont,
      students: resp.findByPage,
      isLoading: false,
    });
  };

  /**
   * 页码改变处理事件
   * @param {*} newPage 新页码
   */
  handlePageChange = (newPage) => {
    this.setState({
      current: newPage,
    });
    this.fetchStudents();
  };

  render() {
    return (
      <div className="container">
        <StudentList stus={this.state.students} />
        <div className="pager">
          <Pager {...this.state} onPageChange={this.handlePageChange} />
        </div>
        <Modal show={this.state.isLoading} />
      </div>
    );
  }
}
