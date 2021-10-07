import React, { Component } from "react";
import Ball from ".";
import { getRandom } from "../../util";

export default class BallList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ballInfoes: [],
    };

    const timer = setInterval(() => {
      // 获取小球的随机属性 - left、top、速度、背景颜色
      const info = {
        left: getRandom(0, document.documentElement.clientWidth - 100),
        top: getRandom(0, document.documentElement.clientHeight - 100),
        xSpeed: getRandom(50, 500),
        ySpeed: getRandom(50, 500),
        bg: `rgb(${getRandom(0, 255)}, ${getRandom(0, 255)}, ${getRandom(0, 255)})`,
      };
      this.setState({
        ballInfoes: [...this.state.ballInfoes, info],
      });
      // 控制小球个数
      if(this.state.ballInfoes.length > 30){
          clearInterval(timer);
      }
    }, 1000);
  }

  render() {
    const balls = this.state.ballInfoes.map((item, index) => (
      <Ball key={index} {...item} />
    ));
    return <div>{balls}</div>;
  }
}
