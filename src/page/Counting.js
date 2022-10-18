import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Box from "../component/Box";

const Counting = () => {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();
  const increaseNum = () => {
    dispatch({ type: "INCREASEMENT" });
  };
  const decreaseNum = () => {
    dispatch({ type: "DECREASEMENT" });
  };
  return (
    <div>
      <div>{count}</div>
      <button onClick={increaseNum}>증가</button>
      <button onClick={decreaseNum}>감소</button>
      <Box />
    </div>
  );
};

export default Counting;
