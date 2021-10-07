import React from "react";
import ReactDOM from "react-dom";
import Tick from "./components/Tick";
import Ball from "./components/Ball";
import BallList from "./components/Ball/BallList";
import "./index.css";

// ReactDOM.render(<Tick number={10} />, document.getElementById("root"));

// ReactDOM.render(
//   <Ball bg="lightblue" xSpeed={100} ySpeed={200} left={100} top={100} />,
//   document.getElementById("root")
// );

ReactDOM.render(<BallList />, document.getElementById("root"));
