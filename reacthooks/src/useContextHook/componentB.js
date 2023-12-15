import React, { useContext } from "react";
import CompC from "./componentC";

import { UserContext, ChannelContext, CountContext } from "../App";

const CompB = () => {
  const user = useContext(UserContext);
  const channel = useContext(ChannelContext);
  const Count = useContext(CountContext);
  return (
    <div>
      <CompC />
      <button
        type=""
        onClick={() => Count.countDispatch({ type: "increment", value: 1 })}
      >
        Increment
      </button>
      <button
        type=""
        onClick={() => Count.countDispatch({ type: "decrement", value: 1 })}
      >
        Decrement
      </button>
    </div>
  );
};

export default CompB;
