import React, { useReducer } from "react";

const initialState = 0;

const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return initialState;
  }
};

const UseReducerHook = () => {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <div>Count - {count}</div>
      <button type="" onClick={() => dispatch("increment")}>
        Increment
      </button>
      <button type="" onClick={() => dispatch("decrement")}>
        Decrement
      </button>
      <button type="" onClick={() => dispatch("reset")}>
        Reset
      </button>
    </div>
  );
};

export default UseReducerHook;
