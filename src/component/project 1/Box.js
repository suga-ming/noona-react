import React from "react";
// import rock from "./img/gawebawebo";

const Box = (props) => {
  return (
    <div className="box">
      <div>{props.name}</div>
      <img src={props.item && props.item.img}></img>
      <div>{props.result}</div>
    </div>
  );
};

export default Box;
