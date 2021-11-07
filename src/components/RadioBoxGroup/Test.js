import React, { Component } from "react";
import { getAllStudents } from "../../service/student";
import RadioBoxGroup from "./index";

export default class Test extends Component {
  state = {
    datas: [],
    name: "loves",
    value: "",
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
        <RadioBoxGroup
          {...this.state}
          onChange={(val) => {
            this.setState({
              value: val,
            });
          }}
        />
      </div>
    );
  }
}
