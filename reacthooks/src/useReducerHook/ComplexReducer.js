import React, { useReducer } from "react";

const initialState = {
  firstCounter: 0,
  secondCounter: 10,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { ...state, firstCounter: state.firstCounter + action.value };
    case "decrement":
      return { ...state, firstCounter: state.firstCounter - action.value };
    case "reset":
      return initialState;
    case "increment2":
      return { ...state, secondCounter: state.secondCounter + action.value };
    case "decrement2":
      return { ...state, secondCounter: state.secondCounter - action.value };
    default:
      return state;
  }
};

const ComplexReducer = () => {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <div>Count - {count.firstCounter}</div>
      <div>Second Counter - {count.secondCounter}</div>
      <button type="" onClick={() => dispatch({ type: "increment", value: 1 })}>
        Increment
      </button>
      <button type="" onClick={() => dispatch({ type: "decrement", value: 1 })}>
        Decrement
      </button>

      <button
        type=""
        onClick={() => dispatch({ type: "increment2", value: 5 })}
      >
        Increment
      </button>
      <button
        type=""
        onClick={() => dispatch({ type: "decrement2", value: 5 })}
      >
        Decrement
      </button>
      <button type="" onClick={() => dispatch({ type: "reset" })}>
        Reset
      </button>
    </div>
  );
};

export default ComplexReducer;
