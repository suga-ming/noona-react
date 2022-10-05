import { useState } from "react";
import "./App.css";
import Box from "./component/Box";

function App() {
  const [number, setNumber] = useState(0);
  const increase = () => {
    setNumber(number + 1);
  };

  return (
    <div>
      <Box name="지수" num="1" />
      <Box name="제니" num="2" />
      number = {number}
      <br />
      <button onClick={increase}>증가</button>
    </div>
  );
}

export default App;
