import React from "react";
import { useSelector } from "react-redux";

const App = () => {
  const test = useSelector((state) => state.test);
  console.log("🚀 ~ App ~ test:", test);

  return <h1>App</h1>;
};

export default App;
