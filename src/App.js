import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decreaseCount,
  getLatestNews,
  increaseCount,
} from "./redux/actions/actionCreator";

const App = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state?.counter?.count);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => dispatch(decreaseCount())}>decrease</button>
      <button onClick={() => dispatch(increaseCount())}>increase</button>
      <br />
      <button onClick={() => dispatch(getLatestNews())}>getLatestNews</button>
    </div>
  );
};

export default App;
