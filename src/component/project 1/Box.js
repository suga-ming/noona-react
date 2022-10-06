import React from "react";
// import rock from "./img/gawebawebo";

const Box = (props) => {
  let result;
  if (
    props.title === "Computer" &&
    props.rseult !== "tie" &&
    props.result !== ""
  ) {
    result = props.result === "win" ? "lose" : "win";
  } else {
    result = props.result;
  }

  return (
    <div className={`box ${result}`}>
      <div>{props.name}</div>
      <img src={props.item && props.item.img}></img>
      <div>{result}</div>
    </div>
  );
};

export default Box;
