import React from "react";
import { useState } from "react";
import Useeffecthook from "./effect";

const MouseContainer = () => {
  const [display, setDisplay] = useState(true);
  console.log(display);
  return (
    <div>
      <button type="" onClick={() => setDisplay(!display)}>
        Toggle display
      </button>
      {display && <Useeffecthook />}
    </div>
  );
};

export default MouseContainer;
