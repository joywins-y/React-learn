import React, { Component } from "react";
import "./index.css";

export default class Ball extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // 横坐标
      left: props.left || 0,
      // 纵坐标
      top: props.top || 0,
      xSpeed: props.xSpeed,
      ySpeed: props.ySpeed,
    };
    // 间隔的毫秒数
    let duration = 16;

    setInterval(() => {
      const xDis = (this.state.xSpeed * duration) / 1000;
      const yDis = (this.state.ySpeed * duration) / 1000;
      // 根据速度，改变left和top的值
      let newLeft = this.state.left + xDis;
      let newTop = this.state.top + yDis;
      // 横坐标反向
      if (newLeft <= 0) {
        newLeft = 0;
        this.setState({
          xSpeed: -this.state.xSpeed,
        });
      } else if (newLeft >= document.documentElement.clientWidth - 100) {
        newLeft = document.documentElement.clientWidth - 100;
        this.setState({
          xSpeed: -this.state.xSpeed,
        });
      }
      // 纵坐标反向
      if (newTop <= 0) {
        newTop = 0;
        this.setState({
          ySpeed: -this.state.ySpeed,
        });
      } else if (newTop >= document.documentElement.clientHeight - 100) {
        newTop = document.documentElement.clientHeight - 100;
        this.setState({
          ySpeed: -this.state.ySpeed,
        });
      }

      this.setState({
        left: newLeft,
        top: newTop,
      });
    }, duration);
  }
  
  render() {
    return (
      <div
        className="ball"
        style={{
          left: this.state.left,
          top: this.state.top,
          background: this.props.bg || "#f40",
        }}
      ></div>
    );
  }
}
