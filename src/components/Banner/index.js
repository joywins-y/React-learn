import React, { Component } from 'react';
import './index.css';
import PropTypes from 'prop-types';
import ImgCom from './imgCom';
import SwithArrow from './SwitchArrow';
import SwithDot from './SwitchDot';

export default class Banner extends Component {
  static defaultProps = {
    width: 620,
    height: 480,
    imgSrc: [],
    autoDuration: 3000,
    duration: 2000,
  };

  static propTypes = {
    width: PropTypes.number.isRequired, // 容器宽度
    height: PropTypes.number.isRequired, // 容器高度
    imgSrc: PropTypes.arrayOf(PropTypes.string).isRequired, // 图片路径数组
    autoDuration: PropTypes.number.isRequired, // 自动切换的间隔时间
    duration: PropTypes.number.isRequired, // 完成一次切换需要的时间
  };

  state = {
    curIndex: 0, // 当前显示的图片index
  };

  timer = null; // 自动切换的计时器

  componentDidMount() {
    this.autoSwitch();
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  autoSwitch() {
    clearInterval(this.timer);
    this.timer = setInterval(() => {
      let cur = this.state.curIndex;
      cur = (cur + 1) % this.props.imgSrc.length;
      this.handleSwitch(cur);
    }, this.props.autoDuration);
  }

  imgComRef = (e) => (this.ImgCom = e);

  /**
   * 切换到指定图片
   * @param {*} index
   */
  handleSwitch = (index) => {
    this.setState({
      curIndex: index,
    });
    // 得到ImgCom的组件对象
    this.ImgCom.switchTo(index);
  };

  handleArrowChange = (type) => {
    let cur = this.state.curIndex;
    if (type === 'left') {
      cur--;
      if (cur < 0) {
        cur = this.props.imgSrc.length - 1;
      }
    } else {
      cur++;
      if (cur > this.props.imgSrc.length - 1) {
        cur = 0;
      }
    }
    this.handleSwitch(cur);
  };

  render() {
    return (
      <div
        className="banner-container"
        style={{
          width: this.props.width,
          height: this.props.height,
        }}
        onMouseEnter={() => clearInterval(this.timer)}
        onMouseLeave={() => this.autoSwitch()}
      >
        <ImgCom
          imgSrc={this.props.imgSrc}
          imgWidth={this.props.width}
          imgHeight={this.props.height}
          duration={this.props.duration}
          ref={this.imgComRef}
        />
        <SwithArrow onChange={this.handleArrowChange} />
        <SwithDot
          total={this.props.imgSrc.length}
          curIndex={this.state.curIndex}
          onChange={this.handleSwitch}
        />
      </div>
    );
  }
}
