import React from "react";
import { useDispatch, useSelector } from "react-redux";

const Counter2 = () => {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();
  const increase = () => {
    dispatch({ type: "INCREASEMENT" });
  };
  return (
    <div>
      {count}
      <button onClick={increase}>증가</button>
    </div>
  );
};

export default Counter2;
