import React from "react";

const Box = (props) => {
  return (
    <div>
      <div className="box">
        box {props.num} {props.name}
      </div>
    </div>
  );
};

export default Box;
