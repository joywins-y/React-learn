import React from 'react';
import './index.css';
import PropTypes from 'prop-types';
import types from '../../utils/commonTypes';

// 默认属性
Modal.defaultProps = {
  bg: 'rgba(0,0,0,.5)',
};

Modal.propTypes = {
  children: types.children,
  bg: PropTypes.string,
  onClose: PropTypes.func,
}

export default function Modal(props) {
  return (
    <div
      className="modal"
      style={{ background: props.bg }}
      onClick={(e) => {
        if (e.target.className === 'modal') {
          props.onClose();
        }
      }}
    >
      <div className="modal-center">{props.children}</div>
    </div>
  );
}
