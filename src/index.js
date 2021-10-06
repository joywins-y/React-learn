import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import img1 from "./assets/0.png";
import img2 from "./assets/1.jpg";
import img3 from "./assets/2.jpeg";

// 保存图片路径的数组
const imgs = [img1, img2, img3];
// 显示的图片索引
let index = 1;
let timer = null;

const container = document.getElementById("root");

/**
 * 根据index的值，显示某张照片
 */
function render() {
  ReactDOM.render(<img alt="111" src={imgs[index]} />, container);
}

/**
 * 启动计时器，每隔一段时间，切换图片
 */
function start() {
  stop();
  timer = setInterval(() => {
    // 改变index的值
    index = (index + 1) % 3;
    render();
  }, 1000);
}

/**
 * 停止计时器
 */
function stop() {
  clearInterval(timer);
}

container.onmouseenter = function () {
  stop();
};

container.onmouseleave = function () {
  start();
};

render();
start();
