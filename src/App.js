import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decreaseCount, increaseCount } from "./redux/actions/actionCreator";

const App = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state?.counter?.count);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => dispatch(decreaseCount())}>decrease</button>
      <button onClick={() => dispatch(increaseCount())}>increase</button>
    </div>
  );
};

export default App;
