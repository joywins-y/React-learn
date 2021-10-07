import React, { Component } from "react";

export default class Tick extends Component {
  constructor(props) {
    super(props);
    // 初始状态
    this.state = {
      left: this.props.number,
      right: 0,
    };
    this.timer = setInterval(() => {
      // 重新设置状态，触发自动的重新渲染
      this.setState({
        left: this.state.left - 1,
        right: this.state.right + 1,
      });
      if (this.state.left === 0) {
        // 停止计时器
        clearInterval(this.timer);
      }
    }, 1000);
  }

  render() {
    return (
      <>
        <h1>计时器时间：{this.state.right}</h1>
        <h1> 倒计时剩余时间：{this.state.left}</h1>
      </>
    );
  }
}
