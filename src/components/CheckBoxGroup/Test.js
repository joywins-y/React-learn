import React, { Component } from "react";
import CheckBoxGroup from "./index";
import { getAllStudents } from "../../service/student";

export default class Test extends Component {
  state = {
    datas: [
      { value: "football", text: "足球" },
      { value: "basketball", text: "篮球" },
      { value: "movie", text: "电影" },
    ],
    name: "loves",
    chooseDatas: ["football"],
  };

  async componentDidMount() {
    const stus = await getAllStudents();
    this.setState({
      datas: stus.map((item) => ({
        value: item.id.toString(),
        text: item.name,
      })),
    });
  }

  render() {
    return (
      <div>
        <CheckBoxGroup
          {...this.state}
          onChange={(newArr) => {
            this.setState({
              chooseDatas: newArr,
            });
          }}
        />
      </div>
    );
  }
}
