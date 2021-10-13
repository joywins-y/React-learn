import React from "react";
import "./index.css";

export default function Modal(props) {
  // 默认属性
  const defaultProps = {
    bg: "rgba(0,0,0,.5)",
  };

  const datas = Object.assign({}, defaultProps, props);

  return (
    <div
      className="modal"
      style={{ background: datas.bg }}
      //   onClick={datas.onClose}
      onClick={(e) => {
        if (e.target.className === "modal") {
          datas.onClose();
        }
      }}
    >
      <div className="modal-center">{datas.children}</div>
    </div>
  );
}
