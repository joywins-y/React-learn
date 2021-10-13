import React, { Component } from "react";
import Modal from "./Modal";

export default class Test extends Component {
  state = {
    isShow: false,
  };

  showModal = () => {
    this.setState({
      isShow: true,
    });
  };

  hideModal = () => {
    this.setState({
      isShow: false,
    });
  };
  render() {
    return (
      <div>
        {this.state.isShow ? (
          <Modal bg="rgba(0, 0, 0, .3)" onClose={this.hideModal}>
            <h1>hjkhkjsdakdbnasj</h1>
            <button onClick={this.hideModal}>关闭</button>
          </Modal>
        ) : (
          ""
        )}
        <button onClick={this.showModal}>显示</button>
      </div>
    );
  }
}
