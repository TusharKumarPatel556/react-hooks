import React, { useReducer } from "react";
import "./App.css";
import UseStateHook from "./useStatehook/usestareHook";
import Counter from "./useStatehook/counter";
import Useeffecthook from "./useEffecthook/effect";
import MouseContainer from "./useEffecthook/mousecontainer";
import UseContexthook from "./useContextHook/useContexthook";
import UseReducerHook from "./useReducerHook/UseReducerHook";
import ComplexReducer from "./useReducerHook/ComplexReducer";

export const UserContext = React.createContext();
export const ChannelContext = React.createContext();
export const CountContext = React.createContext();

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

function App() {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="App">
      <UserContext.Provider>
        <ChannelContext.Provider>
          <CountContext.Provider
            value={{ countState: count, countDispatch: dispatch }}
          >
            <div>Counter-{count.firstCounter}</div>

            <UseContexthook />
          </CountContext.Provider>
        </ChannelContext.Provider>
      </UserContext.Provider>
    </div>
  );
}

export default App;
