import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ImgCom extends Component {
  static propTypes = {
    imgSrc: PropTypes.arrayOf(PropTypes.string).isRequired, // 图片路径数组
    imgWidth: PropTypes.number.isRequired, // 单张图片宽度
    imgHeight: PropTypes.number.isRequired, // 单张图片高度
    duration: PropTypes.number.isRequired, // 在指定时间内完成动画切换
  };

  containerRef = (e) => (this.div = e);

  // 计时器间隔时间
  tick = 16;
  timer = null;

  /**
   * 切换到指定图片
   * 调用该函数，此组件会经过一段动画完成切换
   * @param {*} index 从0开始
   */
  switchTo(index) {
    console.log(this.div);
    if (index < 0) {
      index = 0;
    } else if (index > this.props.imgSrc.length - 1) {
      index = this.props.imgSrc.length - 1;
    }
    // 1.根据index，计算div的最终的marginLeft
    const targetLeft = -index * this.props.imgWidth;
    // 2.得到当前的marginLeft
    let curLeft = parseFloat(window.getComputedStyle(this.div).marginLeft);
    // 3.计算运动的次数
    const times = Math.ceil(this.props.duration / this.tick);
    let curTimes = 0; // 当前的运动次数
    // 4.计算每次运动的距离
    const totalDis = targetLeft - curLeft; // 总距离
    const dis = totalDis / times; // 每次运动的距离
    // 先停止之前的计时器
    clearInterval(this.timer);
    this.timer = setInterval(() => {
      curTimes++;
      curLeft += dis;
      this.div.style.marginLeft = curLeft + 'px';
      if (curTimes === times) {
        //  停止运动
        this.div.style.marginLeft = targetLeft + 'px';
        clearInterval(this.timer);
      }
    }, this.tick);
  }

  render() {
    const imgs = this.props.imgSrc.map((src, index) => (
      <img
        src={src}
        key={index}
        alt={index}
        style={{
          width: this.props.imgWidth,
          height: this.props.imgHeight,
          float: 'left',
        }}
      />
    ));
    return (
      <div
        style={{
          width: this.props.imgSrc.length * this.props.imgWidth,
          height: this.props.imgHeight,
        }}
        ref={this.containerRef}
      >
        {imgs}
      </div>
    );
  }
}
