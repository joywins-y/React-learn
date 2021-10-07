import React from "react";
import "./index.css";

/**
 * 分页组件
 * @param {*} props 
 * @return {*} 
 */
export default function Pager(props) {
  /**
   * 计算总页数
   * @param {*} props 参数
   * @return {*} 返回总页数值
   */
  const getPageNumber = (props) => {
    return Math.ceil(props.total / props.pageSize);
  };

  /**
   * 跳转到指定页码
   * @param {*} target 目标页码
   * @param {*} props 所有属性
   */
  const toPage = (target, props) => {
    // 当前页码为目标页码
    if (props.current === target) {
      return;
    }
    props.onPageChange && props.onPageChange(target);
  };

  /**
   * 计算最小数
   * @param {*} props
   * @return {*}
   */
  const getMinNumber = (props) => {
    let min = props.current - Math.floor(props.panelNumber / 2);
    if (min < 1) {
      min = 1;
    }
    return min;
  };

  /**
   * 计算最大数
   * @param {*} min 最小值
   * @param {*} total 总页数
   * @param {*} props 所有属性
   * @return {*} 返回最大值
   */
  const getMaxNumber = (min, total, props) => {
    let max = min + props.panelNumber - 1;
    if (max > total) {
      max = total;
    }
    return max;
  };

  const total = getPageNumber(props);
  if (total === 0) {
    return;
  }

  const min = getMinNumber(props);
  const max = getMaxNumber(min, total, props);
  const numbers = [];
  for (let i = min; i <= max; i++) {
    numbers.push(
      <span
        key={i}
        onClick={() => {
          toPage(i, props);
        }}
        className={i === props.current ? "item active" : "item"}
      >
        {i}
      </span>
    );
  }

  return (
    <>
      <span
        className={props.current === 1 ? "item disabled" : "item"}
        onClick={() => toPage(1, props)}
      >
        首页
      </span>
      <span
        className={props.current === 1 ? "item disabled" : "item"}
        onClick={() =>
          toPage(props.current - 1 < 1 ? 1 : props.current - 1, props)
        }
      >
        上一页
      </span>
      {/* 中间数字页码 */}
      {numbers}
      <span
        className={props.current === total ? "item disabled" : "item"}
        onClick={() =>
          toPage(props.current + 1 > total ? total : props.current + 1, props)
        }
      >
        下一页
      </span>
      <span
        className={props.current === total ? "item disabled" : "item"}
        onClick={() => toPage(total, props)}
      >
        尾页
      </span>
      <span className="current">{props.current}</span> / <span>{total}</span>
    </>
  );
}
