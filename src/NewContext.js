// import React, { Component } from 'react'
// const ctx = React.createContext({
//   a: 0, b: 'abc'
// })
// export default class NewContext extends Component {
//   render() {
//     const Provider = ctx.Provider;
//     return (
//      <Provider>
//        <div></div>
//      </Provider>
//     )
//   }
// }

import React, { Component } from 'react';
const ctx = React.createContext();

function ChildA(props) {
  return (
    <div>
      <h1>ChildA</h1>
      <ChildB />
    </div>
  );
}

class ChildB extends React.Component {
  static contextType = ctx;

  render() {
    return (
      <p>
        ChildB, 来自于上下文的数据：a:{this.context.a}, b:{this.context.b}
      </p>
    );
  }
}

export default class NewContext extends Component {
  state = {
    a: 0,
    b: 'abc',
  };
  render() {
    return (
      <ctx.Provider value={this.state}>
        <div>
          <ChildA />
        </div>
      </ctx.Provider>
    );
  }
}
